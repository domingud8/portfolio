import { useEffect, useState, useRef } from "react";
import ProjectCard from "./hooks/ProjectCard";
import projects from "./data/projects_data";

export default function Projects() {
    return (
        <div
            className="contentSection d-flex flex-column "
            id="projects"
            style={{ height: 1800 }}
        >
            <div className="section-title d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center">
                    <hr className="line-separation" />
                </div>

                <h2>Projects</h2>

                <div className="container d-flex flex-row ">
                    {projects.map((project, index) => (
                        <div className="col-md-4 project-card" key={index}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
