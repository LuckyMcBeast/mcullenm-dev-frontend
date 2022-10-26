const textOneDarkLightYellow = "text-one-dark-lightYellow";
const textOneDarkGreen = "text-one-dark-green";
const textOneDarkCyan = "text-one-dark-cyan";
const textOneDarkBlue = "text-one-dark-blue text-xl font-black sm:text-2xl";
const h1Styling =
    "m-3 text-one-dark-white self-center text-right font-medium antialiased sm:font-black";

function spanValueWithClassName(text: string, className: string): JSX.Element {
    return <span className={className}>{text}</span>;
}

function spanValue(text: string): JSX.Element {
    return <span>{text}</span>;
}

function makeParameterOfFunWithListType(parameterName: string, listType: string): JSX.Element {
    const openA = spanValue("<");
    const closeA = spanValue(">");

    const parameterNameWithStyle = spanValueWithClassName(parameterName,textOneDarkLightYellow);
    const listTypeWithStyle = spanValueWithClassName(listType, textOneDarkCyan);
    const kotlinList = spanValueWithClassName(" List", textOneDarkCyan);

    return (
        <span>
            {parameterNameWithStyle}: {kotlinList}
            {openA}
            {listTypeWithStyle}
            {closeA}
        </span>
    );
}

function returnHeaderText(): JSX.Element {
    const fun = spanValueWithClassName("fun", textOneDarkCyan);
    const mCullenMcclellan = spanValueWithClassName("mCullenMcClellan", textOneDarkBlue);
    const thoughtsParameter = makeParameterOfFunWithListType("thoughts","Thought");
    const workParameter = makeParameterOfFunWithListType("work", "Work");
    const questionMark = spanValueWithClassName("?", textOneDarkGreen);

    return (
        <span>
            {fun} {mCullenMcclellan}({thoughtsParameter}
            {questionMark}, {workParameter})
        </span>
    );
}

export default function HeaderTextAsCode(): JSX.Element {
    return (
        <h1 className={h1Styling} data-testid="headerTextAsCode">
            {returnHeaderText()}
        </h1>
    );
}
