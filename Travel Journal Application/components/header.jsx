import globe from './assets/Globe.png'

function Header() { 
    return ( 
        <div className='w-full flex bg-red-400 items-center justify-center py-3 fixed top-0 left-0'>
            <img src={globe} alt="globe-logo" />
            <h1 className="ml-4 !text-lg font-bold font-[inter] text-white ">Travel Journal</h1>
        </div>
    )
}

export default Header
