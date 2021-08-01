import Image from 'next/image';

const PostHeader = ({ title, image }: any) => {
  return (
    <header className="w-full flex justify-between border-b-4 border-black pb-4 mb-4 items-center">
      <h1 className="text-6xl w-9/12 font-semibold">{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
