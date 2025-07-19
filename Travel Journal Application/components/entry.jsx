function Entry(props) { 
    return ( 
        <article className="flex items-center justify-center gap-4 py-4">
            <div className="w-48 flex-shrink-0">
                <img src={props.img} alt={props.title} className="w-full h-48 object-cover rounded-lg shadow-md"/>
            </div>
            <div className="flex flex-col text-left ml-4 font-[inter] gap-2.5">
                <span className="flex flex-row gap-2.5">
                    <b>{props.location}</b>
                    <a href={props.link} target="_blank" className="text-gray-500 underline">View on Google</a>
                </span>
                <h1>{props.title}</h1>
                <p><b>{props.date}</b></p>
                <p>
                {props.info}
                </p>
            </div>
        </article>
    )
}

export default Entry 
