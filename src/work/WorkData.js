import sampyoImg from "../assets/image/sampyo.png";
import icoxImg from "../assets/image/icox.png";
import primeraImg from "../assets/image/primera.png";
import publishedImg from "../assets/image/published.png";
import smImg from "../assets/image/app.png";
import weatherImg from "../assets/image/app2.png";
import calImg from "../assets/image/app3.png";
import arijian from "../assets/image/arijian-img.png";
import kolonbenit from "../assets/image/kolon-img.png";
import panelpower from "../assets/image/panel-img2.png";
import autoever1 from "../assets/image/autoever-img1.png";
import autoever2 from "../assets/image/autoever-img2.png";
import oilbank from "../assets/image/oilbank-img1.png";
import hyundaicar from "../assets/image/hyundai-car-img.png";
import lotteworldJamsil from "../assets/image/lotteworld-img.png";
import lottechemical from "../assets/image/lottechemical-img.png";
import hear from "../assets/image/hear-img.png";
import chilsung from "../assets/image/chilsung-img.png";
import kt from "../assets/image/kt-img1.png";
import lotteeats from "../assets/image/eats-img.png";
import hmglaw from "../assets/image/hmg-law-img.png";
import acebed from "../assets/image/ace-img.png";
import hdis from "../assets/image/hdis-img.png";
import lotteworldBusan from "../assets/image/lotteworld-busan-img.png";
import lottedfs from "../assets/image/lottedfs-img.png";
import run from "../assets/image/run-img.png";
import banimarket from "../assets/image/banimarket-img.png";
import artmoa from "../assets/image/artmoa-img.png";
import portfolio from "../assets/image/portfolio-img.png";
import pdf1 from "../assets/pdf/app1.pdf";
import pdf2 from "../assets/pdf/app2.pdf";
import pdf3 from "../assets/pdf/app3.pdf";
import runPdf from  "../assets/pdf/런마라톤.pdf";
import baniPdf from "../assets/pdf/바니마켓.pdf";

