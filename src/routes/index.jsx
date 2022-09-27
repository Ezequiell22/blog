import {
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom"
import Navbar from '../components/navbar'
import Home from '../pages/home/index.jsx'

export default function Routes1(){

    return (

        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/form" element={  <h1>FORMULARIO</h1>} />
        </Routes>
       

        </BrowserRouter>
    )
}
