import Hero from "../components/home-page/hero";
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import { getFeaturedPosts } from "../lib/posts-util";
import Head from 'next/head';


function HomePage(props) {
   
    return (
        <>
        <Head>
            <title>Welcome to Blogs Site.</title>
            <meta name="description" content="I post about programming languages." />
        </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    )
}

export function getStaticProps(){
    const featuredPosts = getFeaturedPosts();
    return{
        props:{
            posts : featuredPosts
        }
    }
}

export default HomePage;