import Card from "./card"
import Desert from "./assets/desertastronaut.jpg"

function Body() { 
    return (
        <main className="w-screen bg-cover bg-center h-screen bg-no-repeat" style={{backgroundImage: `url(${Desert})`}}>
            <div className="flex items-center justify-center">
                <h1 className="text-white text-4xl mt-20 text-shadow-lg" style={{fontFamily: 'Inter'}}>Weekly news. No Fluff</h1>
            </div>
            <div className="flex justify-center items-center mt-20">
                <div className="flex shadow-2xl rounded-[32px] flex-row justify-center items-center gap-4 backdrop-blur-3xl border border-gray-300 border-opacity-50">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="backdrop-blur-4xl p-4"
                    />
                    <button className="rounded-[32px] backdrop-blur-xs text-white font-bold p-3 mx-2 hover:cursor-pointer transition-all duration-600 hover:bg-gray-300 hover:text-black">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 w-full flex flex-row justify-center items-center gap-8 mt-10 bottom-20 flex-wrap">
                <Card 
                    title="Project 1"
                    info="Lorem ipsum"
                />
            </div>
        </main>
    )
}

export default Body
