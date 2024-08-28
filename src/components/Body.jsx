import nextBg from "../assets/next.png"
import reactBg from "../assets/react.png"
import tailwindBg from "../assets/tailwind.png"

const Body = () => {
    return (
        <div className="flex flex-row items-center justify-center w-screen h-96 font-mont text-offwhite font-comfortaa">
            <section className="h-auto p-4 mx-5 w-80 rounded-xl shadow-custom-tile1 bg-tile">
                <div>
                    <img src={reactBg} alt="React.js art" className="mb-4 rounded-lg" />
                </div>
                <h1 className="mx-1 text-3xl">React.js</h1>
                <p className="p-4">
                    React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
                </p>
            </section> 
            <section className="h-auto p-4 mx-5 w-80 rounded-xl shadow-custom-tile2 bg-tile">
                <div>
                    <img src={nextBg} alt="Next.js art" className="mb-4 rounded-lg" />
                </div>
                <h1 className="mx-1 text-3xl">Next.js</h1>
                <p className="p-4">
                    Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.
                </p>
            </section>
            <section className="h-auto p-4 mx-5 w-80 rounded-xl shadow-custom-tile3 bg-tile">
                <div>
                    <img src={tailwindBg} alt="Tailwind art" className="mb-4 rounded-lg" />
                </div>
                <h1 className="mx-1 text-3xl">Tailwind CSS</h1>
                <p className="p-4">
                    Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.
                </p>
            </section>
        </div>
    )
}

export default Body