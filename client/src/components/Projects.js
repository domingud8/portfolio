import { useEffect, useState, useRef } from "react";
import ProjectCard from "./hooks/ProjectCard";
import projects from "./data/projects_data";

export default function Projects() {
    return (
        <div className="contentSection d-flex flex-column " id="projects">
            <div className="section-title d-flex flex-column justify-content-center">
                <h2 style={{ marginBottom: "50px" }}>Personal Projects</h2>

                <div className="container-fluid d-flex flex-wrap ">
                    {projects.map((project, index) => (
                        <div
                            style={{ marginRight: "70px", marginLeft: "70px" }}
                            className="col-md-3 project-card"
                            key={index}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
