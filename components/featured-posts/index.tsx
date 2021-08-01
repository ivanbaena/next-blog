import PostsGrid from '../posts/posts-grid';

const FeaturedPosts = ({ posts }: any) => {
  return (
    <section className="bg-gray-400 pb-4 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center py-4">Featured Posts</h2>
        <PostsGrid posts={posts} />
      </div>
    </section>
  );
};

export default FeaturedPosts;
