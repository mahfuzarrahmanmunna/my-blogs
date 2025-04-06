import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMark }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <h3>total : {blogs.length}</h3>
            <div className='space-y-5 lg:grid lg:grid-cols-2 px-7'>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id} handleBookMark={handleBookMark}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;