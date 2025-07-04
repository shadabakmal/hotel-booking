import React, { useEffect, useState } from "react";
import {assets} from '../assets/assets'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useClerk, useUser, UserButton} from "@clerk/clerk-react";

const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)
const Navbar = () => {
    const {openSignIn} = useClerk()
    const {user} = useUser()
    const navigate = useNavigate()
    const location = useLocation()
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/' },
        { name: 'About', path: '/' },
    ];

   // const ref = React.useRef(null)

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if(location.pathname !=='/'){
            setIsScrolled(true);
        }else{
            setIsScrolled(false);
        }
        setIsScrolled(prev=>location.pathname!=='/' ? true: prev);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
      //  <div ref={ref} className="h-88 md:h-64 overflow-y-scroll">
           // <p className="w-10 h-[500px]"></p>
            <nav className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button onClick={()=> navigate('/owner')}  className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        Dashboard
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <img  src={assets.searchIcon} alt='Search' className={` h-7 transition-all duration-500 ${isScrolled ? "invert" : ""}`}   fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"/>
                    {user ? (
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Booking" labelIcon={BookIcon} onClick={()=>navigate('/my-booking')} />
                            </UserButton.MenuItems>
                        </UserButton>
                    ):
                    (<button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                        Login
                    </button>)}
                    
                </div>

                {/* Mobile Menu Button */}
                
                <div className="flex items-center gap-3 md:hidden">
                    {user &&   <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Booking" labelIcon={BookIcon} onClick={()=>navigate('/my-booking')} />
                            </UserButton.MenuItems>
                        </UserButton>}
                   <img onClick={()=>setIsMenuOpen(!isMenuOpen)}src={assets.menuIcon} alt="" className={` h-4 ${isScrolled && 'invert'}`} />
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <img src={assets.closeIcon} alt="close-menu" className="h-6.5" />
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                  { user && <button  onClick={()=> navigate('/owner')}  className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        Dashboard
                    </button>}

                   {!user && <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>}
                </div>
            </nav>
       // </div>
    );
}

export default Navbar;
