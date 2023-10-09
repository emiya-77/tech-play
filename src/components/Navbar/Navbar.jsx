import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const { displayName, photoURL } = user || {};
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out');
            })
            .catch(error => {
                console.log(error);
            })
    }

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
                    ? `nav-list bg-white bg-opacity-20`
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/about'>About Us</NavLink></li>
    </>

    const logLinks = <>
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
                    ? 'nav-list bg-white bg-opacity-20'
                    : 'nav-list bg-white bg-opacity-0'
            );
        }} to='/register'>Register</NavLink></li>
    </>

    const loginLinks = <>
        <div className="flex items-center justify-center gap-2">
            <div className="text-xl font-light tracking-widest text-white">
                {displayName ? displayName : ''}
            </div>
            <div className="w-20 h-[50px] rounded-b-full overflow-hidden">
                <div className="w-20 h-[50px] bg-white bg-opacity-40 backdrop-filter backdrop-blur-sm  rounded-t-full flex justify-center items-center">
                    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full overflow-hidden">
                        <img src={photoURL ? photoURL : ''} className="w-full h-full object-cover" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <li><Link to='/login'>
            <button onClick={handleLogOut} className="nav-list bg-white bg-opacity-0">Log Out</button>
        </Link></li>
    </>

    return (
        <div className="absolute w-full z-10">
            <nav className="sticky top-0 list-none w-full h-20 mx-auto px-28 bg-gray-900 bg-opacity-30 flex justify-between items-center backdrop-filter backdrop-blur-sm rounded-br-full rounded-tl-full shadow-whiteDrop">
                <div className="flex justify-center items-center gap-2">
                    <div className="w-20 h-10 bg-white rounded-br-full rounded-tl-full bg-opacity-30 backdrop-filter backdrop-blur-sm flex justify-center items-center">
                        <div className="w-9 h-9 bg-white rounded-full"></div>
                    </div>
                    <h2 className="text-3xl text-white tracking-widest">TechPlay</h2>
                </div>
                <div className="flex justify-center items-center">
                    {navLinks}
                </div>
                <div className="flex justify-center items-center">
                    {user ? loginLinks : logLinks}
                </div>

            </nav>
        </div >
    );
};

export default Navbar;