import { useState } from "react"
import Search from "./Search";

export default function Jumbotron() {
    // const [name, setName] = useState("memuat...");
    // const [sec, setSec] = useState(0);
    const [users, setUsers] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url).then((res) => res.json()).then((data) => setUsers(data));

    // useEffect(() => {
    //     console.log("new component");
    //     const timer = setInterval(() => {
    //         setSec((prev) => prev + 1)
    //     }, 1000);

    //     return () => {
    //         clearInterval(timer);
    //         console.log("component deleted (unmounted)");
    //     };
    // }, [])

    // useEffect(() => {
    //     console.log(`get a new data bcs id has changed`);
    //     fetch(url).then((res) => res.json()).then((data) => setUsers(data)).catch((err) => err.message);
    // }, []);

    return (
    <>
        <header className="flex flex-col items-center">
            <h1 className="px-3 m-3 tracking-widest max-lg:font-bold lg:text-6xl xl:text-8xl xl:text-zinc-700 xl:hover:text-zinc-400">JumboTron's HEREE</h1>
            <nav className="px-3 py-4 m-3 text-4xl tracking-tighter max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-9xl text-blue-700 hover:text-blue-400 text-center bg-blue-100 rounded-4xl">
                WE are .NET DEVELOPER Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, vel.
            </nav>
        </header>
        <main>
            <section>
                <ul className="space-y-2 p-2 mx-4">{users.map((item) => (
                    <li key={item.id} className="text-blue-600 font-medium"> {item.name} </li>
                ))}</ul>
                {/* <p className="py-2 px-4 text-green-500 m-2">you've opened this site for about {sec} seconds.</p> */}
            </section>
            <section>
                <Search />
            </section>
        </main>
    </>
    )
}