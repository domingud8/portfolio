import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState, useRef } from "react";
import useScrollPosition from "./hooks/useScrollPosition";
import { blue } from "@material-ui/core/colors";

export default function Navi({ activeLink, handleChangeLink }) {
    const navRef = useRef(null);
    const links = [
        {
            name: "About",
            link: "#about",
            id: "about",
        },

        {
            name: "Education & Work Experience",
            link: "#experience",
            id: "experience",
        },

        {
            name: "Skills",
            link: "#skills",
            id: "skills",
        },
        {
            name: "Projects",
            link: "#projects",
            id: "projects",
        },
    ];

    function changeLinkActive(link) {
        handleChangeLink(link);
    }
    let scrollPosition = useScrollPosition();

    useEffect(() => {
        console.log(navRef.current?.clientHeight);
        const nav = document.getElementById("content");
        nav.style.setProperty("padding-top", navRef.current?.clientHeight);
    }, [navRef.current?.clientHeight]);

    let [onLink, setOnLink] = useState(null);

    function onOverLink(link) {
        setOnLink(link);
    }

    function onLeavingLink() {
        setOnLink(null);
    }

    return (
        <nav
            id="header"
            ref={navRef}
            className={`navbar fixed-top navbar-expand-lg navbar-light bg-light
                ${scrollPosition != 0 ? "scrolled" : ""}`}
        >
            <div className="container-fluid">
                <p className="responsive-font-Name navbar-header mb-01 h4 text-uppercase ">
                    Daniela Dominguez Damiani
                </p>

                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse  justify-content-end"
                    id="navbarCollapse"
                >
                    <ul className="nav navbar-nav">
                        {links.map((link, index) => (
                            <li key={link.id}>
                                <Link
                                    to={link.link}
                                    className={`
                                    ${
                                        (activeLink === index) &
                                        (onLink != index)
                                            ? "active-link"
                                            : ""
                                    } 
                                    ${onLink === index ? "on-link" : ""}
                                    ${
                                        (onLink != index) &
                                        (activeLink != index)
                                            ? "list-nav"
                                            : ""
                                    }`}
                                    smooth={true}
                                    onClick={() => changeLinkActive(index)}
                                    onMouseEnter={() => {
                                        onOverLink(index);
                                    }}
                                    onMouseLeave={() => {
                                        onLeavingLink();
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
