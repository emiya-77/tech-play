import { useContext } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { DataContext } from '../../data/DataProvider/DataProvider';

const BlogSection = () => {

    const { blogList } = useContext(DataContext);

    return (
        <section className="w-full bg-red-700 text-white bg-opacity-60 backdrop-filter backdrop-blur-sm py-12 mb-40">
            <div className="container mx-auto">
                <h2 className="text-5xl font-normal text-center mb-6">Latest Blog Posts</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {
                        blogList?.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogSection;