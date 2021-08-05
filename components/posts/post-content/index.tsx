import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostDetail = ({ post }: any) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // eslint-disable-next-line react/display-name
    p: (paragraph: any) => {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0].properties;

        return (
          <div className="w-full flex justify-center">
            <Image
              src={`/images/posts/${post.slug}/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    // eslint-disable-next-line react/display-name
    code: (code: any) => {
      const {
        node: { children },
      } = code;

      return (
        <SyntaxHighlighter language={'javascript'} style={atomDark}>
          {children[0].value}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className="bg-gray-400 pt-6 pb-4 min-h-screen">
      <div className="container mx-auto border rounded p-4 w-9/12 mx-auto bg-gray-100">
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderers}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default PostDetail;
