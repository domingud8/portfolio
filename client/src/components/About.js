import { useEffect, useState, useRef } from "react";
import Carousel from "react";

const items_description = [
    {
        jobTitle: "Full-Stack Software Developer",
        text: `I am full stack Software Developer with strong programming skills in Python and Javascript. Additionally, my background in Data Science allows me to be confident looking and dealing with data from different perspectives. I am specially interested on developing DS driven products`,
    },
    {
        images: ["cms.png", "cern.png"],
        text: "Former member of one of the biggest international Particle Physics collaborations, the CMS experiment at CERN (during the Ph. D).",
    },
    {
        images: ["creative.png", "international.png"],
        text: "Creative and passionate about challenges and learning new things. Experience working in international environments.",
    },
];

const Card = (props) => {
    return (
        <li className="card">
            <p>{props.text}</p>
        </li>
    );
};

export default function About() {
    const [moveClass, setMoveClass] = useState("");
    const [carouselItems, setCarouselItems] = useState(items_description);

    const handleAnimationEnd = () => {
        if (moveClass === "prev") {
            shiftNext([...carouselItems]);
        } else if (moveClass === "next") {
            shiftPrev([...carouselItems]);
        }
        setMoveClass("");
    };

    const shiftPrev = (copy) => {
        let lastcard = copy.pop();
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
    };

    const shiftNext = (copy) => {
        let firstcard = copy.shift();
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
    };

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--num",
            carouselItems.length
        );
    }, [carouselItems]);
    return (
        <div
            style={{ marginTop: "150px" }}
            className="contentSection d-flex flex-column"
            id="about"
        >
            <div className="container-fluid row">
                {" "}
                <div className="col-md-4 profile-photo d-flex justify-content-center align-items-center">
                    <div>
                        <img
                            style={{ maxHeight: "40vh" }}
                            src="photo_profile.jpg"
                        />
                    </div>
                </div>
                <div className="col-md-8 carousel-wrapper d-flex justify-content-center align-items-center">
                    <div className="carousel d-flex flex-column  align-items-center">
                        <ul
                            onAnimationEnd={handleAnimationEnd}
                            className={`${moveClass}`}
                        >
                            <li className="card d-flex flex-column">
                                {carouselItems[0].jobTitle ? (
                                    <span className="job-title">
                                        {carouselItems[0].jobTitle}
                                    </span>
                                ) : (
                                    ""
                                )}{" "}
                                <p>{carouselItems[0].text}</p>
                                <div className="d-flex flex-row justify-content-around">
                                    {carouselItems[0].images
                                        ? carouselItems[0].images.map(
                                              (image, i) => (
                                                  <div key={i}>
                                                      <img
                                                          style={{
                                                              maxWidth: "100px",
                                                              minWidth: "100px",
                                                              marginRight:
                                                                  "30px",
                                                          }}
                                                          src={image}
                                                      />
                                                  </div>
                                              )
                                          )
                                        : " "}
                                </div>
                            </li>
                        </ul>
                        <div className="ui">
                            <button
                                onClick={(e) => {
                                    setMoveClass("next");
                                }}
                                className="prev"
                            >
                                <span className="material-icons">
                                    chevron_left
                                </span>
                            </button>
                            <button
                                onClick={() => setMoveClass("prev")}
                                className="next"
                            >
                                <span className="material-icons">
                                    chevron_right
                                </span>
                            </button>
                        </div>
                        <ol className="dots">
                            <li className="dot"></li>
                            <li className="dot"></li>
                            <li className="dot"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
