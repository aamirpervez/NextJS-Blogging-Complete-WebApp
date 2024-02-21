import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import Image from 'next/image';
import { PrismLight as SyntaxHighligther} from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';


SyntaxHighligther.registerLanguage('js',js);
SyntaxHighligther.registerLanguage('css',css);


function PostContent(props){

    const {post}=props;
    
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenders = {
        p(paragraph)
        {
            const {node} = paragraph;

            if(node.children[0].tagName  === 'img'){
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                    return <Image 
                                src={`/images/posts/${post.slug}/${image.properties.src}`} 
                                alt={image.alt} 
                                width={600} 
                                height={300}
                            />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },

        code(code){
            const { className, children } = code;
            const language = className.split('-')[1]; 
            // className is something like language-js => We need the "js" part here

            return <SyntaxHighligther
                    style={atomDark}
                    language={language} 
                    children={children} 
             />
        },
    };

    return   <article className={classes.content}>
                    <PostHeader title={post.title} image={imagePath}/>
                    <ReactMarkdown components={customRenders}>
                       {post.content}
                    </ReactMarkdown>                       
                </article>
}

export default PostContent;