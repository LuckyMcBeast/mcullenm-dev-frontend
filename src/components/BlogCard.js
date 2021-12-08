import React from "react";

const topLevelDivStyling = "bg-one-dark-gutterGrey rounded-br-2xl rounded-tl-2xl flex flex-col p-3 h-56 overflow-hidden " +
    "shadow-lg hover:bg-one-dark-darkRed transform hover:scale-105 font-ubuntu"
const blogTitleStyling = "text-xl font-semibold text-one-dark-cyan"
const blogPublishDateStyling = "text-one-dark-white font-medium"
const blogContentStyling = "text-one-dark-white"

export default function BlogCard(props){
    const { key, blogData } = props;

    return (
        <div key={key} className={topLevelDivStyling}>
            <h2 className={blogTitleStyling}>{blogData.title}</h2>
            <h3 className={blogPublishDateStyling}>{blogData.publishDate}</h3>
            <p className={blogContentStyling}>{blogData.content}</p>
        </div>
    )
}