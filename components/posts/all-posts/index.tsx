import PostsGrid from '../posts-grid';

const AllPosts = ({ posts }: any) => {
  return (
    <section className="bg-gray-400 min-h-screen pb-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center py-4">All Posts</h1>
        <PostsGrid posts={posts} />
      </div>
    </section>
  );
};

export default AllPosts;
