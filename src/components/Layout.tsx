import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const li = {
    marginLeft: "30px"
}

const link = {
    textDecoration: "none",

}

function Layout() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgb(21 163 227 / 76%)", padding: "15px" }}>
                <span>Portfolio</span>
                <nav>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={li}>
                            <Link style={link} to="/">Home</Link>
                        </span>
                        <span style={li}>
                            <Link style={link} to="/about">About</Link>
                        </span>
                        <span style={li}>
                            <Link style={link} to="/contact">Contact</Link>
                        </span>
                        <span style={li}>
                            <Link style={link} to="/Resume">Resume</Link>
                        </span>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Layout;