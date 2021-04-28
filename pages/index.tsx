import Head from 'next/head';
import { FC } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Head>
        <title>Pierre Lavalley</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto py-6">
        <div className="max-w-screen-lg mx-auto">
          <h1>
            Bienvenue !
          </h1>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home;
