
import { useLoaderData } from "react-router-dom";
import SnowParticle from "../../components/Particle/SnowParticle";
import Slider from "../../components/Slider/Slider";
import Service from "./Service";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import BlogSection from "../../components/BlogSection/BlogSection";

const Home = () => {

    const eventCards = useLoaderData();

    return (
        <div className="">
            <div className="h-96 overflow-hidden md:h-screen">
                <SnowParticle></SnowParticle>
                <Slider></Slider>
            </div>
            <div className="bg-fixed bg-cover bg-center relative flex flex-col items-center" style={{
                backgroundImage: `url('/home/service/bg-1.jpg')`
            }}>
                <Service eventCards={eventCards}></Service>
                <NewsLetter></NewsLetter>
                <BlogSection></BlogSection>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;