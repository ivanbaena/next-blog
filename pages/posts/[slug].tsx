import PostContent from '../../components/posts/post-content';
import { getPostData, getPostsFiles } from '../../utils';
import { Fragment } from 'react';
import Head from 'next/head';

export default function PostDetail({ post }: any) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
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
