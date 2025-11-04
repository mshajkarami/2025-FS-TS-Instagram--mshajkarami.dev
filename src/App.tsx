import './App.css'


import {Route, Routes} from "react-router-dom";

// Rout path
import Home from './pages/HomePage/HomePage';
import Auth from './pages/AuthPage/AuthPage';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/auth" element={<Auth/>}/>
            </Routes>
        </>
    );
}


export default App
