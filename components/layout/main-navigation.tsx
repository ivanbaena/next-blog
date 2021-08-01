import Link from 'next/link';
import Logo from './logo';

const MainNavigation = () => {
  return (
    <header className="bg-gray-600 text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
