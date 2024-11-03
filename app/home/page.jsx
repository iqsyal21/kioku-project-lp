import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const HomePage = () => {
  return (
    <div>
      <section>
        <div className='hero home-hero'>
          <div className='text-white text-center h-1/2'>
            <div className='max-w-3xl'>
              <h1 className='mb-5 text-5xl font-bold'>
                Make your interior more minimalistic & modern
              </h1>
              <p className='mb-5'>
                Turn your room with panto into a lot more minimalist and modern
                with ease and speed
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='h-56 grid grid-cols-1 lg:grid-cols-4 gap-x-6 mt-8 p-4 lg:p-0 lg:pr-16'>
          <h2 className='text-3xl font-bold place-self-center text-center'>
            Why Choosing Us
          </h2>
          <div className='pt-12 space-y-4'>
            <h3 className='text-xl font-medium'>Luxury facilities</h3>
            <p>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <Link
              href='#one'
              className='inline-flex items-center gap-2 text-[#E58411]'
            >
              More Info <IoIosArrowRoundForward className='text-xl' />
            </Link>
          </div>
          <div className='pt-12 space-y-4'>
            <h3 className='text-xl font-medium'>Affordable Price</h3>
            <p>
              You can get a workspace of the highst quality at an affordable
              price and still enjoy the facilities that are oly here.
            </p>
            <Link
              href='#one'
              className='inline-flex items-center gap-2 text-[#E58411]'
            >
              More Info <IoIosArrowRoundForward className='text-xl' />
            </Link>
          </div>
          <div className='pt-12 space-y-4'>
            <h3 className='text-xl font-medium'>Many Choices</h3>
            <p>
              We provide many unique work space choices so that you can choose
              the workspace to your liking.
            </p>
            <Link
              href='#one'
              className='inline-flex items-center gap-2 text-[#E58411]'
            >
              More Info <IoIosArrowRoundForward className='text-xl' />
            </Link>
          </div>
        </div>
      </section>
      <div className='h-96'></div>
    </div>
  );
};

export default HomePage;
