

const NewsLetter = () => {
    return (
        <section className="w-full divide-x-2 bg-black bg-opacity-80 backdrop-blur-md py-16 mb-40 flex">
            <div className="w-1/3 flex justify-center items-center">
                <div className="w-[320px] h-40 rounded-t-full overflow-hidden">
                    <div className="w-[320px] h-40 rounded-b-full flex justify-center items-center overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://i.ibb.co/9NhxmGX/news-Letter.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-2/3 container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Stay updated with the latest tech and gaming events, news, and
                        updates from TechPlay.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-60 bg-transparent border-b border-gray-500 text-white placeholder-gray-300 py-2 focus:outline-none focus:border-red-500"
                        />
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-br-full rounded-tl-full transition duration-300 transform hover:scale-105">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
