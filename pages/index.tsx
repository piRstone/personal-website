import Head from 'next/head';
import { FC } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Head>
        <title>piRstone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Header />

      <main className="container mx-auto py-6">
        <div className="max-w-screen-lg mx-auto">
          <h1>
            Welcome to piRstone.com!
          </h1>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home;
