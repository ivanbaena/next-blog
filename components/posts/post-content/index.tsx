import PostHeader from './post-header';

const DUMMY_POST = {
  title: 'Getting Started with NextJS',
  image: 'getting-started-with-nextjs.jpeg',
  slug: 'getting-started-with-nextjs',
  content: '# This is a first post',
  date: '2022-02-10',
};

const PostDetail = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className="bg-gray-400 pt-6 pb-4 min-h-screen">
      <div className="container mx-auto border rounded p-4 w-9/12 mx-auto bg-gray-100">
        <PostHeader title={DUMMY_POST.title} image={imagePath} />
        <div>{DUMMY_POST.content}</div>
      </div>
    </article>
  );
};

export default PostDetail;
