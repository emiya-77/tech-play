import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink className={({ isActive }) => {
            return (
                isActive
                    ? 'nav-list bg-white bg-opacity-20'
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => {
            return (
                isActive
                    ? 'nav-list bg-white bg-opacity-20'
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/login'>Login</NavLink></li>
        <li><NavLink className={({ isActive }) => {
            return (
                isActive
                    ? `nav-list bg-white bg-opacity-20`
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/register'>Register</NavLink></li>
    </>

    return (
        <div className="absolute w-full z-10">
            <nav className="sticky top-0 list-none w-full h-20 mx-auto px-28 bg-gray-900 bg-opacity-30 flex justify-center items-center backdrop-filter backdrop-blur-sm rounded-br-full rounded-tl-full shadow-whiteDrop">
                {navLinks}
            </nav>
        </div >
    );
};

export default Navbar;