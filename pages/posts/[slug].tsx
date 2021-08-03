import PostContent from '../../components/posts/post-content';
import { getPostData, getPostsFiles } from '../../lib';

export default function PostDetail({ post }: any) {
  return <PostContent post={post} />;
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename: any) =>
    filename.replace(/.md$/, ''),
  );

  return {
    paths: slugs.map((slug: any) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
