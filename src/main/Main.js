import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import gsap, { Power0 } from "gsap";
import profileImg from "../assets/image/hg2.jpg";
import workData from "../work/WorkData";
import * as CommonEvt from "../CommonEvt";

const workList = [];

for(let i=0; i<6; i++){
  const item = {
    idx:workData[i].idx,
    category:workData[i].category,
    title:workData[i].title,
    thumbnail:workData[i].thumbnail,
    url:workData[i].url,
    date:workData[i].date
  };
  workList.push(item);
}

function Main() {
  const scrollEvt=()=>{
    $("#wrap.main #cBody > div:not('#sideBtn')").each(function(i){
      if(window.scrollY + window.innerHeight > $(this).offset().top + $(this).outerHeight()/4){
        $(this).addClass("active");
        $("#sideBtn button").removeClass("active");
        $("#sideBtn button").eq(i).addClass("active");

        const activeSection = $(this).attr("class").split(" ")[0];
        $(".gnb a").each(function(j){
          if(activeSection === $(this).attr("data")){
            $(".gnb a").removeClass("active");
            $(".gnb a").eq(j).addClass("active");
          }
        });

        if($(this).hasClass("resume")){
          $(".resume-list li").each(function(q){
            gsap.to($(this).find(".txt"), 0.6, {delay:0.3*q, opacity:1, ease:Power0.easeIn});
          });
        }

        if($(this).hasClass("skill")){
          $(".skill-list li").each(function(i){
            const iconClassName = $(this).find(".icon").attr("class");
            gsap.to($(this).find(".icon"), 1, {delay:0.2*i, css:{className:'+='+ iconClassName +' active'}})
          })
        }
      }
    })
  }

  const loadEvt=()=>{
    setTimeout(() => {
      CommonEvt.resumeLayout();
      CommonEvt.workImgSize();
      $(".main-vis").addClass("active");
    }, 250);
  }

  const sideBtnClick=(e)=>{
    const target = e.target;
    CommonEvt.moveScroll(e);
    $(target).siblings().removeClass("active");
    $(target).addClass("active");
  }
  
  const resizeEvt=()=>{
    CommonEvt.resumeLayout();
    CommonEvt.workImgSize();
  }

  useEffect(()=>{
    loadEvt();
    window.addEventListener("scroll", scrollEvt);
    window.addEventListener("resize", resizeEvt);

    return()=>{
      window.removeEventListener("scroll", scrollEvt);
      window.removeEventListener("resize", resizeEvt);
    }
  });
  
  return (
    <div id="cBody">
      <div id="sideBtn">
        <button onClick={sideBtnClick} className="active" data="main-vis">main-vis</button>
        <button onClick={sideBtnClick} data="about">about</button>
        <button onClick={sideBtnClick} data="resume">resume</button>
        <button onClick={sideBtnClick} data="skill">skill</button>
        <button onClick={sideBtnClick} data="work">work</button>
        <button onClick={sideBtnClick} data="contact">contact</button>
      </div>

      <div className="main-vis">
        <p className="txt1">HAN HEE GUE</p>
        <p className="txt2">WEB FRONT END DEVELOPER</p>
      </div>

      <div className="about">
        <div className="inner">
          <h2 className="h2tit">ABOUT ME</h2>
          <div className="photo">
            <img src={profileImg} alt="" />
          </div>
          <div className="txt-div">
            <p className="name-txt">HEE GUE HAN</p>
            <p className="email-txt">gmlrb920@naver.com</p>
            <div className="txt">
              안녕하세요. 웹 프론트엔드 개발자 한희규입니다.<br/><br/>
              웹 에이전시에서 퍼블리셔로 4년간 직장 생활을 하며 다양한 프로젝트를 경험했습니다. 롯데월드, 에이스 침대 등의 사이트를 제작하기 위해 타 팀과 협업을 하고 제가 직접 작업한 코딩을 프로젝트 제안사업으로 시작하여 프로젝트 수주와 마무리를 하며 실제 사용자에게 공개되었을 때 성취감과 만족감을 가지고 다녔습니다.<br/><br/>
              4년 동안 많이 보고 배우면서 화면 뒤에서 데이터가 어떻게 입/출력되는지 궁금하고 내가 데이터 입출력도 하면 어떨까? 라는 생각과 함께 더 발전하고 싶은 열망이 생겼습니다. 그 열망으로 회사에 제안을 해보기도 했지만 회사구조상 바꿔야할 부분이 많아져 힘들다는 얘기를 들었습니다. 그 후, 독학을 하면서 부족함을 느껴 데이터 흐름을 알기 위해 Java back-end 과정을 듣게 되었습니다.<br/><br/>
              이러한 경험들과 전보다 발전한 코딩 능력을 결합하여 트렌드가 빠르게 변화하는 웹 사이트에 맞춰 도움이 되는 인재가 되기 위해 노력하고 있습니다.
            </div>
          </div>
        </div>
      </div>

      <div className="resume">
        <div className="inner">
          <h2 className="h2tit">RESUME</h2>
          <p className="txt1">Experience / Education</p>
          <ul className="resume-list">
            <li>
              <p className="txt">Adimisson<span>Mockwon University - 2012.03</span></p>
            </li>
            <li>
              <p className="txt">Group Exhibition<span>相應展 - 2013</span></p>
            </li>
            <li>
              <p className="txt">Group Exhibition<span>Mokwon Paintmarking Exhibition - 2014</span></p>
            </li>
            <li>
              <p className="txt">Graduation Exhibition<span>126144000" - 2015</span></p>
            </li>
            <li>
              <p className="txt">Graduate<span>Mokwon University - 2016.02</span></p>
            </li>
            <li>
              <p className="txt">Docent<span>"모네, 빛을 그리다" - 2015.12 ~ 2016.03</span></p>
            </li>
            <li>
              <p className="txt">Web Publisher<span>소셜코리아 - 2016.11 ~ 2017.03</span></p>
            </li>
            <li>
              <p className="txt">Web Publisher<span>이지미디어 - 2017.03 ~ 2021.05</span></p>
            </li>
          </ul>
        </div>
      </div>

      <div className="skill">
        <div className="inner">
          <h2 className="h2tit">SKILL</h2>
          <ul className="skill-list">
            <li>
              <div className="icon level90"></div>
              <p className="txt">HTML5</p>
            </li>
            <li>
              <div className="icon level90"></div>
              <p className="txt">CSS3</p>
            </li>
            <li>
              <div className="icon level80"></div>
              <p className="txt">SCSS</p>
            </li>
            <li>
              <div className="icon level80"></div>
              <p className="txt">Jquery</p>
            </li>
            <li>
              <div className="icon level60"></div>
              <p className="txt">Java Script</p>
            </li>
            <li>
              <div className="icon level60"></div>
              <p className="txt">React</p>
            </li>
            {/* <li>
              <div className="icon level70"></div>
              <p className="txt">Java</p>
            </li>
            <li>
              <div className="icon level60"></div>
              <p className="txt">Spring Boot</p>
            </li> */}
            <li>
              <div className="icon level70"></div>
              <p className="txt">Git</p>
            </li>
            <li>
              <div className="icon level80"></div>
              <p className="txt">Photoshop</p>
            </li>
          </ul>
        </div>
      </div> 

      <div className="work">
        <div className="inner">
          <h2 className="h2tit">PORTFOLIO</h2>
          <div className="work-div">
            <ul className="work-list">
              {
                workList.map((item, i)=>(
                  <li key={i}>
                    <Link to={{
                      pathname:"/detail/" + item.idx
                    }}>
                      <div className="img-div">{item.idx}
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
            <Link to="/work" className="more-btn">more</Link>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="inner">
          <h2 className="h2tit">CONTACT</h2>
          
          <div className="contact-div">
            <p className="name-img"></p>
            <ul className="my-info">
              <li>
                <p className="icon phone"></p>
                <p className="tit">PHONE</p>
                <p className="txt">+82 (0)10 8420 5997</p>
              </li>
              <li>
                <p className="icon email"></p>
                <p className="tit">E-MAIL</p>
                <p className="txt">gmrlb920@naver.com</p>
              </li>
              <li>
                <p className="icon git"></p>
                <p className="tit">Github</p>
                <p className="txt">
                  <a href="https://github.com/hk0920" target={"_blank"}>
                    https://github.com/hk0920
                  </a>
                </p>
              </li>
            </ul>
          </div>
          
          <p className="copy">Copyright 2022. Web Front-end developer portfolio-- created by H.G</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
