import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from "./blogCard";

export default function Blogs(){
    const [blogs, setBlogs] = useState(null);
    let error = "";

    const getBlogs = (() => {
        axios.get('https://mcullenm-dev-content-manager.herokuapp.com/api/blogs')
            .then(response => {
                console.log(response.data)
                setBlogs(response.data);
            })
            .catch(err => {
                console.log(err);
                error = err
            });
    })

    useEffect(() => {
        getBlogs()
    },[])

    if(blogs === null){
        return <h2>Loading</h2>
    }
    return(<div className="grid grid-flow-row grid-cols-1 w-full max-w-screen sm:grid-cols-3 gap-10 p-10 overflow-x-hidden">
        {blogs.map((data)=>{
            return (
                <BlogCard key={data.id} blogData={data}/>
            )
        })}
    </div>)

}