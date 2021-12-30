import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from "./BlogCard";

const topLevelDivStyling = "grid grid-flow-row grid-cols-1 w-full max-w-screen sm:grid-cols-3 gap-10 p-10 overflow-x-hidden"

function getBlogs(setBlogs){
    axios.get('https://marine-compound-336602.uc.r.appspot.com/api/blogs')
        .then(response => {
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