import { useCallback, useRef, useEffect, useState } from "react";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

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
            <footer>
                {" "}
                <p style={{ color: "white" }} id="date">
                    Today: {dateString}
                </p>
            </footer>
        </div>
    );
}
