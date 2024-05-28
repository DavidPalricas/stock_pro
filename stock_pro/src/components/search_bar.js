import '../css/search_bar.css';
import Info_Button from "./info_button";
import { FaSearch } from "react-icons/fa";
import BackButton from "./back_button";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchBar() {
    const [showSearch, setShowSearch] = React.useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/stock") {
            setShowSearch(true);
        } else {
            setShowSearch(false);
        }
    }, [location]);

    const input = () => {
        return (
            <div className="search-box">
                <input type="text" id="search" placeholder="Search through your inventory" />
                <button id="search-button">
                    <FaSearch id="search-icon" />
                </button>
            </div>
        );
    };

    return (
        <div className="top-bar">
            {location.pathname !== "/stock" && <BackButton />}
            
        </div>
    );
}
