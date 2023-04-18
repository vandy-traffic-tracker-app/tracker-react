import React from "react";
import './sidebarv2.css';

function SideBarV2() {
    return (
       <main>
        <header className="header">
            <div className="header-toggle">
                <i className="fa fa-bars"></i>
            </div>
        </header>

        <aside className="sidebar">
            <nav className="nav">
                <div>
                    <a href="" className="nav-logo"></a>
                </div>
            </nav>
        </aside>
       </main>
    );

}

export default SideBarV2;