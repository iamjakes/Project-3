import React from 'react';

const Header = () => {
    return(
        <header className="bg-secondary mb-3 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <h1 className="">Project 3</h1>
            </div>
        <nav>
            <ul className="flex-row">
                <li className="mx-1 ">
                    <a href="#list-item" className="px-2 mr-3">
                        List item
                    </a>
                </li>
                <li>
                    <a href="#list-item2">
                        List item 2
                    </a>
                </li>
            
                <li>
                <span>Item</span>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;