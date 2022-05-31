import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MemoryRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navi from "./components/Nav";
import Content from "./components/Content";
import { useEffect, useState } from "react";

export default function App() {
    let [activeLink, setActiveLink] = useState(0);

    function handleChangeLink(link) {
        setActiveLink(link);
    }

    return (
        <BrowserRouter>
            <div>
                <div>
                    <Navi
                        activeLink={activeLink}
                        handleChangeLink={handleChangeLink}
                    />
                </div>

                <div className="content">
                    <Content />
                </div>
            </div>
        </BrowserRouter>
    );
}
