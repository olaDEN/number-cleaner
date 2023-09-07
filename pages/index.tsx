import Head from 'next/head';
import PhoneNumberCleaner from '../components/NumberCleaner';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Phone Number Cleaner</title>
        <meta name="description" content="Clean and detect country code of phone numbers." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Phone Number Cleaner</h1>
        <PhoneNumberCleaner />
        <h3 className="absolute bottom-0 left-0 right-0 text-center py-2 bg-gray-200">
            All rights reserved © olaDen 2023
            </h3>
      </main>
    </div>
  );
};

export default Home;
