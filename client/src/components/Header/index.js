import React from 'react';

const Header = () => {
    return(
        <header className="bg-secondary mb-3 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <h1 className= "page-title"><a href="/">Personal Travel Tracker ✈️ </a></h1>
        <nav>
            <ul className="flex-row">
                <li>
                    <a href="entertainment" className="pl-0 ml-0">
                        Entertainment
                    </a>
                </li>
                <li>
                    <a href="food" className="pl-0 ml-0">
                        Food
                    </a>
                </li>
            
                <li>
                    <a href="sports" className="pl-0 ml-0">
                        Sports
                    </a>
                </li>
                <li>
                    <a href="reviews" className="pl-0 ml-0">
                        Reviews
                    </a>
                </li>

            </ul>
        </nav>
        </div>
    </header>
    )
}

export default Header;