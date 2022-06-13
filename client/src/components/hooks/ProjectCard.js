import { Title } from "@material-ui/icons";
import { useEffect, useState, useRef } from "react";
import ProjectModal from "./ProjectModal";
export default function ProjectCard({
    title,
    description,
    github,
    extended,
    image,
    projectUrl,
}) {
    const [modalShow, setModalShow] = React.useState(false);
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <div className="container-fluid column">
            <div className="col-md-12 mb-6">
                <img
                    className="img-fluid  border  border-3 rounded h-50 mb-6 "
                    src={image}
                    alt={`Screenshot from ${title}`}
                />
            </div>

            <div className="mb-6">
                <a target="_blank" rel="noreferrer" href={projectUrl}>
                    <h4 className="">{title}</h4>
                </a>
                <p className="mb-6  text-gray-700 text-gray-400">
                    {description}
                </p>

                <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => setLgShow(true)}
                >
                    More
                </button>
            </div>
            <ProjectModal
                title={title}
                extended={extended}
                github={github}
                show={lgShow}
                onHide={() => setLgShow(false)}
            />
        </div>
    );
}
