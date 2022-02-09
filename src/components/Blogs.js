import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getBlogs } from "../api/actions";
import BlogCard from "./BlogCard";

const topLevelDivStyling = "grid grid-flow-row grid-cols-1 w-full max-w-screen sm:grid-cols-3 gap-10 p-10 overflow-x-hidden"

function Blogs(props){
    const getBlogs = props.getBlogs

    useEffect(() => {
        getBlogs()
    },[props.changes, getBlogs])

    if(props.isLoading){
        return <h2 data-testid="blogs">Loading</h2>
    }
    return(<div className={topLevelDivStyling} data-testid="blogs">
        {props.blogs.map((data)=>{
            return (
                <BlogCard key={data.id} blogData={data}/>
            )
        })}
    </div>)

}

const mapStateToProps = (state) => {
    return {
        blogs : state.blogs,
        isLoading : state.isLoading,
        error : state.error,
        changes: state.changes
    }
}
const mapDispatchToProps = { getBlogs }

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)