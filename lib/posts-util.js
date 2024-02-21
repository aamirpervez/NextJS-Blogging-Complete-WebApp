//Install - npm install gray-matter to read MD File.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory= path.join(process.cwd(),'content/posts/');

export function getPostsFiles(){
    return fs.readdirSync(postsDirectory);
}
 export function getPostData(postIdentifier){

    const postSlug = postIdentifier.replace(/\.[^/.]+$/, ""); //.replace(/\/.md$/,''); //removes file extension...
    const filePath = path.join(postsDirectory,`${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath,'utf-8');
    const {data,content } = matter(fileContent);

    const postData = {
        slug:postSlug,
        ...data,
        content
    }

    return postData;
}

export function getAllPosts(){
  const postFiles =  getPostsFiles();
  
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  })

  const sortedPosts =  allPosts.sort((postA,postB) => postA.data > postB.date ? -1 : 1);

  return sortedPosts;
}

export function getFeaturedPosts(){
    
    const allposts = getAllPosts();
    const featuredPosts =  allposts.filter(post => post.isFeatured);
   
    return featuredPosts;
}
