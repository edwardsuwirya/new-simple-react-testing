import './App.css';
import Navigation from "./navigation/Navigation";
import {Outlet, useNavigate} from "react-router-dom";

// npm install axios --save

function App() {
    const navigate = useNavigate();
    return (
        <div className='main-container'>
            <header className='header-container'>
                <label onClick={() => {
                    navigate('/main', {replace: true})
                }}>React Hands On</label>
            </header>
            <Navigation/>
            <section className='content-container'>
                <Outlet/>
            </section>
            <footer className='footer-container'>Copyright@2022 EnigmaCamp-SMM Batch 2</footer>
        </div>
    )
}

export default App;
