import './App.css'
import Navbar from "./components/Navbar.jsx";
import Create from "./components/Create.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Read from "./components/Read.jsx";
import Update from "./components/Update.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Create />} />
                    <Route exact path="/read" element={<Read />} />
                    <Route exact path="/edit/:id" element={<Update />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