const workData = [
	{
		idx:28,
		category:"front",
		title:"포트폴리오",
		lang:"React, JSX, Css3, Media query, Jquery, JavaScript, Git",
		thumbnail:portfolio,
		url:"https://hk0920.github.io/portfolio/",
		git:"https://github.com/hk0920/portfolio",
		date:"2021.02",
		task:"- 사용자 페이지(React.js) 개발(100%)<br/>- media query 이용한 반응형 스타일 작업(100%)<br/> - 스크롤, 터치 등 다양한 모션 작업(100%)"
	},
	{
		idx:27,
		category:"front",
		title:"artMoa",
		lang:"React, JSX, Scss, Media query, Jquery, JavaScript, Git",
		thumbnail:artmoa,
		url:"https://www.artmoa.ga",
		git:"https://github.com/hk0920/artMoa_client",
		date:"2021.12 - ing",
		task:"- 사용자 페이지(React.js) 개발(100%)<br/>- media query 이용한 반응형 스타일 작업(100%)<br/> - Canvas Animation 화면 작업(70%)<br/>- axios 이용한 back-end와 데이터 통신(80%)<br/>- 스크롤, 터치 등 다양한 모션 작업(100%)"
	},
	{
		idx:26,
		category:"front back",
		title:"바니마켓",
		lang:"Html5, Css3, Media query, Jquery, Java, JavaScript, Bootstrap, MySQL, Aws RDS, Git",
		thumbnail:banimarket,
		url:"# " + baniPdf,
		git:"https://github.com/hk0920/BunnyMarket",
		date:"2021.11 - 2021.12",
		task:"- Html5, Css, Jquery 이용한 화면 구현(70%)<br/>- Api 이용한 화면 구현_kakao주소, naver지도(100%)<br/>- 정규 표현식 이용 - 비밀번호 유효성 체크(100%)<br/>- Spring Security 이용 - 회원관리, 로그인 및 비밀번호 암호화(100%)<br/>- JavaMailSender 이용 - 비밀번호가 암호화되어 DB에 저장되기 때문에 Random을 통한 임시 비밀번호를 메일 전송(100%)"
	},
	{
		idx:25,
		category:"front back",
		title:"Run 마라톤",
		lang:"Html5, Css3, Media query, Jquery, Java, Bootstrap, MySQL, Aws RDS, Git",
		thumbnail:run,
		url:"# " + runPdf,
		git:"https://github.com/hk0920/SemiProject5",
		date:"2021.09 - 2021.10",
		task:"- Html5, Css, Jquery 이용한 화면 구현(65%)<br/>- Api 이용한 화면 구현_일정(google calendar), 위치(kakao 지도)(100%)<br/>- 데이터 입출력 화면 구현 및 데이터 베이스 관리 및 구축(65%)"
	},
	{
		idx:24,
		category:"front",
		title:"롯데면세점 ",
		lang:"Html5 , Css3, Media query, Jquery, GSAP 라이브러리(Scroll Trigger), Swiper 라이브러리",
		thumbnail:lottedfs,
		url:"https://kr.lottedfs.com/main/index.do",
		git:"",
		date:"2021.05 - 2021.05",
		task:"- 퍼블리싱 코딩 가이드 작업(40%)<br/>- 사용자 페이지- 퍼블리싱 작업(30%)<br/>- media query를 이용한 디바이스 해상도 별 최적화(50%)<br/>- 스크롤, 터치 등 다양한 모션 작업(50%)"
	},
	{
		idx:23,
		category:"front",
		title:"롯데월드 테마파크(부산)",
		lang:"Html5 , Scss, Media query, Jquery, GSAP 라이브러리(Scroll Trigger), Swiper 라이브러리",
		thumbnail:lotteworldBusan,
		url:"https://adventurebusan.lotteworld.com",
		git:"",
		date:"2020.12 - 2021.04",
		task:"- 퍼블리싱 코딩 가이드 작업(100%)<br/>- 사용자 페이지- 퍼블리싱 작업(75%)<br/>- media query를 이용한 디바이스 해상도 별 최적화(80%)<br/>- 사용자의 인터랙티브를 중요시 한 프로젝트라 스크롤, 터치 등 다양한 모션 작업(100%)<br/>- 개발자와 사용자 인터랙티브 html 구조와 비동기 후 화면 틀어짐 해결 이슈 (100%)"
	},
	{
		idx:22,
		category:"front",
		title:"HDIS",
		lang:"Html5 , Media query, Css3, Jquery, Bootstrap",
		thumbnail:hdis,
		url:"# ",
		git:"",
		date:"2020.10 - 2021.03",
		task:"-메인 , 로그인 페이지, 대쉬보드, Table 가이드 퍼블리싱 작업(100%)<br/>-부트스트랩 작업(개발) 후 레이아웃 및 스타일 수정(100%)<br/>-개발자와 사용자 인터랙티브 html 구조와 비동기 후 화면 틀어짐 해결 이슈 (100%)"
	},
	{
		idx:21,
		category:"front",
		title:"에이스 침대",
		lang:"Html5 , Scss, Media query, Jquery, GSAP 라이브러리(Scroll Trigger), Swiper 라이브러리",
		thumbnail:acebed,
		url:"https://www.acebed.com/main/index.do",
		git:"",
		date:"2020.08 - 2021.01",
		task:"- 프로젝트 수주 전 제안시안 퍼블리싱 작업(100%)<br/>- 사용자의 인터랙티브를 중요시 한 프로젝트라 스크롤, 터치 등 다양한 모션 작업(50%)<br/>- 개발자와 사용자 인터랙티브 html 구조와 비동기 후 화면 틀어짐 해결 이슈 (70%)"
	},
	{
		idx:20,
		category:"front",
		title:"HMG 법무지원시스템",
		lang:"Html5 , Scss, Media query, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:hmglaw,
		url:"# ",
		git:"",
		date:"2020.02 - 2020.05",
		task:"- 퍼블리싱 가이드(100%)<br/>- 개발에서 Css가 아닌 Scss 를 사용 (Scss코드를 Vscode 안의 Sass확장프로그램을 이용하여 컴파일링)<br/> => 코드의 재사용성, 가독성을 올려 유지보수에 용이해졌다는 긍정적인 평을 받음 <br/>- 개발자와 사용자 인터랙티브 html 구조와 비동기 후 화면 틀어짐 해결 이슈 (100%)<br/>- 오픈 후 하자보수 기간동안 유지보수 (100%)"
	},
	{
		idx:19,
		category:"front",
		title:"롯데 EATS",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:lotteeats,
		url:"https://www.lotteeatz.com/main/main",
		git:"",
		date:"2019.05 - 2020.01",
		task:"- media query를 이용한 디바이스 해상도 별 최적화(60%)<br/>- 사용자의 인터랙티브를 중요시 한 프로젝트라 스크롤, 터치 등 다양한 모션 작업(60%)<br/>- 타 개발 업체와 협업 커뮤니케이션, 이슈 해결 (60%)<br/>- 오픈 후 하자보수 기간동안 유지보수 (100%)<br/>- 유지보수 퍼블리싱 코딩 가이드 문서 제작 (100%)"
	},
	{
		idx:18,
		category:"front",
		title:"KT 5G 뉴스레터",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:kt,
		url:"# ",
		git:"",
		date:"2019.05 - 2019.06",
		task:"- 관리자가 사용자에게 보내는 이벤트성 뉴스레터 웹 퍼블리싱 전담(100%)<br/>- 사용자의 인터랙티브를 중요시 한 프로젝트라 스크롤, 터치 등 다양한 모션 작업(100%)<br/>- media query 이용한 디바이스 해상도 별 최적화(100%)"
	},
	{
		idx:17,
		category:"front",
		title:"롯데 칠성",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:chilsung,
		url:"https://company.lottechilsung.co.kr/kor/main/index.do",
		git:"",
		date:"2018.10 - 2019.01",
		task:"- 프로젝트 수주 전 제안시안 퍼블리싱 작업(100%)<br/>- 사용자 페이지-컨텐츠 퍼블리싱 작업(40%)<br/>- 관리자 메일폼 퍼블리싱(100%)<br/>- 사용자의 인터랙티브를 중요시 한 프로젝트라 스크롤 모션 작업(50%)<br/>- media query 이용한 디바이스 해상도 별 최적화(100%)"
	},
	{
		idx:16,
		category:"front",
		title:"H-ear",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:hear,
		url:"https://hear.hyundai.com/main/index.do",
		git:"",
		date:"2018.11 - 2019.04",
		task:"- 프로젝트 퍼블리싱 PL<br/>- 퍼블리싱 가이드(100%)<br/>- 프로젝트 수주 전 제안시안 퍼블리싱 작업(100%)<br/>- 개발자와 사용자 인터랙티브 html 구조와 비동기 후 화면 틀어짐 해결 이슈 (100%)<br/>- 사용자 화면 퍼블리싱 작업 (60%)<br/>- 관리자 메일폼 퍼블리싱(80%)<br/>- media query 이용한 디바이스 해상도 별 최적화(80%)<br/>- 유지보수 퍼블리싱 코딩 가이드 문서 제작 (100%)"
	},
	{
		idx:15,
		category:"front",
		title:"롯데케미칼",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리, 반응형 이미지 맵 플러그인",
		thumbnail:lottechemical,
		url:"https://www.lottechem.com/kor/main/index.do",
		git:"",
		date:"2018.08 - 2019.01",
		task:"- 디자이너와 모션에 대한 의견 협의 점을 찾기 위해 많은 커뮤니케이션(60%)<br/>- 사용자 화면 퍼블리싱 작업 (80%)<br/>- 관리자 메일폼 퍼블리싱(100%)<br/>- media query 이용한 디바이스 해상도 별 최적화(80%)"
	},
	{
		idx:14,
		category:"front",
		title:"롯데월드 어드벤처(잠실)",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:lotteworldJamsil,
		url:"https://adventure.lotteworld.com/kor/main/index.do",
		date:"2018.02 - 2018.08",
		task:"- 디자이너와 모션에 대한 의견 협의 점을 찾기 위해 많은 커뮤니케이션(70%)<br/>- 사용자 화면 퍼블리싱 작업 (80%)<br/>- 관리자 메일폼 퍼블리싱(100%)<br/>- media query 이용한 디바이스 해상도 별 최적화(80%)"
	},
	{
		idx:13,
		category:"front",
		title:"HMC 상용 멤버십",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:hyundaicar,
		url:"https://www-trucknbus.hyundai.com/kr",
		git:"",
		date:"2017.12 - 2018.03",
		task:"- 퍼블리싱 가이드(100%)<br/>- 사용자 화면 퍼블리싱 작업(60%)<br/>- 관리자 메일폼 퍼블리싱(60%)<br/>- media query 이용한 디바이스 해상도 별 최적화(70%)<br/>- 유지보수 퍼블리싱 코딩 가이드 문서 제작 (100%)"
	},
	{
		idx:12,
		category:"front",
		title:"현대오일뱅크",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:oilbank,
		url:"https://www.oilbank.co.kr/main/index.do",
		git:"",
		date:"2017.09 - 2018.01",
		task:"- 사용자 화면 퍼블리싱 작업(50%)<br/>- 관리자 메일폼 퍼블리싱(100%)<br/>- 다국어 퍼블리싱 작업(60%)<br/>- IOS, Samsung, LG 모바일 기기마다 화면이 다르게 보이는 화면 최적화 작업(80%)"
	},
	{
		idx:11,
		category:"front",
		title:"현대오토에버 인력관리현황프로그램",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:autoever2,
		url:"# ",
		git:"",
		date:"2017.06 - 2017.07",
		task:"- 퍼블리싱 html, style 가이드(100%)<br/>- 기획, 디자이너, 개발자 다양한 직군과 협업을 통해 원활한 소통(80%)<br/>- 관리자 및 사용자 화면 퍼블리싱 작업 (100%)<br/>- 대쉬보드, Table 가이드 형식의 퍼블리싱 작업(100%)"
	},
	{
		idx:10,
		category:"front",
		title:"현대오토에버 사내사이트",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:autoever1,
		url:"# ",
		git:"",
		date:"2017.06 - 2017.07",
		task:"- 퍼블리싱 html, style 가이드(100%)<br/>- 기획, 디자이너, 개발자 다양한 직군과 협업을 통해 원활한 소통(80%)<br/>- 관리자 및 사용자 화면 퍼블리싱 작업 (100%)<br/>- 대쉬보드, Table 가이드 형식의 퍼블리싱 작업(100%)"
	},
	{
		idx:9,
		category:"front",
		title:"엠브레인패널파워",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:panelpower,
		url:"https://apps.apple.com/kr/app/%EC%97%A0%EB%B8%8C%EB%A0%88%EC%9D%B8-%ED%8C%A8%EB%84%90%ED%8C%8C%EC%9B%8C-%EA%B5%AD%EB%82%B41%EC%9C%84-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC/id1329447145",
		git:"",
		date:"2017.03 - 2017.05",
		task:"- 퍼블리싱 html, style 가이드(100%)<br/> - 태블릿, 모바일 기준의 퍼블리싱 작업(100%)<br/> - 오픈 후 하자보수 기간동안 유지보수 (100%)"
	},
	{
		idx:8,
		category:"front",
		title:"코오롱 베니트",
		lang:"Html5 , Css, Jquery, TweenMax 라이브러리, Swiper 라이브러리",
		thumbnail:kolonbenit,
		url:"https://www.kolonbenit.com/main/index.do",
		git:"",
		date:"2017.03 - 2017.05",
		task:"- 사용자 페이지(컨텐츠) html, css, jquery 반응형 웹 작업 (40%)<br/>- 오픈 후 하자보수 기간동안 유지보수 (100%)"
	},
	{
		idx:7,
		category:"front",
		title:"arijian",
		lang:"Html5, Bootstrap, Media Query, Css3, Jquery",
		thumbnail:arijian,
		url:"http://arijian.com",
		git:"",
		date:"2016.12 - 2017.03",
		task:"- 템플릿을 사용하여 웹 기획(100%)<br/> - 웹 컨텐츠 페이지 디자인(100%)<br/> - 사용자 페이지 퍼블리싱 작업 (100%)"
	},
	{
		idx:6,
		category:"design",
		title:"계산기 어플",
		lang:"PhotoShop, Illustrator",
		thumbnail:calImg,
		url:pdf3,
		git:"https://github.com/hk0920/portfolio/blob/master/src/assets/pdf/app3.pdf",
		date:"2016.10 - 2016.11",
		task:"- 계산기 어플 리뉴얼 디자인(100%)"
	},
	{
		idx:5,
		category:"design",
		title:"날씨 어플",
		lang:"PhotoShop, Illustrator",
		thumbnail:weatherImg,
		url:pdf2,
		git:"https://github.com/hk0920/portfolio/blob/master/src/assets/pdf/app2.pdf",
		date:"2016.10 - 2016.11",
		task:"- 날씨 어플 리뉴얼 디자인(100%)"
	},
	{
		idx:4,
		category:"design",
		title:"Simple&Modern",
		lang:"PhotoShop, Illustrator",
		thumbnail:smImg,
		url:pdf1,
		git:"https://github.com/hk0920/portfolio/blob/master/src/assets/pdf/app1.pdf",
		date:"2016.10 - 2016.11",
		task:"- 쇼핑몰 앱 기획(60%)<br/>- 쇼핑몰 앱 디자인(100%)"
	},
	{
		idx:3,
		category:"front",
		title:"출판사",
		lang:"Html5, Media Query, Css3, Jquery",
		thumbnail:publishedImg,
		url:"https://hk0920.github.io/published/",
		git:"https://github.com/hk0920/published",
		date:"2016.10 - 2016.11",
		task:"- 디자인 리뉴얼(100%)<br/>- html5 시멘틱 태그 이용한 웹 화면 뼈대 및 레이아웃 구현(100%)<br/>- css3를 이용한 화면 디자인 구현(100%)"
	},
	{
		idx:2,
		category:"front",
		title:"프리메라",
		lang:"Html5, Media Query, Css3, Jquery",
		thumbnail:primeraImg,
		url:"https://hk0920.github.io/Primera/",
		git:"https://github.com/hk0920/Primera",
		date:"2016.10 - 2016.11",
		task:"- 기존 웹 사이트를 다른 디자인으로 리뉴얼(100%)<br/>- html5 시멘틱 태그 이용한 웹 화면 뼈대 및 레이아웃 구현(100%)<br/>- css3를 이용한 화면 디자인 구현(100%)"
	},
	{
		idx:1,
		category:"front",
		title:"Icox",
		lang:"Html5, Media Query, Css3, Jquery",
		thumbnail:icoxImg,
		url:"https://hk0920.github.io/Icox/",
		git:"https://github.com/hk0920/Icox",
		date:"2016.11",
		task:"- html5 시멘틱 태그 이용한 웹 화면 뼈대 및 레이아웃 구현(100%)<br/>- css3를 이용한 화면 디자인 구현(100%)<br/>- media query 이용한 디바이스 해상도 별 반응형 스타일 - 웹 접근성 준수, 크로스 브라우징 검사 완료(100%)"
	},
	{
		idx:0,
		category:"front",
		title:"삼표",
		lang:"Html5, Css3, Jquery",
		thumbnail:sampyoImg,
		url:"https://hk0920.github.io/Sampyo/",
		git:"https://github.com/hk0920/Sampyo",
		date:"2016.09",
		task:"- html5 시멘틱 태그 이용한 웹 화면 뼈대 및 레이아웃 구현(100%)<br/> - css3를 이용한 화면 디자인 구현(100%)<br/> - 웹 접근성 준수, 크로스 브라우징 검사 완료(100%)"
	}
]

export default workData;