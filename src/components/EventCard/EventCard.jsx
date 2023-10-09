import Tilt from 'react-parallax-tilt';
import './EventCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventCard = ({ eventCard }) => {
    const { id, name, image, price, short_description, button } = eventCard || {};

    return (
        <Tilt>
            <div className="dark-shadow-card" data-aos={id % 3 == 1 ? 'fade-right' : id % 3 == 0 ? 'fade-left' : 'fade-up'}>
                <div className='w-full h-[300px] overflow-hidden mb-6'>
                    <img className="w-full h-full object-cover" src={image} alt={name} />
                </div>
                <div className="dark-shadow-card-content">
                    <h2 className="dark-shadow-card-title line-clamp-1">{name}</h2>
                    <p className="dark-shadow-card-description line-clamp-1">{short_description}</p>
                    <p className="dark-shadow-card-price">${price}</p>

                    <Link to={`/events/${id}`}>
                        <button className="dark-shadow-card-button">{button}</button>
                    </Link>

                </div>
            </div>
        </Tilt>
    );
};

EventCard.propTypes = {
    eventCard: PropTypes.object.isRequired
}

export default EventCard;