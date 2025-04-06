import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleBookMark }) => {
    const { cover, title, author_img, author, hashtags } = blog
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={cover}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-around items-center'>
                    <img className='w-16' src={author_img} alt="" />
                    <h2 className="card-title">{author}</h2>
                    <button onClick={() => handleBookMark(blog)}>
                        <FaBookmark size={25} />
                    </button>

                </div>
                <p>{title}</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="flex">
                    {
                        hashtags.map(hashtag => <p key={hashtag}>{hashtag}</p>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;