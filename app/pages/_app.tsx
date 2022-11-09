import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/common/Layout/Layout'
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Web3Provider } from '../store/web3Store';


interface CustomAppProps extends AppProps {
  Component: AppProps['Component'] & { title?: string };
}


export default function App({ Component, pageProps }: CustomAppProps) {
  const title = Component.title || 'Default title';
  return (
    
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Web3Provider>
        <Component {...pageProps} />
        </Web3Provider>
        <Toaster />
      </Layout >
  );
}