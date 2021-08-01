import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    title: 'Getting STarted with NextJS',
    image: 'getting-started-with-nextjs.jpeg',
    slug: 'getting-started-with-nextjs',
    excerpt:
      'NextJS is a react framework for production - it makes building fullstack React apps easier',
    date: '2022-02-10',
  },
  {
    title: 'Getting STarted with NextJS-2',
    image: 'getting-started-with-nextjs.jpeg',
    slug: 'getting-started-with-nextjs-2',
    excerpt:
      'NextJS is a react framework for production - it makes building fullstack React apps easier',
    date: '2022-02-10',
  },
  {
    title: 'Getting STarted with NextJS-3',
    image: 'getting-started-with-nextjs.jpeg',
    slug: 'getting-started-with-nextjs-3',
    excerpt:
      'NextJS is a react framework for production - it makes building fullstack React apps easier',
    date: '2022-02-10',
  },
  {
    title: 'Getting STarted with NextJS-4',
    image: 'getting-started-with-nextjs.jpeg',
    slug: 'getting-started-with-nextjs-4',
    excerpt:
      'NextJS is a react framework for production - it makes building fullstack React apps easier',
    date: '2022-02-10',
  },
];
export default function AllPostsPage({}) {
  return (
    <div>
      <AllPosts posts={DUMMY_POSTS} />
    </div>
  );
}
