import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../utils';
import { Fragment } from 'react';
import Head from 'next/head';

export default function AllPostsPage({ posts }: any) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="List of all javascript posts" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
