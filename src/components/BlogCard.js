import React from "react";

const topLevelDivStyling = "bg-one-dark-gutterGrey rounded-br-2xl rounded-tl-2xl flex flex-col p-3 h-56 overflow-hidden " +
    "shadow-lg hover:bg-rocket-blue-900 transform hover:scale-105 font-ubuntu"
const blogTitleStyling = "text-xl font-semibold text-one-dark-cyan"
const blogPublishDateStyling = "text-one-dark-lightYellow font-medium"
const blogContentStyling = "text-one-dark-white"

//TODO: Write test for parsing blogData

export default function BlogCard(props){
    const { key, blogData } = props;

    function contentPreview(){
        if(blogData.content[0] !== undefined)
            return <p className={blogContentStyling}>{blogData.content[0].value}</p>
    }

    return (
        <div key={key} className={topLevelDivStyling}>
            <h2 className={blogTitleStyling}>{blogData.title}</h2>
            <h3 className={blogPublishDateStyling}>{blogData.publishDate}</h3>
            {contentPreview()}
        </div>
    )
}