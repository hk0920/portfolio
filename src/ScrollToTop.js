import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import $ from "jquery";

const ScrollToTop=()=>{
	const {pathname} = useLocation();

	useEffect(()=>{
		window.scrollTo(0, 0);

		$(".gnb a").removeClass("active");
		if(pathname === "/"){
			$("#wrap").addClass("main");
		}else{
			$("#wrap").removeClass("main");
			$(".gnb a:last-child").addClass("active");
		}
	},[pathname]);

	return null;
}

export default ScrollToTop;