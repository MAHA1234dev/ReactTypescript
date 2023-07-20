import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

const li = {
    marginLeft: "30px"
}

function Layout() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Portfolio</span>
                <nav>
                    <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <li style={li}>
                            <Link to="/">Home</Link>
                        </li>
                        <li style={li}>
                            <Link to="/about">About</Link>
                        </li>
                        <li style={li}>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li style={li}>
                            <Link to="/Resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Layout;