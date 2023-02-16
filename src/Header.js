import React from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import * as CommonEvt from "./CommonEvt";

function Header(){
	const location = useLocation();

	const gnbClick=(e)=>{
		const target = e.target;
		if(location.pathname === "/"){
			CommonEvt.moveScroll(e);
		}
		$(target).siblings().removeClass("active");
		$(target).addClass("active");
	}

	return(
		<header id="header">
			<h1 className="logo">
				<Link to={"/"}>로고</Link>
			</h1>
			<nav className="gnb">
				<Link to={"/"} onClick={gnbClick} data="about">About</Link>
				<Link to={"/"} onClick={gnbClick} data="resume">Resume</Link>
				<Link to={"/"} onClick={gnbClick} data="skill">Skill</Link>
				<Link to={"/work"} data="work">Portfolio</Link>
			</nav>
		</header>
	)
}

export default Header;