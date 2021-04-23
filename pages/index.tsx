import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

const Home: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-white dark:bg-gray-900 h-screen text-white dark:text-gray-300">
      <Head>
        <title>piRstone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <header className="py-4">
        <div className="max-w-screen-lg mx-auto">
          <Link href="/">
            <span className="uppercase font-black tracking-wider text-black text-lg dark:text-gray-300">pirstone</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <div className="max-w-screen-lg mx-auto">
          <h1>
            Welcome to piRstone Blog!
          </h1>
        </div>
      </main>

      <footer className="absolute bottom-0 w-full py-4">
        <div className="max-w-screen-lg mx-auto">
          <span className="text-sm text-gray-500">©piRstone {currentYear}</span>
        </div>
      </footer>
    </div>
  )
}

export default Home;
