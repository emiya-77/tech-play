import Footer from '../Home/Footer';

const AboutUs = () => {
    return (
        <>
            <div className="bg-gray-900 text-white min-h-screen">
                <div className="h-96 relative overflow-hidden">
                    <img
                        src="/home/service/bg-1.jpg"
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-center">
                        <h1 className="text-5xl lg:text-7xl tracking-widest font-medium">About Us</h1>
                    </div>
                </div>

                <div className="w-[360px] lg:container mx-auto px-8 py-10 bg-gray-800 my-20">
                    <p className="text-lg tracking-wide font-light">
                        TechPlay is your gateway to the captivating worlds of technology and gaming.
                        Founded with a shared passion for innovation and gaming, we aim to provide
                        enthusiasts like you with the ultimate experience.
                        TechPlay is your gateway to the captivating worlds of technology and gaming.
                        Founded with a shared passion for innovation and gaming, we aim to provide
                        enthusiasts like you with the ultimate experience.
                    </p>
                    <p className="text-lg tracking-wide font-light mt-4">
                        We believe in pushing the boundaries of technology and gaming, bringing
                        you the latest trends, innovations, and thrilling events. Join us in exploring
                        the limitless possibilities of the tech and gaming universe.
                    </p>
                </div>


                <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center ">
                    <div className="md:w-1/2">
                        <img
                            src="https://i.ibb.co/R7jW91b/2.jpg"
                            alt="Website"
                            className="w-full h-auto rounded-lg transform rotate-2 shadow-2xl hover:rotate-0 hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <h2 className="text-5xl font-normal mb-6">Discover Tech & Gaming</h2>
                        <p className="text-lg font-light mb-6">
                            At TechPlay, we immerse you in the captivating worlds of technology and gaming.
                            Explore cutting-edge innovations and unleash your gaming prowess with us.
                        </p>
                    </div>
                </div>

                <div className="bg-red-800 text-white">
                    <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 order-2 md:order-1 md:pl-8">
                            <h2 className="text-5xl font-normal mb-6">Exciting Services & Events</h2>
                            <p className="text-lg mb-6">
                                Our passionate team hosts a wide array of events, from epic gaming tournaments to
                                informative tech expos. Dive into the world of coding with our workshops and hackathons.
                                We have something for everyone!
                            </p>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <img
                                src="https://i.ibb.co/3z1vVgQ/1.jpg"
                                alt="Events"
                                className="w-full h-auto rounded-lg transform -rotate-2 shadow-2xl hover:rotate-0 hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;
