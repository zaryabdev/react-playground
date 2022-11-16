import React, { useState, useEffect, useRef } from "react";
import People from "./images/image.jpg";
import "./index.scss";
// import CSSRulePlugin from "gsap/CSSRulePlugin";
import CSSRulePlugin from "gsap/CSSRulePlugin";
// import CSSRulePlugin from "gsap-trial/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap/gsap-core";

function App() {
    let container = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".img-container:after");

    const tl = new TimelineLite();

    useEffect(() => {
        tl.to(container, 1, { css: { visibility: "visible" } });
    }, []);

    return (
        <div className="main">
            <div ref={(el) => (container = el)} className="container">
                <>
                    <div ref={(el) => (image = el)} className="img-container">
                        <img src={People} alt="" />
                    </div>
                </>
            </div>
        </div>
    );
}

export default App;
