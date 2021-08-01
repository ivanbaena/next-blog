import Link from 'next/link';
import Image from 'next/image';

const PostItem = ({ post }: any) => {
  const { title, image, excerpt, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className="w-full rounded bg-gray-700 text-white">
      <Link href={linkPath}>
        <a className="block">
          <div className="w-full">
            <Image
              src={imagePath}
              alt={title}
              width={340}
              height={200}
              layout={'responsive'}
            />
          </div>
          <div className="flex justify-center flex-col items-center mt-5 px-8 pb-4">
            <h3 className="text-3xl mb-1">{title}</h3>
            <time className="italic text-sm text-gray-300">
              {formattedDate}
            </time>
            <p className="mt-4 text-center">{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
