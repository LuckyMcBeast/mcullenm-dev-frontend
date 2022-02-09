import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from "./BlogCard";

const topLevelDivStyling = "grid grid-flow-row grid-cols-1 w-full max-w-screen sm:grid-cols-3 gap-10 p-10 overflow-x-hidden"

//TODO: Setup Redux for global state
function getBlogs(setBlogs){
    axios.get(`${process.env.REACT_APP_CONTENT_MANAGER_URL}${process.env.REACT_APP_BLOG_ENDPOINT}`)
        .then(response => {
            console.log(response)
            setBlogs(response.data);
        })
        .catch(err => {
            console.log(err);
        });
}

export default function Blogs(){
    const [blogs, setBlogs] = useState(null);
    
    useEffect(() => {
        getBlogs(setBlogs)
    },[])

    if(blogs === null){
        return <h2 data-testid="blogs">Loading</h2>
    }
    return(<div className={topLevelDivStyling} data-testid="blogs">
        {blogs.map((data)=>{
            return (
                <BlogCard key={data.id} blogData={data}/>
            )
        })}
    </div>)

}