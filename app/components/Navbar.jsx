import Link from 'next/link';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className='navbar fixed top-0 bg-black/30 text-white'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-gray-800 !text-white rounded-box z-[1] mt-3 w-52 p-4 shadow space-y-4'
          >
            <li className='!focus:text-red-500 !active:text-red-500'>
              <button className="btn">
                <Link href='#services'>Services</Link>
              </button>
            </li>
            <li>
              <Link href='#about'>About Us</Link>
            </li>
            <li>
              <Link href='#contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <label className='swap swap-rotate'>
          <input type='checkbox' onClick={toggleTheme} />
          <MdOutlineDarkMode className='swap-on h-8 w-8' />
          <MdOutlineLightMode className='swap-off h-8 w-8' />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
