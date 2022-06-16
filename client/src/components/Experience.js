import { useEffect, useState, useRef } from "react";
import { Chrono } from "react-chrono";
export default function Experience() {
    const eductation_data = [
        {
            title: "Jan 2022 - April 2022",
            cardTitle: "SPICED Academy, Hamburg, Germany",
            cardSubtitle: "Full Stuck Software Development boot-camp",
            cardDetailedText:
                "12-week intensive boot-camp focus on full-stack web software development skills. I learnt how to design, built and test web based applications. Javascript was used for both, backend and frontend, development.",
        },
        {
            title: "Jan 2016 - December 2019",
            cardTitle: "Hamburg University, Hamburg, Germany",
            cardSubtitle: "PhD in Particle Physics",
            cardDetailedText:
                "Ph. D. in experimental particle physics. Analysis and interpretation of data recorded by the CMS (Compact Muon Solenoid) experiment at CERN. ",
        },
        {
            title: "Sept 2009 -  July 2014",
            cardTitle: "Havana University, Havana, Cuba",
            cardSubtitle: "Diploma in Nuclear Physics",
            cardDetailedText:
                "Dip. in Nuclear Physics. Thesis in the field of material science: Monte Carlo simulation of electronic interaction with different materials. ",
        },
    ];
    const items = [
        {
            title: "January 2020 - December 2021",
        },
        {
            title: "Jan 2016 - December 2019",
            cardTitle: "DESY, Hamburg, Germany",
            cardSubtitle: "Data Scientist, Junior Researcher",
        },
        {
            title: "Sept 2014 - December 2015",
            cardTitle: "Havana University, Habana, Cuba",
            cardSubtitle: "Teaching assistant, Junior Researcher",
        },
    ];

    const [isMore, setIsMore] = useState(false);
    useEffect(() => {
        console.log(isMore);
    }, [isMore]);

    function changeButtonText() {
        setIsMore(!isMore);
    }
    return (
        <div className="contentSection container-fluid row" id="experience">
            <div className="d-flex justify-content-center  ">
                <hr className="line-separation" />
            </div>
            <h2 style={{ marginBottom: "50px" }}>My Path</h2>
            <div className="container row">
                <div className="col-md-6 chrono section-title d-flex flex-column justify-content-between">
                    <h2> Education</h2>
                    <div style={{ height: "60vh" }}>
                        <Chrono
                            items={eductation_data}
                            theme={{
                                primary: "var(--main-color)",
                                secondary: "white",
                                cardBgColor: "white",
                                cardForeColor: "black",
                                titleColor: "var(--main-color)",
                            }}
                            mode="VERTICAL"
                            scrollable={{ scrollbar: true }}
                        ></Chrono>
                    </div>
                </div>
                <div className="col-md-6 chrono section-title d-flex flex-column justify-content-between ">
                    <h2> Work Experience </h2>

                    <div
                        className="chronoPersonalised"
                        style={{ fontSize: "22px", height: "60vh" }}
                    >
                        <Chrono
                            items={items}
                            theme={{
                                primary: "var(--main-color)",
                                secondary: "white",
                                cardBgColor: "white",
                                cardForeColor: "black",
                                titleColor: "var(--main-color)",
                            }}
                            mode="VERTICAL"
                            scrollable={{ scrollbar: true }}
                            cardHeight="50px"
                        >
                            <div> Maternity Leave</div>

                            <div>
                                Member of the CMS Experiment at CERN (based at
                                DESY) working on data analysis.
                                <div className="panel-group">
                                    <div className="panel panel-default">
                                        <div
                                            style={{ textAlign: "center" }}
                                            className="panel-heading"
                                        >
                                            <h4 className="panel-title">
                                                <a
                                                    className="btn btn-default"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapse1"
                                                    onClick={() => {
                                                        changeButtonText();
                                                    }}
                                                >
                                                    {isMore
                                                        ? "Read less"
                                                        : "Read more"}{" "}
                                                    &raquo;
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapse1"
                                            className="panel-collapse collapse"
                                        >
                                            <ul className="list-phd-actions">
                                                <li>
                                                    Accomplishment of a complex
                                                    data-driven predictive
                                                    analysis using{" "}
                                                    <span className="span-text1">
                                                        {" "}
                                                        Big Data{" "}
                                                    </span>{" "}
                                                    at CERN. The analysis
                                                    framework was developed in{" "}
                                                    <span className="span-text1">
                                                        {" "}
                                                        Python{" "}
                                                    </span>{" "}
                                                    &{" "}
                                                    <span className="span-text1">
                                                        C++{" "}
                                                    </span>
                                                    and uses{" "}
                                                    <span className="span-text1">
                                                        Machine Learning
                                                    </span>{" "}
                                                    techniques for signal
                                                    recognition of t
                                                    <span
                                                        style={{
                                                            textDecoration:
                                                                "overline",
                                                        }}
                                                    >
                                                        t
                                                    </span>{" "}
                                                    events in the boosted regime{" "}
                                                    <a
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                            color: "var(--main-color)",
                                                        }}
                                                        href="https://bib-pubdb1.desy.de/record/438672/files/Daniela_Dominguez_Damiani_Thesis_neu.pdf"
                                                    >
                                                        (link to publication)
                                                    </a>
                                                    .
                                                </li>
                                                <li>
                                                    Development and updatement
                                                    of several modules in Python
                                                    and C++ of the statistical
                                                    analysis framework for
                                                    performing data-driven
                                                    predictive analysis{" "}
                                                </li>
                                                <li>
                                                    Active participation in
                                                    workshops and international
                                                    conferences in order to
                                                    present results.
                                                </li>
                                                <li>
                                                    Mentoring activities,
                                                    tutoring students on their
                                                    projects during the Summer
                                                    Student Program at DESY.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div> </div>
                        </Chrono>
                    </div>
                </div>
            </div>
        </div>
    );
}
