import React from "react";
import '../styles/about.css'
const About = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="mt-5">

                <h1 className="mt-5 mb-5">Welcome to our app 😁</h1>
                <h2 className="mb-5">Here 👇 are some of the things you can do here</h2>
                <ul>
                    <li><h4>Case your own vote 👍👎</h4></li>
                    <li><h4>See the communities consensus on their favorites 😀</h4></li>
                    <li><h4>Stay up to date on what has been going on in the house... maybe 🤔</h4></li>
                </ul>
            </div>
        </div>
    )
}


export default About
