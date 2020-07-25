(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{39:function(e,t,a){e.exports=a(54)},44:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(18),r=a.n(c),o=(a(44),a(8)),s=a(60),l=a(61),m=a(15),d=function(e){var t=e.darkMode,a=e.set,c=Object(n.useState)(!1),r=Object(o.a)(c,2),d=r[0],u=r[1];return i.a.createElement(s.a,{className:"fixed-top shadow-sm",style:{background:t?"#181a1b":"#ffff"},expand:"md",variant:t?"dark":"light",expanded:d,onToggle:function(){return u(!d)}},i.a.createElement(s.a.Brand,{onClick:function(){a(!t)}},i.a.createElement("i",{className:t?"far fa-sun":"far fa-moon"})," ","Savez Siddiqui"),i.a.createElement(s.a.Toggle,null),i.a.createElement(s.a.Collapse,null,i.a.createElement(l.a,{className:"ml-auto"},i.a.createElement(m.b,{className:"nav-link",onClick:function(){return u(!1)},to:"/home"},i.a.createElement("i",{className:"fas fa-home"})," ","Home"),i.a.createElement(m.b,{className:"nav-link",onClick:function(){return u(!1)},to:"/experience"},i.a.createElement("i",{className:"far fa-star"})," ","Experience"),i.a.createElement(m.b,{className:"nav-link",onClick:function(){return u(!1)},to:"/projects"},i.a.createElement("i",{className:"fas fa-tasks"})," ","Projects"),i.a.createElement(m.b,{className:"nav-link",onClick:function(){return u(!1)},to:"/about"},i.a.createElement("i",{className:"far fa-address-card"})," ","About"))))},u=a(56),p=a(57),h=a(58),f=a(7),g=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},b=function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")},E=function(){var e=Object(f.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),t=Object(o.a)(e,2),a=t[0],n=t[1];return i.a.createElement(f.a.h1,{className:"display-1 font-weight-bolder",onMouseMove:function(e){var t=e.clientX,a=e.clientY;return n({xys:g(t,a)})},onMouseLeave:function(){return n({xys:[0,0,1]})},style:{transform:a.xys.interpolate(b)}},"Hi! I'm Savez.")},y=function(){return i.a.createElement(u.a,{style:{height:"100vh"}},i.a.createElement(p.a,{className:"justify-content-center text-center py-5"},i.a.createElement(h.a,{xs:12,md:8,lg:6},i.a.createElement(E,null),i.a.createElement("h3",{className:"display-4 font-weight-light"},"I am a JS Developer."),i.a.createElement("h3",{className:"lead font-weight-light pt-2"},"I work in the MERN stack and I am passionate about everything javascript.",i.a.createElement("br",null),"I even bought a shirt with a Node sticker on it."),i.a.createElement("div",{className:"social-icons pt-5"},i.a.createElement("a",{className:"social-icon",href:"https://www.linkedin.com/in/savez-siddiqui-53564617a/"},i.a.createElement("i",{className:"fab fa-linkedin-in"})),i.a.createElement("a",{className:"social-icon",href:"http://github.com/savezsiddiqui/"},i.a.createElement("i",{className:"fab fa-github"})),i.a.createElement("a",{className:"social-icon",href:"https://twitter.com/account/access"},i.a.createElement("i",{className:"fab fa-twitter"}))))))},k=["I'm a full stack engineer with experience in\n    Express JS, Node JS, MySQL, MongoDB, and React.","My dream is to one day have my own company and\n    become an entrepreneur (currently working on some ideas).","I'm constantly learning new things. currently those things\n    include gaining more experience with MongoDB, React, Express JS, and Node JS\n        and solving problems on leetcode.","When I'm not learning something new, chances are I'm watching some\n    YouTube videos."],v=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(f.c)(k.length,{fontSize:a?"2rem":"3rem"}),s=Object(n.useState)(!1),l=Object(o.a)(s,2),m=l[0],d=l[1],g=Object(f.b)({opacity:m?1:0,transform:"perspective(600px) rotateX(".concat(m?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),b=g.transform,E=g.opacity,y=r.map((function(e,t){return i.a.createElement(f.a.p,{style:e,key:t,onClick:function(){return c(!a)}},k[t])}));return i.a.createElement(u.a,null,i.a.createElement(p.a,{className:"text-center justify-content-center"},i.a.createElement(h.a,{xs:12,className:"p-0"},i.a.createElement("h1",{className:"display-1 font-weight-bolder py-4"},"About")),i.a.createElement(h.a,{className:"display-6",lg:8},i.a.createElement("div",{className:"text-center about-div",onClick:function(){return d(!m)}},i.a.createElement(f.a.div,{className:"c",style:{opacity:E.interpolate((function(e){return 1-e})),transform:b}},i.a.createElement("img",{src:"/portfolio/savez.jpg",alt:"#",className:"about_image mb-3"})),i.a.createElement(f.a.div,{className:"c",style:{opacity:E,transform:b.interpolate((function(e){return"".concat(e," rotateX(180deg)")}))}},i.a.createElement("img",{src:"/portfolio/stark.jpg",alt:"#",className:"about_image mb-3"}))),y)))},w=a(62),N=a(59),x=[{title:"DevConnector",created:"May 2020 \u2013 Jun 2020",description:"Built a full stack social network app with React,\n        Redux, Node, Express & MongoDB\n        Created an extensive backend API with Express\n        Used Stateless JWT authentication practices\n        Integrated React with an Express backend in an elegant way\n        React Hooks, Async/Await & modern practices\n        Used Redux for state management\n        Deployed to Heroku with a postbuild script",demo_link:"https://sheltered-garden-98635.herokuapp.com/",github_link:"https://github.com/savezsiddiqui/devConnector"},{title:"MindTree",created:"Apr 2020",description:"MindTree is a health app with several useful features at its core.\n        Featuring a Google's Teachable Machine based Real Time Yoga Pose Estimator to help people do yoga in real time, without the need of an instructor or an active internet connection.\n        A unique Cascade Classifier that can detect common eye defects, and a chatbot to help people remember things using context based reminders.",demo_link:"https://drive.google.com/file/d/1C284mWM5o8d8n3rvjzDOXxpQ_rqYZjn0/view?usp=sharing",github_link:""},{title:"Windtoll Ethereum Distributor",created:"Mar 2020",description:"A framework for generating power using small wind mills on highway side\n        that rotate automatically with the speed of the air flowing due to car speed.\n        Each car that contributes in power generation is paid in cryptocurrency and that\n        can be used to get fuel or pay tolls.",demo_link:"",github_link:"https://github.com/savezsiddiqui/wintoll-ui"},{title:"mathApi",created:"Nov 2019",description:"Handwritten mathematical expression evaluator. Developed an API, using flask, that receives a base64 encoded image, reads it and extracts the numbers and symbols out of it and then performs calculations and returns the output. Uses a deep learning model and MNIST dataset for training.",demo_link:"",github_link:"https://github.com/savezsiddiqui/mathApi"},{title:"College Time Table",created:"Aug 2019",description:"My college always had a very stupid excel sheet passed on to students from which you have to carefully highlight each of your electives and core subjects to get a time table that's readable. This project uses a unique regex to pull out your very own time table and displays it in a beautiful modern day format. The app is also a PWA so you can install it on your phone.",demo_link:"https://savezsiddiqui.github.io/time-table2/",github_link:"https://github.com/savezsiddiqui/time-table2/"},{title:"International Tic Tac Toe",created:"NA",description:"It allows you to play tic tac toe with friends",demo_link:"https://savezsiddiqui.github.io/international-tic-tac-toe/",github_link:"https://github.com/savezsiddiqui/international-tic-tac-toe/"},{title:"Digipodium",created:"NA",description:"A fully responsive website. Passes all lighthouse tests",demo_link:"https://savezsiddiqui.github.io/digipodium/",github_link:"https://github.com/savezsiddiqui/digipodium/"},{title:"Echo music player",created:"NA",description:"A fully functional android music player with a unique equalizer",demo_link:"https://drive.google.com/file/d/1oM8iDONPjEIN2-qwmrhRQBMTuKp0X4cM/view?usp=sharing",github_link:"https://github.com/savezsiddiqui/echo-music-player"}],j=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},M=function(e,t,a){return"perspective(600px) scale(".concat(a,")")},S=function(e){var t=e.project,a=Object(f.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),n=Object(o.a)(a,2),c=n[0],r=n[1],s=t.title,l=t.created,m=t.description,d=t.demo_link,u=t.github_link;return i.a.createElement(h.a,{xs:12,md:6,lg:4,className:"p-4"},i.a.createElement(f.a.div,{onMouseMove:function(e){var t=e.clientX,a=e.clientY;return r({xys:j(t,a)})},onMouseLeave:function(){return r({xys:[0,0,1]})},style:{transform:c.xys.interpolate(M)}},i.a.createElement(w.a.Body,{className:"shadow"},i.a.createElement(w.a.Title,null,s),i.a.createElement(w.a.Subtitle,{className:"mb-2 text-muted"},l),i.a.createElement(w.a.Text,null,m),i.a.createElement(N.a,{variant:"link",className:"p-0 m-0",href:d,disabled:""===d},i.a.createElement("i",{class:"fas fa-desktop"})," ","Demo Link"),i.a.createElement(N.a,{variant:"link",className:"pl-2 p-0 m-0",href:u,disabled:""===u},i.a.createElement("i",{class:"fab fa-github"})," ","Github Link"))))},T=function(){var e=x.map((function(e){return i.a.createElement(S,{project:e,key:e.title})}));return i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement(h.a,{xs:12,className:"text-center my-5"},i.a.createElement("h1",{className:"display-1 font-weight-bolder"},"Projects")),e))},A=[{title:"Mern Stack front to back",link:"https://udemy-certificate.s3.amazonaws.com/pdf/UC-3cdd77f0-25c7-473b-8f9d-d010639193fe.pdf"},{title:"Problem Solving Intermediate",link:"https://www.hackerrank.com/certificates/ed28cca521af"},{title:"Front-End Web Development with React",link:"https://www.coursera.org/account/accomplishments/verify/TY9DY8GZ3Z49"},{title:"Front-End Web UI Frameworks and Tools: Bootstrap 4",link:"https://www.coursera.org/account/accomplishments/verify/EVQWQRTTKYU7"},{title:"Android App Development",link:"https://trainings.internshala.com/certificate/preview/android/coe/dashbaord?score=true"}],I=[{company:"Fashn.me",image:"/portfolio/fashn.me.png",date:"Jan 2020 - Feb 2020",description:"Worked as a backend engineer to develop backend for\n        Patang App. Later worked on a bootstrap based Admin Dashboard.",link:"https://play.google.com/store/apps/details?id=com.patang"},{company:"Jiit",image:"/portfolio/jiit.png",date:"May 2020 - Jun 2020",description:"Interned within the college for 6 weeks and created\n        DevConnector. Worked both on the front-end and backend.",link:"https://sheltered-garden-98635.herokuapp.com/"}],_=function(e){var t=e.certi,a=t.title,n=t.link;return i.a.createElement("li",{className:"certi-item"},i.a.createElement("a",{href:n},a))},O=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},q=function(e,t,a){return"perspective(600px) scale(".concat(a,")")},z=function(e){var t=e.experience,a=t.company,n=t.image,c=t.date,r=t.description,s=t.link,l=Object(f.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),m=Object(o.a)(l,2),d=m[0],u=m[1];return i.a.createElement(f.a.div,{className:"col-xs-12 col-sm-6 col-md-4 shadow mx-4 my-2 rounded",onMouseMove:function(e){var t=e.clientX,a=e.clientY;return u({xys:O(t,a)})},onMouseLeave:function(){return u({xys:[0,0,1]})},style:{transform:d.xys.interpolate(q)}},i.a.createElement(w.a.Body,null,i.a.createElement("img",{className:"exp_image",src:n,alt:"company"}),i.a.createElement(w.a.Title,null,a),i.a.createElement(w.a.Subtitle,{className:"mb-2 text-muted"},c),i.a.createElement(w.a.Text,null,r),i.a.createElement(w.a.Link,{href:s},i.a.createElement("i",{class:"fas fa-link"}))))},C=function(){return i.a.createElement(u.a,null,i.a.createElement(p.a,{className:"text-center justify-content-center"},i.a.createElement(h.a,{xs:12},i.a.createElement("h1",{className:"display-3 font-weight-bolder my-4 py-4"},"Experience")),I.map((function(e,t){return i.a.createElement(z,{experience:e,key:t})})),i.a.createElement(h.a,{xs:12},i.a.createElement("h1",{className:"display-4 font-weight-bolder pt-4"},"Skills"),i.a.createElement("ul",{className:"list-inline"},i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-html5"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-css3-alt"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-js-square"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-react"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-node-js"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-sass"})),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("i",{className:"fab fa-npm"})))),i.a.createElement(h.a,{xs:12,md:8,lg:6},i.a.createElement("h1",{className:"display-4 font-weight-bolder"},"Certifications"),i.a.createElement("ul",{className:"list-inline"},A.map((function(e,t){return i.a.createElement(_,{certi:e,key:t})}))))))},D=a(5),W=(a(53),function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("darkMode"))||!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("darkMode",JSON.stringify(a))}),[a]),i.a.createElement("div",{className:a?"dark-mode":"light-mode"},i.a.createElement(m.a,null,i.a.createElement(d,{darkMode:a,set:c}),i.a.createElement(D.c,null,i.a.createElement(D.a,{exact:!0,path:"/home",component:y}),i.a.createElement(D.a,{exact:!0,path:"/about",component:v}),i.a.createElement(D.a,{exact:!0,path:"/projects",component:T}),i.a.createElement(D.a,{exact:!0,path:"/experience",component:C}),i.a.createElement(D.a,{exact:!0,path:"/",component:y}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.fa5f858c.chunk.js.map