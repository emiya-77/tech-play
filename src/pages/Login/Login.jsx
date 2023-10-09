import { useContext, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Particle from '../../components/Particle/Particle';
import { AuthContext } from '../../auth/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setRegisterError('');
        setSuccess('');

        signInUser(email, password)
            .then(result => {
                setSuccess('Logged in Successfully.');
                e.target.reset();
                navigate('/');
                toast.success('Logged In Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(error => {
                setRegisterError(error.message);
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                console.log(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success('Logged In Successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(error => {
                setRegisterError(error.message);
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                console.log(error);
            })
    }

    return (
        <>
            <Particle></Particle>
            <div className="w-full h-screen flex justify-center items-center" style={{ backgroundImage: `url(/login_bg-1.jpg)`, backgroundSize: 'cover' }} >
                <Tilt>
                    <div className="container min-h-96 w-72 mx-auto md:min-h-[400px] md:w-[400px] bg-black bg-opacity-70 rounded-lg shadow-5xl border border-white border-opacity-30 border-l-0 border-b-0 backdrop-blur-sm px-2 pb-5 md:p-5">
                        <form onSubmit={handleLogin} className="h-full flex flex-col justify-start items-center p-2 md:p-5">
                            <div className="text-4xl font-extralight tracking-widest text-white my-5 md:mb-10">Login</div>
                            <input className="input-text mb-3 md:mb-6" type="email" name="email" placeholder="E-mail" required />
                            <div className='relative inline-block w-full'>
                                <input className="input-text mb-7 md:mb-14" type={!showPassword ? "password" : "text"} name="password" placeholder="Password" required />
                                <span onClick={() => setShowPassword(!showPassword)} className='absolute text-green-900 font-semibold top-3 right-4 cursor-pointer'>
                                    {
                                        !showPassword ? <FaEyeSlash></FaEyeSlash>
                                            : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <input className="cursor-pointer px-6 py-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 transition duration-300 ease-in-out" type="submit" value="Login" />
                        </form>
                        <button onClick={handleGoogleSignIn} className='mx-auto bg-gray-800 border-2 border-gray-400 bg-opacity-40 w-[50px] h-[50px] rounded-full backdrop-filter backdrop-blur-3xl mb-3 md:mb-5 flex justify-center items-center'>
                            <FaGoogle className='text-3xl text-gray-300'></FaGoogle>
                        </button>
                        <p className='text-center text-sm ml-2 md:text-base text-white opacity-60 font-extralight tracking-wider'>Don&apos;t have an account? <Link to='/register' className="font-medium opacity-100 underline">Register</Link></p>
                    </div>
                </Tilt>
            </div >
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Login;