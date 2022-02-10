import React, { useEffect } from "react";
import Blogs from "./Blogs";
import TopBar from "./TopBar";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { connect } from "react-redux";
import { getBlogs } from "../api/actions";

const topLevelDivStyling = "max-w-screen sm:w-full flex flex-col"

function MainContent(props) {
    const getBlogs = props.getBlogs

    useEffect(() => {
        getBlogs()
    },[props.changes, getBlogs])
    
    
    
    return (
        <div className={topLevelDivStyling} data-testid="mainContent">
            <TopBar/>
            <Router>
            {props.blogs.map(blog => (<Link to={`blog/${blog.id}`}/>))}
                <Routes>
                    <Route path="/" element={<Blogs/>}/>
                    <Route path="/blog/:id" element={<h1>THIS IS A TEST</h1>}/>
                </Routes>
            </Router>
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
const mapDispatchToProps = { getBlogs }
export default connect(mapStateToProps, mapDispatchToProps)(MainContent)