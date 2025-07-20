function Card(props) {
    return ( 
        <div className="flex w-full mx-8 flex-col justify-center items-center bottom-20
        p-20 border-white shadow-2xl rounded-lg backdrop-blur-md">
            <h1 className="text-red-200 text-4xl font-bold">{props.title}</h1>
            <p>{props.info}</p>
        </div> 
    )
} 

export default Card
