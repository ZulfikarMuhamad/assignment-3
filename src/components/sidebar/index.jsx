const Sidebar = () => {
    return(
        <div className="flex flex-col justify-center items-center h-full bg-orange-800 gap-4">
            <img src="/images/avatar.jpg" className=" w-2/4 rounded-full border-8 border-gray-400 border-opacity-55"></img>
            <a href="#About" className=" text-gray-400 font-bold hover:text-white">ABOUT</a>
            <a href="#Experience" className=" text-gray-400 font-bold hover:text-white">EXPERIENCE</a>
            <a href="#Education" className=" text-gray-400 font-bold hover:text-white">EDUCATION</a>
            <a href="#Skills" className=" text-gray-400 font-bold hover:text-white">SKILLS</a>
            <a href="#Interest" className=" text-gray-400 font-bold hover:text-white">INTEREST</a>
            <a href="#Awards" className=" text-gray-400 font-bold hover:text-white">AWARDS</a>
        </div>
    )
}

export default Sidebar