import Image from "next/image";
import self from "public/cullen.jpg"
import DevIcons from "./DevIcons";
import GradientLine from "./GradientLine";


export default function About(): JSX.Element {
    
    const figureStyling = "flex flex-col max-w-screen md:flex-row md:place-items-center h-min-content bg-rocket-blue-900/25 p-8 xs:p-12 sm:px-36 md:p-0"
    const imageDivStyling = "w-full md:w-auto md:h-96 md2:h-64 aspect-square rounded-full mx-auto md:rounded-l-xl drop-shadow-md"
    const imageStyling = "w-inherit h-inherit rounded-full mx-auto md:rounded-l-xl shadow-md"
    const aboutCopyDivStyling = "pt-6 md:p-6 text-center md:text-left space-y-4"
    const aboutCopyStyling = "md2:text-lg text-md font-ubuntu text-one-dark-white"
    const callToActionStyling = "font-ubuntu md2:text-xl font-medium text-one-dark-blue"


    return (
        <div>
            <figure className={figureStyling}>
                <div className={imageDivStyling}>
                    <Image className={imageStyling} src={self} alt="Cullen (me)" />
                </div>

                <div className={aboutCopyDivStyling}>
                    <p className={aboutCopyStyling}>
                        They say <i className="text-one-dark-lightYellow">a jack of all trades is a master of none</i>, but
                        most do not know that this axiom ends with <i className="text-one-dark-lightYellow">but oftentimes better
                        than a master of one</i>. As a passionate <b className="text-one-dark-lightRed">full stack software 
                        developer</b> and <b className="text-one-dark-lightRed">agilist</b>,<b className="text-one-dark-green"> business 
                        professional</b> with an extensive background in both <b className="text-one-dark-green">sales</b> and 
                        <b className="text-one-dark-green"> operations</b>, and a dabbler in <b className="text-one-dark-darkYellow">
                        graphic design </b> as well as <b className="text-one-dark-darkYellow">photography</b>, this old saying resonates with me well.
                    </p>
                    <h3 className={callToActionStyling}>Join me on my growth journey through the trades.</h3>
                    <DevIcons />
                </div>
            </figure>
            <GradientLine isLeft={true} />
        </div>
    )
}