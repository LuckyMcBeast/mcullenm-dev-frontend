import React from "react";
import { connect } from "react-redux";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const topLevelDivStyling =
  "grid grid-flow-row grid-cols-1 w-full max-w-screen sm:grid-cols-3 gap-10 p-10 overflow-x-hidden";

function Blogs(props) {
  if (props.isLoading) {
    return <h2 data-testid="blogs">Loading</h2>;
  }
  return (
    <div className={topLevelDivStyling} data-testid="blogs">
      {props.blogs.map((data) => {
        return (
          <Link to={"/blog/" + data.blogId}>
            <BlogCard key={data.blogId} blogData={data} />
          </Link>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    isLoading: state.isLoading,
    error: state.error,
    changes: state.changes,
  };
};

export default connect(mapStateToProps)(Blogs);
