import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: 'AqaarPulse | Find The Perfect Rental and Sales Properties',
  description: 'Find your dream rental property with AqaarPulse. Explore a wide range of rental and sales properties tailored to your needs.',
  keywords: 'real estate, rental properties, sales properties, find rentals, property listings',
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang='en'>
          <Head>
            <title>{metadata.title}</title>
            <meta name='description' content={metadata.description} />
            <meta name='keywords' content={metadata.keywords} />
            <link rel='icon' href='/assets/images/Favicon-aqaar-20.svg' />
            {/* You can add more meta tags here if needed */}
          </Head>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;