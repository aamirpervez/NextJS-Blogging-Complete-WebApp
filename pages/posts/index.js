import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/posts-util";
import Head from 'next/head';

function AllPostsPage(props) {
   
   return (
   <>
        <Head>
            <title>All Posts</title>
            <meta name="description" content="List of all programming languages." />
         </Head>
     <AllPosts posts={props.posts} />
   </>
   )
}

export function getStaticProps(){
    const allposts = getAllPosts();

    return {
        props: { 
            posts : allposts
        }
    }
}

export default AllPostsPage;