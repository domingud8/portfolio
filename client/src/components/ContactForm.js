import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Contact() {
    const [status, setStatus] = useState("Submit");
    const MySwal = withReactContent(Swal);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = event.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        })
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                console.log(result);
                MySwal.fire(
                    "Thanks! I will get back to you!",
                    result.status,
                    "success"
                );
                setStatus("Submit");
            });
    };
    return (
        <form
            onSubmit={handleSubmit}
            style={{ color: "white", fontSize: "22px" }}
        >
            <div style={{ paddingBottom: "20px" }} className="form-group ">
                <label>Name</label>
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Name"
                    required="required"
                    data-validation-required-message="Please enter your name."
                />
            </div>
            <div style={{ paddingBottom: "20px" }} className="form-group">
                <label style={{ paddingBottom: "10px" }}>Email Address</label>
                <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                />
            </div>
            <div style={{ paddingBottom: "20px" }} className="form-group">
                <label style={{ paddingBottom: "10px" }}>Message</label>
                <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter a message."
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-xl">
                {status}
            </button>
        </form>
    );
}
