export default function SkillItem({ text, img_name }) {
    const path = "icons8_skills/" + img_name + ".png";
    return (
        <div className="skill-item d-flex flex-row justify-content-center align-items-center">
            <div>
                {img_name ? (
                    <img
                        style={{
                            marginRight: "8px",
                            marginTop: "0",
                            paddingTop: "0",
                            maxWidth: "100px",
                            maxHeight: "100px",
                        }}
                        src={path}
                    />
                ) : (
                    ""
                )}
            </div>
            <div
                className={`d-flex align-items-center  ${
                    img_name ? "" : "no-img"
                }`}
            >
                {text}
            </div>
        </div>
    );
}
