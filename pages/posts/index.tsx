import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib';

export default function AllPostsPage({ posts }: any) {
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
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
