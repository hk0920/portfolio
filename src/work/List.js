import React, { useEffect, useState } from "react";
import $ from "jquery";
import workData from "./WorkData";
import * as CommonEvt from "../CommonEvt";
import { Link } from "react-router-dom";

function WorkList(){
	const [data, setData] = useState(workData);

  const loadEvt=()=>{
    setTimeout(() => {
      $(".work-div").addClass("active");
			CommonEvt.workImgSize();
    }, 250);
  }

	const tabClick=(e)=>{
		const target = e.target;
		const targetType = $(target).attr("data");
		const tabData = [];

		$(target).siblings().removeClass("active");
		$(target).addClass("active");

		if(targetType !== "all"){
			for(let i=0; i<workData.length; i++){
				const categoryArr = workData[i].category.split(" ");
				for(let j=0; j<categoryArr.length; j++){
					if(categoryArr[j] === targetType){
						tabData.push(workData[i]);
					}
				}
			}
			setData(tabData);
		}else{
			setData(workData);
		}
	}
	
	useEffect(()=>{
		loadEvt();
		window.addEventListener("resize", CommonEvt.workImgSize);

		return()=>{
			window.removeEventListener("resize", CommonEvt.workImgSize);
		}
	});

	return (
		<div id="cBody">
			<div className="work-div inner">
				<h2 className="h2tit">PORTFOLIO</h2>
				<div className="tab-btn">
					<button onClick={tabClick} data="all" className="active">All</button>
					<button onClick={tabClick} data="front">Front-end</button>
					<button onClick={tabClick} data="back">Back-end</button>
					<button onClick={tabClick} data="design">Design/Art</button>
				</div>
				<ul className="work-list">
					{
						data.map((item, i)=>(
							<li key={i}>
								<Link to={{
									pathname:"/detail/" + item.idx
								}}>
									<div className="img-div">
										<img src={item.thumbnail} alt="" />
									</div>
									<div className="txt-div">
										<p className="tit">{item.title}</p>
										<p className="date">{item.date}</p>
									</div>
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default WorkList;