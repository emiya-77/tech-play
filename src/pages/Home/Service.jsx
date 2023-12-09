import EventCard from "../../components/EventCard/EventCard";
import PropTypes from 'prop-types';


const Service = ({ eventCards }) => {

    return (
        <>
            <div className="absolute -top-8 lg:-top-[3%] px-10 py-4 lg:py-14 lg:w-[1200px] mx-auto bg-gray-800 rounded-br-full rounded-tl-full backdrop-filter backdrop-blur-sm bg-opacity-80" data-aos="flip-up" data-aos-duration="1000">
                <h2 className="text-2xl lg:text-5xl font-light tracking-wider text-white text-center">Join Our Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-20 md:gap-x-16 py-16 lg:py-48 px-3 md:px-5 lg:px-40">
                {
                    eventCards?.map((eventCard) => <EventCard key={eventCard.id} eventCard={eventCard}></EventCard>)
                }
            </div>
        </>
    );
};

Service.propTypes = {
    eventCards: PropTypes.array
}

export default Service;