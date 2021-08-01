import PostItem from '../post-item';

const PostsGrid = ({ posts }: any) => {
  return (
    <ul className="w-full mx-auto grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
