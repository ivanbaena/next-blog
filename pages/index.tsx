import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/hero';
import FeaturedPosts from '../components/featured-posts';

import { getFeaturedPosts, getAllPosts } from '../utils/';

export default function Home({ posts }: any) {
  return (
    <Fragment>
      <Head>
        <title>Ivan Blogs</title>
        <meta name="description" content="I post about javascript" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
