import IceMountain from "./assets/icemountain.jpg"; 

function Content() { 

    function handleSubmit(e) { 
        e.preventDefault(); 
        const formEl = e.currentTarget; 
        const formdata = new FormData(formEl); 
        const email = formdata.get("email"); 
        console.log(email); 

    }


const submit = addEventListener("submit", () => { 
    const email = document.getElementById("email").value;
    console.log("Email", email);
    email.clear(); 
})


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center" style={{backgroundImage: `url(${IceMountain})`}}>
        <div className="flex justify-center items-center" style={{fontFamily: 'Montserrat'}}>
            <h1 className="absolute text-5xl flex justify-center items-center text-white top-1/8 ">Welcome to the Agency</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col backdrop-blur-md shadow-2xl rounded-2xl p-20" style={{fontFamily: 'Montserrat'}}>
            <div className="flex flex-col justify-center items-center"> 
                <h3 className="absolute flex text-3xl text-white top-[5%]">Login</h3>
                <div className="flex flex-col justify-center items-center gap-7 mt-10">
                    <input 
                        id="email"
                        type="text" 
                        className="border border-white text-white rounded-4xl p-2 outline-hidden" 
                        placeholder="Enter email" required
                    />
        
                    <input 
                        type="password" 
                        className="border border-white text-white rounded-4xl p-2 outline-hidden" 
                        placeholder="Enter password" 
                        required
                    />
                    <a href=""><p className="text-white text-center">Forgot password?</p></a>
                    <button 
                        onClick={submit}
                        type="submit" 
                        className="bg-white rounded-2xl p-4 px-10 mt-5 hover:bg-black hover:text-white hover:scale-110 hover:transition-all duration-400 cursor-pointer hover:rounded-4xl shadow-2xl" >Login</button>
                    <a href="google.com"><p className="text-white text-center">Don't have an account?</p></a>
                </div>
            </div>
        </form>
        
    </div>
  );
}

export default Content
