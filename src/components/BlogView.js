import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getBlogs } from "../api/actions";

function getBlogById(id, blogs){
    return blogs.find(blog => blog.blogId === id)
}

function displayContent(content){
    return content.map(
        (content) => {
            if(content.type === "p")
                return <p className="break-words">{content.value}</p>
            return <div></div>
         }
    )
}

function BlogView(props){
    const id = useParams().id
    var blog = getBlogById(parseInt(id), props.blogs)

    const divLevelStyling = "flex flex-col p-10 text-one-dark-white gap-y-3 font-ubuntu w-screen sm:w-full"
    const contentDivStyling = "flex flex-col gap-y-3 p-1"
    const h1Styling = "text-2xl font-bold text-rocket-blue-600"
    const h3Styling = "text-sm italic text-one-dark-lightYellow"
    
    useEffect(() =>{
        if(blog === undefined){
            getBlogs()
        }
    })
    
    if(blog === undefined){
        blog = getBlogById(parseInt(id), props.blogs)
        return <h2 className="text-one-dark-white">LOADING</h2>
    }
    return (
        <div className={divLevelStyling}>
            <h1 className={h1Styling}>{blog.title}</h1>
            <h3 className={h3Styling}>{blog.publishDate}</h3>
            <div className={contentDivStyling}>
                {displayContent(blog.content)}
            </div>
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