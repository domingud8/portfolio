import { useCallback, useRef, useEffect, useState } from "react";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

function getDate() {
    var aestTime = new Date();
    return aestTime;
}
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
export default function Content() {
    const dateVal = getDate();
    const dateDay = dateVal.getDay();
    const dateString = dateVal.toLocaleString("en-US", {
        timeZone: "Europe/Berlin",
    });
    /* const [scrollPosition, setScrollPosition] = useState(0);

    const id_names = [
        "about",
        "projects",
        "experience",
        "areas",
        "skills",
        "contact",
    ];
  
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    let [currentSection, setCurrentSection] = useState(0);

  function trackAfterScrolling(currentScrollPosition) {
        let wrappedElement = document.getElementById(id_names[currentSection]);
        //console.log(currentSection);
        //console.log(
        //    "currentPosition",
        //    currentScrollPosition,
        //    wrappedElement.offsetTop + wrappedElement.clientHeight
        //);
        if (
            currentScrollPosition + 100 >
            wrappedElement.offsetTop + wrappedElement.clientHeight
        ) {
            setCurrentSection(currentSection + 1);
        }
        if (currentScrollPosition < wrappedElement.offsetTop) {
            setCurrentSection(currentSection - 1);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            trackAfterScrolling(scrollPosition);
        };
    }, [scrollPosition]);

    useEffect(() => {
        handleChangeLink(currentSection);
    }, [currentSection]);*/
    return (
        <div id="content">
            <About />
            <Experience />
            <Skills />
            <Projects />
            <footer id="contact">
                <div className="container-fluid row">
                    <div
                        style={{ marginBottom: "30px" }}
                        className="col-md-4"
                        id="date"
                    >
                        <p style={{ color: "white" }}>
                            This is a Single Page Application web page, built
                            with Node.js & Express.js, using React & Bootstrap
                            for the frontend. Code can be found{" "}
                            <a
                                style={{ color: "white" }}
                                target="_blank"
                                href="https://github.com/domingud8/portfolio"
                            >
                                here
                            </a>
                            .{" "}
                        </p>
                        <p style={{ color: "white" }}> {dateString}</p>
                    </div>
                    <div style={{ marginBottom: "50px" }} className="col-md-6">
                        <ContactForm />{" "}
                    </div>
                    <div
                        style={{ marginBottom: "30px" }}
                        className="col-md-2 d-flex justify-content-center align-items-center"
                    >
                        <a target="_blank" href="https://github.com/domingud8">
                            <img
                                style={{
                                    marginRight: "8px",
                                    marginTop: "0",
                                    paddingTop: "0",
                                    width: "80px",
                                    height: "80px",
                                }}
                                src="github2.png"
                                className="social-media-img"
                            />
                        </a>
                        <a
                            target="_blank"
                            href="https://linkedin.com/in/domingud8"
                        >
                            <img
                                style={{
                                    marginRight: "8px",
                                    marginTop: "0",
                                    paddingTop: "0",
                                    width: "80px",
                                    height: "80px",
                                }}
                                src="linkedin.png"
                                className="social-media-img"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
