import Image from 'next/image';
import logo from '@/assets/images/logo-footer.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-200 py-4 mt-24'>
  <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
    <div className='mb-4 md:mb-0 flex items-center'>
      <Link href='https://www.aqaarplusae.com'>
        <a>
          <Image src={logo} alt='Logo' className='h-8 w-auto' height={40} quality={90} />
        </a>
      </Link>
    </div>

    <div className='text-center md:text-left'>
      <p className='text-sm text-gray-500'>
        &copy; {currentYear} Aqaar Pulse Real Estate Brokerage Co. LLC.
        <br />
        All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
};
export default Footer;
