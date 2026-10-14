import { Route, Routes } from "react-router"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"

function Routess() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default Routess