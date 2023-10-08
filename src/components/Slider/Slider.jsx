

const Slider = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative z-1 w-full h-screen">
                    <img src="/slider/1.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2" style={{
                        zIndex: 6,
                    }}>
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-screen">
                    <img src="/slider/2.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2" style={{
                        zIndex: 6,
                    }}>
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-screen">
                    <img src="/login_bg-3.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2" style={{
                        zIndex: 6,
                    }}>
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-screen">
                    <img src="/slider/4.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2" style={{
                        zIndex: 6,
                    }}>
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;