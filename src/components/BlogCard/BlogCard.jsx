import PropTypes from 'prop-types';

const BlogCard = ({ blog }) => {

    const { id, title, imageSrc, date, description } = blog || {};

    return (
        <div className="bg-gray-800 bg-opacity-80 shadow-xl overflow-hidden w-80 rounded-br-3xl rounded-tl-3xl md:w-96 m-4" data-aos={id % 3 == 1 ? 'fade-right' : id % 3 == 0 ? 'fade-left' : ''} >
            <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-gray-400 text-sm mb-2">{date}</p>
                <p className="text-gray-300 text-sm">{description}</p>
                <a href="#" className="text-dim-red-400 hover:text-dim-red-300 text-sm mt-2 inline-block">
                    Read more
                </a>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogCard;