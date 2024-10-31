import { NavLink } from 'react-router-dom'
import './NavBar.css'
export default function NavBar(){
    return <>
    
    <nav className="navbar navbar-expand-lg bgcolor sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{color:'white'}}>
                        <h3>Billionaire</h3>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/markZuckerberg">
                                    Mark Zuckerberg
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/elonMusk">
                                    Elon Musk
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/jeffBezos" >
                                    Jeff Bezos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/larryPage">
                                    Larry Page
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/oprahWinfrey">
                                    Oprah Winfrey
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/peterThiel">
                                    Peter Thiel
                                </NavLink>
                            </li>
                            <li >
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/reedHasting" style={{ textDecoration: "none" }}>
                                    Reed Hasting
                                </NavLink>
                            </li>
                            <li >
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/richardBranson" style={{ textDecoration: "none" }}>
                                    Richard Branson
                                </NavLink>
                            </li>
                            <li >
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/timCook" style={{ textDecoration: "none" }}>
                                    Tim Cook
                                </NavLink>
                            </li>
                            <li >
                                <NavLink className={(e) => { return e.isActive ? "red" : "design" }} to="/warrenBuffet" style={{ textDecoration: "none" }}>
                                    Warren Buffett
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
    </>
}