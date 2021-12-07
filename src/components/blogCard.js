import React from "react";

export default function BlogCard(props){
    const { key, blogData } = props;

    return (
        <div key={key} className="bg-one-dark-gutterGrey rounded-br-2xl rounded-tl-2xl flex flex-col p-3 h-56 overflow-hidden shadow-lg hover:bg-one-dark-darkRed transform hover:scale-105 font-ubuntu">
            <h2 className="text-xl font-semibold text-one-dark-cyan">{blogData.title}</h2>
            <h3 className="text-one-dark-white font-medium">{blogData.publishDate}</h3>
            <p className="text-one-dark-white">{blogData.content}</p>
        </div>
    )
}