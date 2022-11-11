import logo from "public/personalLogo-small-blue.svg";
import Image from "next/image";
import Link from "next/link";

const topLevelDivStyling =
    "flex flex-col w-0 sm:w-24 max-w-max h-auto min-h-screen bg-one-dark-gutterGrey invisible sm:visible float-left";
const logoDivStyling = "flex rounded-full bg-rocket-blue-700 m-2 px-4 py-4 cursor-pointer hover:bg-rocket-blue-900 duration-500";
const imgStyling = "m-2 p-2";

export default function SideBar(): JSX.Element {
    return (
        <div className={topLevelDivStyling} data-testid="sideBar">
            <Link href='/'>
                <div className={logoDivStyling} data-testid="logoContainer">
                    <Image className={imgStyling} src={logo} width="96rem" height="96rem" alt="logo" />
                </div>
            </Link>
            <div className="h-full" data-testid="hFullDiv" />
        </div>
    );
}