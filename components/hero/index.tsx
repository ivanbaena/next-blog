import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full bg-gray-600">
      <div className="container mx-auto flex flex-col justify center items-center">
        <div className="w-full flex justify-center my-4">
          <Image
            className="rounded-full"
            src="/images/site/pepe.jpeg"
            alt="image-text"
            width={225}
            height={225}
          ></Image>
        </div>
        <h1 className="text-6xl text-white font-semibold">Hi, Im Ivan</h1>
        <p className="text-white text-xl mt-4 pb-6">
          I like coding in javascriot
        </p>
      </div>
    </section>
  );
};

export default Hero;
