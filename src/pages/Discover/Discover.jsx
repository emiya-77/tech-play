import { useLoaderData } from "react-router-dom";
import DiscoverCard from "./DiscoverCard";
import Footer from "../Home/Footer";


const Discover = () => {

    const discoverList = useLoaderData();

    return (
        <>
            <div className="bg-cover" style={{
                backgroundImage: `url('/home/service/bg-1.jpg')`
            }}>
                <div className="h-[450px] bg-gray-500 bg-opacity-40 flex justify-center items-center">
                    <div className="p-6 lg:p-10 bg-slate-500 bg-opacity-40 rounded-full">
                        <h2 className="text-2xl lg:text-5xl font-normal text-white">Up Coming Games & Events</h2>
                    </div>
                </div>

                {
                    discoverList?.map(discover => <DiscoverCard key={discover.id} discover={discover}></DiscoverCard>)
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default Discover;