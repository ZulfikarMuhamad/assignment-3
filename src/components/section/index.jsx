const Section = ({id, title, children}) => {
    return(
        <section id={id} className="flex flex-col h-full w-full justify-between px-32">
            <div>
                <hr/>
            </div>
            <div>
                <h2 className=" font-bold text-4xl">{title}</h2>
                {children}
            </div>
            <div>
                <hr/>
            </div>
        </section>
    )
}

export default Section