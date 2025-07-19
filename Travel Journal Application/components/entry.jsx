function Entry(props) { 
    return ( 
        <article className="flex items-center justify-center gap-4 py-4">
            <div>
                <img src= {props.img} className="rounded-lg max-1-100"/>
            </div>
            <div className="flex flex-col text-left ml-4 font-[inter] gap-2.5">
                <span className="flex flex-row gap-2.5">
                    <b>{props.location}</b>
                    <a href= {props.link} target="_blank"><p>View on Google</p>
                    </a>
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
