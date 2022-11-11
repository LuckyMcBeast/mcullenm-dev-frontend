
export default function GradientLine({isLeft = false}: {isLeft?: Boolean}) {
    let bgGradient = "bg-gradient-to-r"
    if(isLeft) { bgGradient = "bg-gradient-to-l" }
    return (<div className={`${bgGradient} from-one-dark-cyan via-one-dark-green to-one-dark-darkYellow h-1.5`}/>)
}