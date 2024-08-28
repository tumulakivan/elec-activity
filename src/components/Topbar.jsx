import reactLogo from "../assets/react.svg"

const Topbar = () => {
    return (
        <header className="flex flex-row items-center justify-between w-2/3 h-24 px-6 text-5xl text-offwhite shadow-custom-top-bar-dark rounded-2xl bg-tile">
            <div className="flex flex-row items-center justify-center">
                <img src={reactLogo} alt="" className="mr-4" />
                <h1 className="text-3xl font-comfortaa">Ivan Steiven A. Tumulak</h1>
            </div>
            <div className="flex flex-row items-center">
                <a href="" className="mx-2 text-xl">Home</a>
                <a href="" className="mx-2 text-xl">Profile</a>
                <a href="" className="mx-2 text-xl">Message</a>
                <a href="" className="mx-2 text-xl">Logout</a>
            </div>
        </header>
    )
}

export default Topbar