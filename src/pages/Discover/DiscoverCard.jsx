import PropTypes from 'prop-types';

const DiscoverCard = ({ discover }) => {

    const bgArray = [600, 700, 800, 900];
    const { id, title, date, image, description } = discover || {};


    return (
        <div>
            <div className={`h-[450px] p-6 lg:p-14 flex ${id % 2 == 0 ? 'flex-col lg:flex-row-reverse' : 'flex flex-col lg:flex-row'} gap-5 lg:gap-20 bg-gray-${bgArray[id]} bg-opacity-40`}>
                <div className="w-full h-[300px] lg:w-1/2 flex items-center justify-center overflow-hidden">
                    <img src={image} className="w-full h-full object-cover" alt="" />

                </div>
                <div className="w-full lg:w-1/2 text-white p-2 lg:p-10">
                    <h2 className="text-3xl mb-2">{title}</h2>
                    <p className='mb-2'>{date}</p>
                    <p className='mb-2'>{description}</p>
                    <button className="btn btn-outline border-2 border-white text-white">learn more...</button>
                </div>
            </div>
        </div >
    );
};

DiscoverCard.propTypes = {
    discover: PropTypes.object.isRequired
}

export default DiscoverCard;