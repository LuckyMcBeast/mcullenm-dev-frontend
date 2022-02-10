import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getBlogs } from "../api/actions";

function getBlogById(id, blogs){
    return blogs.find(blog => blog.blogId === id)
}

function BlogView(props){
    const id = useParams().id
    var blog = getBlogById(parseInt(id), props.blogs)
    
    useEffect(() =>{
        if(blog === undefined){
            getBlogs()
        }
    })
    
    if(blog === undefined){
        blog = getBlogById(parseInt(id), props.blogs)
        return <h2>LOADING</h2>
    }
    return (
        <div>
            <h1>{blog.title}</h1>
            <h3>{blog.publishDate}</h3>
            {blog.content.map(
                (content) => { 
                    if(content.type === "p") 
                        return <div><p>{content.value}</p></div>
                    return <div></div>
                 }
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs : state.blogs,
        isLoading : state.isLoading,
        error : state.error,
        changes: state.changes
    }
}

export default connect(mapStateToProps)(BlogView)