import { useEffect, useState, useRef } from "react";

export default function Projects() {
    return (
        <div
            className="contentSection d-flex flex-column "
            id="projects"
            style={{ height: 800 }}
        >
            <div className="section-title d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center">
                    <hr className="line-separation" />
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <h2>Projects</h2>
                </div>
            </div>
        </div>
    );
}
