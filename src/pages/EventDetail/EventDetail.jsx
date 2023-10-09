import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Footer from "../Home/Footer";


const EventDetail = () => {

    const [event, setEvent] = useState({});

    const { id } = useParams();
    // const { eventsList } = useContext(DataContext);
    const eventsList = useLoaderData();

    useEffect(() => {
        const selectedEvent = eventsList?.find(event => event.id == id);
        setEvent(selectedEvent);
    }, [id, eventsList])



    return (
        <div>
            <div className="flex flex-col justify-center items-center pt-36 bg-cover bg-fixed bg-center" style={{
                backgroundImage: `url('/home/service/bg-1.jpg')`
            }}>
                <div className="flex-0">
                    <ReactPlayer controls='true' width='887px' height='500px' url='https://www.youtube.com/watch?v=E87QeRn0x9s&ab_channel=%EC%98%81%EA%B5%AD%EB%82%A8%EC%9E%90KoreanEnglishman'></ReactPlayer>
                    <div className="my-10 p-6 max-w-full line-clamp-1 bg-blue-300 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-full">
                        <h2 className="text-center text-4xl text-white font-light tracking-wider">{event.name}</h2>
                    </div>
                </div>

                <div className="w-full h-screen flex py-16 md:gap-20 xl:gap-32">
                    <div className="w-full xl:h-[600px] md:h-[450px] bg-slate-300 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-r-full flex items-center justify-end pr-14">
                        <div className="xl:w-[500px] xl:h-[500px] md:w-[350px] md:h-[350px] flex items-center justify-center rounded-full overflow-hidden">
                            <img className="w-full h-full object-cover" src={event.image} alt="" />
                        </div>

                    </div>
                    <div className="w-full xl:h-[600px] md:h-[450px] bg-slate-600 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-l-full p-10">
                        <p className="xl:text-xl md:text-lg tracking-wider font-light text-white xl:px-40 md:px-20 py-10">
                            {
                                event.short_description
                            }
                        </p>
                    </div>
                </div>
                <div className="w-full xl:mt-20 md:mt-0">
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default EventDetail;