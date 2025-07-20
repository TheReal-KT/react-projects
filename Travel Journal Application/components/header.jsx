import globe from './assets/Globe.png'

function Header() { 
    return ( 
        <div className='fixed top-5 inset-x-5 flex items-center justify-center rounded-xl py-3 shadow-2xl border-white/20 backdrop-blur-lg'>
            <nav className='flex items-center'> 
                <img src={globe} alt="globe-logo" />
                <h1 className="ml-4 !text-lg font-bold font-[inter] text-black ">Travel Journal</h1>
                <ul className='flex items-center gap-2 p-4 font-[inter] text-black'>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Docs</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
