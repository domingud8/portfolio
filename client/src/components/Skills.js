import { useEffect, useState, useRef } from "react";

import SkillItem from "./hooks/SkillItem.js";
export default function Skills() {
    return (
        <div className="contentSection d-flex flex-column " id="skills">
            <div className="section-title d-flex flex-column justify-content-center">
                <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                    <h2>Skills</h2>
                </div>
                <div className="container col-md-12">
                    <h1 className="text-borders">
                        <span className="heading">
                            Experience in{" "}
                            <span className="span-text">
                                {" "}
                                Web Software Development{" "}
                            </span>{" "}
                            & <span className="span-text">
                                {" "}
                                Data Science{" "}
                            </span>{" "}
                            fields. <br /> I enjoy planning, designing, and
                            developing the frontend and the backend of modern
                            web based applications.
                        </span>
                    </h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className=" container-fluid row justify-content-around ">
                    <div className="col-md-5 skill-box box ">
                        <p
                            style={{
                                fontSize: "28px",
                                fontWeight: "500",
                            }}
                        >
                            Web Software Development
                        </p>
                        <div style={{ paddingBottom: "20px" }}>
                            <p
                                style={{
                                    fontSize: "22px",
                                    fontWeight: "500",
                                }}
                            >
                                Programming Languages{" "}
                            </p>
                            <div className="d-flex justify-content-around">
                                <ul className="list-skills ">
                                    <li>
                                        {" "}
                                        <SkillItem
                                            text={"Javascript"}
                                            img_name={"javascript"}
                                        />
                                    </li>
                                    <li>
                                        {" "}
                                        <SkillItem
                                            text={"HTML5"}
                                            img_name={"html5"}
                                        />
                                    </li>
                                    <li>
                                        {" "}
                                        <SkillItem
                                            text={"CSS"}
                                            img_name={"css3"}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p
                            style={{
                                fontSize: "22px",
                                fontWeight: "500",
                            }}
                        >
                            {" "}
                            Packages and Frameworks{" "}
                        </p>
                        <div className="container row d-flex flex-row justify-content-around">
                            <div className=" col-md-6 skill-box">
                                <p
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: "400",
                                    }}
                                >
                                    {" "}
                                    Backend{" "}
                                </p>
                                <ul className="list-skills">
                                    <li>
                                        <SkillItem
                                            text={"Node"}
                                            img_name={"nodejs"}
                                        />
                                    </li>
                                    <li>
                                        <SkillItem text={"Express"} />
                                    </li>
                                    <li>
                                        <SkillItem
                                            text={"Postgresql"}
                                            img_name={"postgresql"}
                                        />
                                    </li>

                                    <li>
                                        <SkillItem text={"Jest"} />
                                    </li>
                                    <li>
                                        <SkillItem text={"SuperTest"} />
                                    </li>
                                    <li>
                                        <SkillItem
                                            text={"npm"}
                                            img_name={"npm"}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 skill-box ">
                                <p
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: "400",
                                    }}
                                >
                                    {" "}
                                    Frontend{" "}
                                </p>
                                <ul className="list-skills">
                                    <li>
                                        <SkillItem
                                            text={"vanilla Javascript"}
                                            img_name={"javascript"}
                                        />
                                    </li>
                                    <li>
                                        <SkillItem
                                            text={"jQuery"}
                                            img_name={"jquery"}
                                        />
                                    </li>
                                    <li>
                                        {" "}
                                        <SkillItem
                                            text={" Express-Handlebars"}
                                        />
                                    </li>
                                    <li>
                                        <SkillItem
                                            text={"Vue.js"}
                                            img_name={"vuejs"}
                                        />
                                    </li>
                                    <li>
                                        {" "}
                                        <SkillItem
                                            text={"React"}
                                            img_name={"react"}
                                        />
                                    </li>
                                    <li>
                                        {" "}
                                        <SkillItem
                                            text={"Bootstrap"}
                                            img_name={"bootstrap"}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 skill-box box">
                        <p
                            style={{
                                fontSize: "28px",
                                fontWeight: "500",
                            }}
                        >
                            Data Science and AI
                        </p>
                        <div>
                            <p
                                style={{
                                    fontSize: "22px",
                                    fontWeight: "500",
                                }}
                            >
                                Programming Languages{" "}
                            </p>
                        </div>
                        <div className="d-flex justify-content-around">
                            <ul className="list-skills ">
                                <li>
                                    {" "}
                                    <SkillItem
                                        text={"Python"}
                                        img_name={"python"}
                                    />
                                </li>
                                <li>
                                    {" "}
                                    <SkillItem text={"C++"} />
                                </li>
                            </ul>
                        </div>
                        <p
                            style={{
                                fontSize: "22px",
                                fontWeight: "500",
                            }}
                        >
                            {" "}
                            Packages and Frameworks{" "}
                        </p>
                        <div className="container row d-flex flex-row justify-content-around">
                            <div className=" col-md-8 skill-box">
                                <ul className="list-skills">
                                    <li>
                                        <SkillItem text={"Pandas"} />
                                    </li>
                                    <li>
                                        <SkillItem text={"Numpy"} />
                                    </li>
                                    <li>
                                        <SkillItem text={"Keras"} />
                                    </li>
                                    <li>
                                        <SkillItem
                                            text={"Tensorflow"}
                                            img_name={"tensorflow"}
                                        />
                                    </li>

                                    <li>
                                        <SkillItem text={"Scipy"} />
                                    </li>
                                    <li>
                                        <SkillItem text={"Scikit-learn"} />
                                    </li>
                                    <li>
                                        <SkillItem text={"Plotly, Dash"} />
                                    </li>
                                    <li>
                                        <SkillItem
                                            text={
                                                "Web Scrapping (Beautiful Soup, requests)"
                                            }
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className=" container-fluid row justify-content-center ">
                    {" "}
                    <div className="col-md-5 skill-box box ">
                        {" "}
                        <p
                            style={{
                                fontSize: "28px",
                                fontWeight: "500",
                            }}
                        >
                            Softwares and Technologies
                        </p>
                        <div className="d-flex justify-content-around">
                            <ul className="list-skills ">
                                <li>
                                    <SkillItem
                                        img_name={"linux"}
                                        text={"Linux, bash, shell"}
                                    />
                                </li>
                                <li>
                                    {" "}
                                    <SkillItem
                                        img_name={"github"}
                                        text={"Github"}
                                    />
                                </li>
                                <li>
                                    {" "}
                                    <SkillItem img_name={"aws"} text={"AWS"} />
                                </li>
                                <li>
                                    {" "}
                                    <SkillItem
                                        img_name={"heroku"}
                                        text={"Heroku"}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
