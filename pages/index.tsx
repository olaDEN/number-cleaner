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
      </main>
    </div>
  );
};

export default Home;
