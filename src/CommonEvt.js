import gsap, { Power3 } from "gsap";
import $ from "jquery";

export const moveScroll=(e)=>{
	const target = e.target;
	const targetTxt = $(target).attr("data");
	const targetSection = $("." + targetTxt).offset().top;
	gsap.to($("html, body"), 0.6, {scrollTop:targetSection, ease:Power3.easeIn});
}

export const resumeLayout=()=>{
	let resumeBar;
	if(window.innerWidth >= 1024){
		resumeBar = 100;
	}else if(window.innerWidth >= 768 && window.innerWidth < 1024){
		resumeBar = 50;
	}else if(window.innerWidth < 768){
		resumeBar = 30;
	}

	if(window.innerWidth >=768){
		$(".resume-list li").each(function(i){
			if(i%2 === 0){
				$(this).find(".txt").css("left", ($(this).find(".txt").outerWidth()/2) + resumeBar)
			}else{
				$(this).find(".txt").css({"left":"auto", "right":($(this).find(".txt").outerWidth()/2) + resumeBar})
			}
		});
	}else{
		$(".resume-list li .txt").css("left", resumeBar);
	}
}

export const workImgSize=()=>{
	$(".work-list li").each(function(i){
		const workWidth = $(this).width();
		$(this).height(workWidth/1.6);
	})
}