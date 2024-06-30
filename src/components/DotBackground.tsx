import DotPattern from "./magicui/dot-pattern"



const DotBackground = () => {
    return (
        <div className="absolute inset-0 z-[-1] opacity-30 bg-blue-100">
            <DotPattern/>
        </div>
    )
}

export default DotBackground
