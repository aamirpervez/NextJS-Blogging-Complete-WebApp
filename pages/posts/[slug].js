import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from 'next/head';

function PostDetailPage(props) {
     return (
     <>
     <Head>
            <title>{props.post.title}</title>
            <meta name="description" content={props.post.excerpt} />
         </Head>
         <PostContent post={props.post} />
     </> 
     )
}

export function getStaticProps(context){

const {params} = context;
const {slug}= params;

const postData = getPostData(slug);

    return {
        props:{
            post : postData
        },
        revalidate:600
    };
}

export function getStaticPaths(){
    
    const allPostFileNames = getPostsFiles();
    const slugs = allPostFileNames.map((fileName) => fileName.replace(/\.[^/.]+$/, "")); 

    return {
        paths:slugs.map(slug => ({params: {slug:slug} })),
        fallback:false
    }
}

export default PostDetailPage;