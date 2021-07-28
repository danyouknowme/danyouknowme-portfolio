import "./intro.scss";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Engineering Student"]
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm <span>Dan</span></h2>
                    <h1>Thanathip Suwannakhot</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDownIcon className="downArrow"/>
                </a>
            </div>
        </div>
    )
}
