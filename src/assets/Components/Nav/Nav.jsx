import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
const Nav = () => {
const[open, setOpen] = useState(false)

// Navigation routes data
const routes = [
    { id: 'home', name: 'Home', path: '/' },
    { id: 'about', name: 'About', path: '/about' },
    { id: 'services', name: 'Services', path: '/services' },
    { id: 'contact', name: 'Contact', path: '/contact' },
    { id: 'blog', name: 'Blog', path: '/blog' },
  ];
  
  
  return (
        <nav className='px-12 shadow-xl h-[50px] flex items-center md:justify-center'>
            <div onClick={()=>setOpen(!open)} className="menu-icon md:hidden">
                {
                    open==true 
                    ? <RxCross2 className='text-4xl text-red-600 font-extrabold rounded-full p-1 border-2 border-red-600 shadow-xl'></RxCross2> 
                    : <HiOutlineMenuAlt1 className='text-2xl'></HiOutlineMenuAlt1>
                }
            </div>
            <ul className={`md:flex md:justify-center md:items-center absolute md:static duration-500 ${open ? 'top-[55px] border-2 border-gray-300 bg-white rounded-lg shadow-xl p-2':'top-[-200px]'}`} >
            {
                routes.map(route=> <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

Nav.propTypes = {
    routes:PropTypes.object,
    
};

export default Nav;