import PropTypes from 'prop-types';
import {BsBookmark} from 'react-icons/bs';

const Blog = ({ blog, handleBookmark }) => {
    const { title, cover_image, author_photo, reading_time, author_name, month_date, hashtag} = blog
    return (
        <>
            <div className='mb-20 '>
                <img src={cover_image} alt={`Cover photo of the title ${title}`} />
                <div className='flex justify-between items-center my-5'>
                    <div className='flex gap-3 items-center'>
                        <img src={author_photo} alt="not found author photo" />
                        <div>
                            <h3>{author_name}</h3>
                            <span>{ month_date }</span>
                        </div>
                    </div>
                    <div>
                        <span>{reading_time} read</span>
                        <button
                            onClick={() => handleBookmark(blog)}
                            className='ml-2 text-xl'>
                            <BsBookmark /></button>
                    </div>
                </div>
                <h2 className='font-semibold text-2xl mb-3'>{title}</h2>
                {
                    hashtag.map((hash, idx) => <span key={idx} className='mr-3'><a href="">{ hash }</a></span>)
                }
            </div>
        </>
    );
};

Blog.propTypes= {
    blog: PropTypes.object.isRequired,
    handleBookmark:PropTypes.func
}
export default Blog;