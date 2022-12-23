import Head from 'next/head';
import { Inter } from '@next/font/google';
import Form from '../components/Form/Form';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatGPT</title>
        <meta name='description' content='ChatGPT' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Form />
      </main>
    </>
  );
}
