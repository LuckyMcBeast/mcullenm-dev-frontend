import React from "react";

const textOneDarkDarkYellow = "text-one-dark-darkYellow";
const textOneDarkLightYellow = "text-one-dark-lightYellow";
const textOneDarkGreen = "text-one-dark-green";
const textOneDarkMagenta = "text-one-dark-magenta";
const textOneDarkBlue = "text-one-dark-blue";
const h1Styling = "m-3 text-one-dark-white self-center text-right font-medium sm:font-black antialiased text-small xs:text-base sm:text-md md:text-xl"

function spanValueWithClassName(text, className){
    return <span className={className}>{text}</span>;
}

function spanValue(text){
    return <span>{text}</span>;
}

function makeParameterOfFunWithListType(parameterName, listType){
    const openA = spanValue("<");
    const closeA = spanValue(">");

    const parameterNameWithStyle = spanValueWithClassName(parameterName, textOneDarkLightYellow);
    const listTypeWithStyle = spanValueWithClassName(listType, textOneDarkDarkYellow);
    const kotlinList = spanValueWithClassName(" List", textOneDarkDarkYellow);

    return <span>
        {parameterNameWithStyle}: {kotlinList}{openA}{listTypeWithStyle}{closeA}
    </span>
}

function returnHeaderText() {
    const fun = spanValueWithClassName("fun", textOneDarkMagenta);
    const mCullenMcclellan = spanValueWithClassName("mCullenMcClellan", textOneDarkBlue);

    const thoughtsParmeter = makeParameterOfFunWithListType("thoughts", "Thought")
    const workParameter = makeParameterOfFunWithListType("work", "Work")

    const questionMark = spanValueWithClassName("?", textOneDarkGreen);

    return <span>
        {fun} {mCullenMcclellan}({thoughtsParmeter}{questionMark}, {workParameter})
    </span>
}

export default function HeaderTextAsCode() {
    return(
        <h1 className={h1Styling} data-testid="headerTextAsCode">
            {returnHeaderText()}
        </h1>
    )
}