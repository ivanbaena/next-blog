import { Fragment } from 'react';

import Hero from '../components/hero';
import FeaturedPosts from '../components/featured-posts';

import { getFeaturedPosts, getAllPosts } from '../lib/';

export default function Home({ posts }: any) {
  return (
    <Fragment>
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
