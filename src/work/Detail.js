import React, { useEffect, useState } from "react";
import $ from "jquery";
import workData from "./WorkData";
import { useParams } from "react-router-dom";

function Detail(){
	const seq = useParams("seq").seq;
	let data;

	for(let i=0; i<workData.length; i++){
		if(parseInt(seq) === workData[i].idx){
			data = workData[i];
		}
	}

  const loadEvt=()=>{
    setTimeout(() => {
      $(".detail-div").addClass("active");
			iframeSize();
    }, 250);
  }

	const iframeSize=()=>{
		const iframeWidth = $(".view-div iframe").width();
		$(".view-div iframe").height(iframeWidth / 1.7);
	}
	
	useEffect(()=>{
		loadEvt();
		window.addEventListener("resize", iframeSize);

		return()=>{
			window.removeEventListener("resize", iframeSize);
		}
	});


	return (
		<div id="cBody">
			<div className="detail-div inner">
				<h2 className="h2tit">{data.title}</h2>
				<div className="info-div">
					<p className="tit">Info</p>
					<dl className="info-dl">
						<dt>개발 기간</dt>
						<dd>{data.date}</dd>
						<dt>개발 언어</dt>
						<dd>{data.lang}</dd>
						<dt>링크</dt>
						<dd>
							<p className="link-txt">
								<strong>상용 URL</strong> 
								{
									data.url.split(" ")[0] !== "#" ?
										<a href={data.url} target={"_blank"}>{data.url}</a>
									:
										data.url.split(" ")[1] !== ""?
											"서버 연결된 url이 없어 하단 pdf 확인 부탁드립니다."
										:	"보안상 문제로 외부 미노출"
								}
							</p>
							<p className="link-txt">
								<strong>Git Hub</strong> 
								{
									data.git !== "" ?
										<a href={data.git} target={"_blank"}>{data.git}</a>
									:"-"
								}
							</p>
						</dd>
						<dt>담당 업무</dt>
						<dd>
							<div dangerouslySetInnerHTML={{__html:data.task}}></div>
						</dd>
					</dl>
				</div>
				<div className="view-div">
					<p className="tit">View</p>
					{
						data.url.split(" ")[1] === ""?
							<div className="img-div">
								<p>보안상 문제로 이미지로 대체합니다.</p>
								<img src={data.thumbnail} alt="" />
							</div>
						:
							<iframe src={data.url.split(" ")[0] === "#"?data.url.split(" ")[1]:data.url} frameBorder="0"></iframe>
					}
				</div>
			</div>
		</div>
	)
}

export default Detail;