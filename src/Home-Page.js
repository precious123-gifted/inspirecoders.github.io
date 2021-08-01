import React,{useRef,useState,useEffect} from 'react';

import './home-page.css';
import './home-page-responsiveness.css'
import DisplayImage from './displayImage.png';
import WriteUpBackground1 from './forumbg1.png';
import WriteUpBackground2 from './forumbg2.png';
import WriteUpBackground3 from './forumbg3.png';
import WriteUpBackground4 from './forumbg4.png';
import BriefVector from './briefVector.png';
import Briefvector from './briefvectore.png';
import CANT from './cant.png';
import WebDesignVector from './websiteDesignVector.png';
import Line from './Line4.png';
import Star from './star.png';
import VideoIcon from './VideoIcon.png';
import progressBar from './progressBar.png';
import StudyOnline from './Studyonline.png';
import WebDesign from './Webdesign.png';
import WorkAtHome from './Workathome.png';
import ONE from './1.png';
import TWO from './2.png';
import THREE from './3.png';
import Path from './Path.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FB from './fb.png';
import Twitter from './twitter.png';
import LN from './LN.png';
import HeaderImage from './headerImage.png';
import { findDOMNode } from 'react-dom';
import  Menu from  './MenuPage.js';
gsap.registerPlugin(ScrollTrigger);





export  function Navigation() {

let Burger ="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAOUlEQVRIiWPMy+/+zzAAgIXhP8OHgbB4FIyCUUA1ACpAfg9EcIIKkFEwCkbB0AYDWIBAMH0BAwMDAK1NCi+Ie1JeAAAAAElFTkSuQmCC"


let Exit = "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAYAAABVsFofAAADC0lEQVR4nO3cT27iMBQG8I9wge66q9h1hzgAi5kDoPYGLTeZOQlwg4k4wMyCA1QsWTHs2PUIIyObpuOQ2PF7z3/Ub1UltCK/Ehz7WW+ERqbzxSuAJwB3AI4ANvvd9g8KzXS++AbgBcAEwDuAer/brs3VXnGm88UKwGsLw7L5C6VEfxBWLZez3u+2S/XDuAdG5fn+4fHv+XR4s85kmg4Yldn9w+PkfDrUo54XFvcJ8rneSn/HuGSl/3C28YBRear0l69rsgXyhFG5q/So5JPsgAbAqBwVzsY63J9sgAbCqGzG59PhqEYjNSpZp7uT/CgWAKMGn1+XoVxdYGlAgTCXUXlsjpQERAGDJg4KAaKCwf84yByIEgZtOMgUiBoGt3CQGRAHDLpwkAkQFwz6cJA4ECcMXHCQKBA3DFxxkBiQBAx8cJAIkBQMfHEQGUgSBkNwEAlIGgZDcSAMFAMGITgQAooFg1AcMAPFhAEFDpiAYsOACgfEQCnAgBIHRECpwKBZDqZMwAWuOyqvXWEpOLLgIAzIN2yVWNLbqpmAW8wnrCVqNhzwA7HX7llxwAcksqmBHQf0QGK7PURwQAckug1GDAcfQGqL2cw62R+14+qn5PsVxdHD+w/rhFtmt6YaXBHDIXrusaYanBHBIX4gFANix2F6UhYBYsVhnkKwA7HhCM2tWIEq6whBAmflvmHbgkeOE7geo3aOL60z/WEBIr2tKBaqUqqskuFQruClAkSCw7G0mQJQMA7nmm9soCAcicXwmECDcSSrBLGABuHEKJ/EAPLGiVlXkgbywkmh4CYJ5IyTUiVSCsgJJyUYEwmgXpwUYUy4gTpxUoYx4QS6iZMDjAkXUCtOTjAmHEAWTo4wJtRAn3ByhjGhBLrilABjQgVkelkUA2NCATTSbVJ+Wy/pTxa9LQL+8d8r3T/GN9k0/dDvc8ii/UulG+v4JLtuKAOBJpXuOOSabNvEDAB6Vzi1dbg92ffP8QSqx44bioppTeU4il02SpleFnUHUHE9u3qArj27vrq93er2BuAf3p5FkMTVcawAAAAASUVORK5CYII="


const[menu,setMenu]=useState('hide')
const[head,setHead]=useState('showhead')
const[menuIcon,setMenuIcon]=useState(Burger)


const ShowOrHide = ()=>{
  MenuAnimation()
 setTimeout(()=>{
   setMenu(menu==='hide'? 'show' : "hide")
 setHead(head==='showhead'? 'hidehead':'showhead')
 },0o170)
 
setMenuIcon(menuIcon===Burger? Exit : Burger)
 console.log(menu,head)


 
}

const MenuAnimation = ()=>{
  let NAV = NAv.current
  let HeadWriteUp = NAV.querySelector('#head')
  let Mmenu = NAV.querySelector('.mmenu')
  let headerIMG =NAV.querySelector('.headerImage')
  

  if(menu==='hide'){
    gsap.to(HeadWriteUp, {duration: 1, marginLeft:'-1900px'})
    gsap.to(headerIMG, {duration: 0.1,opacity:0})
    gsap.to(Mmenu, {duration: 1, marginRight:0})
  }
else {
  gsap.to(HeadWriteUp, {duration: 1, marginLeft:0})
  gsap.to(headerIMG, {duration: 0.1,opacity:1})
  gsap.to(Mmenu, {duration: 1, marginRight:'-200vh'})

}
  

    
        
    
  
  
}

const NAv=useRef(null)
 
//animations
useEffect(()=>{
const NAV = NAv.current 
const Menu = NAV.querySelector('.menu')
const Links = NAV.querySelector('.links')
const Bsign = NAV.querySelector('.buttons')
const Blog = NAV.querySelector('.buttonl')
const IC = NAV.querySelector('.IC')
const headerH1 =NAV.querySelector('.WYL')
const headerText =NAV.querySelector('.ICO')
const button =NAV.querySelector('.button')
const headerIMG =NAV.querySelector('.headerImage')


gsap.to(Menu, {duration: 2, marginTop:0})
gsap.to(Links, {duration: 2, marginTop:0,opacity:1})
gsap.to(IC, {duration: 2, marginTop:0})
gsap.to(Bsign, {duration: 2, transform:'none'})
gsap.to(Blog, {duration: 2, transform:'none',left:0})
gsap.to(headerH1, {duration: 2, marginLeft:0})
gsap.to(headerText, {duration: 2, marginRight:0})
gsap.to(headerIMG, {duration: 2.1, opacity:1,marginRight:0})
gsap.to(button, {duration: 2.1, opacity:1,marginTop:0})

},[])

//animations


  return (
    <div ref={NAv} className='nav'>
    <div  className='navigation'>
    <h2 className='IC'>inspire coders</h2>
<ul className='links'>
    <li className='li'>Home</li>
    <li className='li'>About</li>
    <li className='li'>How It Works</li>
    <li className='li'>Contact</li>
    <li className='buttons'>Signup</li>
    <li className='buttonl'>Login</li>
</ul>
  <div className='menu'   onClick={ShowOrHide}>
  <img width="20" height="20" src={menuIcon} alt='icon'/>
</div>


    </div>  

   <div className='mmenu'> <Menu menu={menu}  /> </div>

  
   <div className={head} id='head'> <HeaderWriteUpText /></div>
   </div>
  );

  
}


export  function HeaderWriteUpText() {


  return (
 
   <div className= 'head' ><div className='tNb'><div className='header'>
   <span className='WYL'>
     WOULD YOU LIKE TO LEARN TO CODE FOR FREE?
   </span>
    </div> 
    <div className='headerWriteup'>
        
   <span className='ICO'>
   Inspire coders offers the best on hands practice 
   in the world of programming. The training is for 
   complete beginners who want to learn the basics of software development.
   </span>
    </div>
    <div className='button'>
   <span>
     JOIN US NOW
   </span>
    </div></div> <div className='headerImage'><img className='immg' src={HeaderImage} alt='img'/></div></div>
  );
}



export  function CareerBrief() {
  return (
    <div className='career-brief'>
 
   <h4>
     LAUNCH YOUR CAREER INTO THE ORBIT
   </h4> 
   <p >
   Get started with a career in front end web development by learning the basics of the
    HTML5, CSS3 and JavaSrcipt. Master the languages of the web. This socialMedia   will prepare you to build
     basic websites and then build interactive web apps.
   </p>

   <div className='vv'>
   <img className='brief-vector' src={BriefVector} alt="vector"  />
   <img className='briefvector' src={Briefvector} alt="vector"  />
</div>
    
    </div>
  );
}


export  function Forum() {


//forum div animation
const forumDiv = useRef(null)

useEffect(()=>{
  let forum = forumDiv.current
  let forumH = forum.querySelector('.forumH')
  let webdesign = forum.querySelectorAll('.website-design')

 
  

  webdesign.forEach( layer => {
    var tl = gsap.timeline({
       scrollTrigger:{
        
           trigger: layer,
          start: 'center bottom',
          
          
    }})
      tl.to(layer, {
        duration: 1.3, marginLeft:0
      })

      
   
  })


  gsap.to(forumH, {
    scrollTrigger:{
      trigger: forumH, 
     start: 'bottom bottom' // start the animation when ".box" enters the viewport (once)
    }, duration:1,marginLeft:0
  });


})




//forum div animation




  return (
    <div className='forum-div'  ref={forumDiv}>
      <div className='forumH'>
   <h3>
     Forums
   </h3>

   <span className='text-writeup'>Forums are where online classes happen, courses can only be accessed after joining a forum.</span>
</div>


<div className='forumdiv'>
<div className='website-design' >
<img className='background' src={WriteUpBackground1} alt="Background" />
<div className='content'>
<div className='svgNwriteup'>
<div className='svg'>
<img className='webdesign-vector' src={WebDesignVector} alt="vector"  />
</div><div className='writeup'><span className='websiteText'>Website Design</span>
<p>Learn everything you need to know about website  design from UI
   designs in sketch ad figma to actual code using HTML5, CSS3 and JAVASCRIPT.</p>

   <div className='coursesSmallDiv'>
     <div>Figma</div><div>Sketch</div><div>HTML</div><div>CSS</div><div>Javascript</div>
   </div>
   </div>
</div>

<div className="instructorNameAndRating">
<img className='line' src={Line} alt="line"  />
  <div className='profile-rating'>
  <img src={DisplayImage} alt="DisplayImage" className="DisplayImage"/>
  <div className='nameAndStar'>
   <div className='name'><span className='name'>Patricia Oyelami</span></div> 
    
   <div className='starRating'><img src={Star} alt="star" className="star"/><span className='number'>4.3</span></div> 
  </div>
   <div className='progressBar'>
   <div className='videoIcon'><img src={VideoIcon} alt="videoIcon" className="videoicon"/>
    <span className='videoText'>Forum begins in 2days</span></div> 
   <div className='progression'>
     <span className='slots'>3 slots left</span>
     <img className='progressBar' src={progressBar} alt="progressBar"  />
   </div>
   </div>
  </div>
</div></div>

</div>

<div className='website-design'>
<img className='background' src={WriteUpBackground2} alt="Background" />
<div className='content'>
<div className='svgNwriteup'>
<div className='svg'>
<img className='webdesign-vector' src={WebDesignVector} alt="vector"  />
</div><div className='writeup'><span className='websiteText'>Website Design</span>
<p>Learn everything you need to know about website  design from UI
   designs in sketch ad figma to actual code using HTML5, CSS3 and JAVASCRIPT.</p>

   <div className='coursesSmallDiv'>
     <div>Figma</div><div>Sketch</div><div>HTML</div><div>CSS</div><div>Javascript</div>
   </div>
   </div>
</div>

<div className="instructorNameAndRating">
<img className='line' src={Line} alt="line"  />
  <div className='profile-rating'>
  <img src={DisplayImage} alt="DisplayImage" className="DisplayImage"/>
  <div className='nameAndStar'>
   <div className='name'><span className='name'>Patricia Oyelami</span></div> 
    
   <div className='starRating'><img src={Star} alt="star" className="star"/><span className='number'>4.3</span></div> 
  </div>
   <div className='progressBar'>
   <div className='videoIcon'><img src={VideoIcon} alt="videoIcon" className="videoicon"/>
    <span className='videoText'>Forum begins in 2days</span></div> 
   <div className='progression'>
     <span className='slots'>3 slots left</span>
     <img className='progressBar' src={progressBar} alt="progressBar"  />
   </div>
   </div>
  </div>
</div></div>
</div>

<div className='website-design'>
<img className='background' src={WriteUpBackground3} alt="Background" />
<div className='content'>
<div className='svgNwriteup'>
<div className='svg'>
<img className='webdesign-vector' src={WebDesignVector} alt="vector"  />
</div><div className='writeup'><span className='websiteText'>Website Design</span>
<p>Learn everything you need to know about website  design from UI
   designs in sketch ad figma to actual code using HTML5, CSS3 and JAVASCRIPT.</p>

   <div className='coursesSmallDiv'>
     <div>Figma</div><div>Sketch</div><div>HTML</div><div>CSS</div><div>Javascript</div>
   </div>
   </div>
</div>

<div className="instructorNameAndRating">
<img className='line' src={Line} alt="line"  />
  <div className='profile-rating'>
  <img src={DisplayImage} alt="DisplayImage" className="DisplayImage"/>
  <div className='nameAndStar'>
   <div className='name'><span className='name'>Patricia Oyelami</span></div> 
    
   <div className='starRating'><img src={Star} alt="star" className="star"/><span className='number'>4.3</span></div> 
  </div>
   <div className='progressBar'>
   <div className='videoIcon'><img src={VideoIcon} alt="videoIcon" className="videoicon"/>
    <span className='videoText'>Forum begins in 2days</span></div> 
   <div className='progression'>
     <span className='slots'>3 slots left</span>
     <img className='progressBar' src={progressBar} alt="progressBar"  />
   </div>
   </div>
  </div>
</div></div>
</div>

<div className='website-design'>
<img className='background' src={WriteUpBackground4} alt="Background" />
<div className='content'>
<div className='svgNwriteup'>
<div className='svg'>
<img className='webdesign-vector' src={WebDesignVector} alt="vector"  />
</div><div className='writeup'><span className='websiteText'>Website Design</span>
<p>Learn everything you need to know about website  design from UI
   designs in sketch ad figma to actual code using HTML5, CSS3 and JAVASCRIPT.</p>

   <div className='coursesSmallDiv'>
     <div>Figma</div><div>Sketch</div><div>HTML</div><div>CSS</div><div>Javascript</div>
   </div>
   </div>
</div>

<div className="instructorNameAndRating">
<img className='line' src={Line} alt="line"  />
  <div className='profile-rating'>
  <img src={DisplayImage} alt="DisplayImage" className="DisplayImage"/>
  <div className='nameAndStar'>
   <div className='name'><span className='name'>Patricia Oyelami</span></div> 
    
   <div className='starRating'><img src={Star} alt="star" className="star"/><span className='number'>4.3</span></div> 
  </div>
   <div className='progressBar'>
   <div className='videoIcon'><img src={VideoIcon} alt="videoIcon" className="videoicon"/>
    <span className='videoText'>Forum begins in 2days</span></div> 
   <div className='progression'>
     <span className='slots'>3 slots left</span>
     <img className='progressBar' src={progressBar} alt="progressBar"  />
   </div>
   </div>
  </div>
</div></div>
</div>
</div>

    </div>
  );
}

export  function HowItWorksDiv() {

const ref = useRef(null)

useEffect(()=>{
  let HWdiv = ref.current
let HHWtext = HWdiv.querySelector('.HHWtext')
let studyIMG = HWdiv.querySelector('.study')
let studyIMGDIV = HWdiv.querySelector('.studyonline')
let studyh4 = HWdiv.querySelector('.SFTCOYH') 
let studytext= HWdiv.querySelector('.SFTCOYHtext') 
let workAHdiv= HWdiv.querySelector('.workathome') 
let workAH= HWdiv.querySelector('.work')
let AWC= HWdiv.querySelector('.AWC')
let AWCtext= HWdiv.querySelector('.AWCtext')
let WEB= HWdiv.querySelector('.web')
let EOOOM= HWdiv.querySelector('.EOOOM')
let EOOOMtext= HWdiv.querySelector('.EOOOMtext')




gsap.to(HHWtext, {
  scrollTrigger:{
    trigger: studyIMG, 
   start: 'top bottom' // start the animation when ".box" enters the viewport (once)
  }, duration: 1.1, top:0,opacity:1
});

gsap.to(studyIMG, {
  scrollTrigger:{
    trigger: HHWtext, 
   start: 'bottom center' // start the animation when ".box" enters the viewport (once)
  }, duration: 1, width:'100%',opacity:1
});


gsap.to(studyh4, {
  scrollTrigger:{
    trigger: studyIMG, 
   start: 'top center' // start the animation when ".box" enters the viewport (once)
  }, duration: 1, top:0,opacity:1
});

gsap.to(studytext, {
  scrollTrigger:{
    trigger: HHWtext, 
   start: 'top top' // start the animation when ".box" enters the viewport (once)
  }, duration: 1, top:0,opacity:1,lineHeight:'160%'
});

gsap.to(workAH, {
  scrollTrigger:{
    trigger: studyIMG, 
   start: 'bottom top' // start the animation when ".box" enters the viewport (once)
  }, duration: 1, width:'150%',opacity:1
});


gsap.to(AWC, {
  scrollTrigger:{
    trigger: studytext, 
   start: 'top top' // start the animation when ".box" enters the viewport (once)
  }, duration: 1,transform : "rotate(0deg)",
  top: 0,
  left: 0,
  opacity: 1,
});

gsap.to(AWCtext, {
  scrollTrigger:{
    trigger: workAH, 
   start: 'bottom top' // start the animation when ".box" enters the viewport (once)
  }, duration: 1, top:0,opacity:1,lineHeight:'160%'
});

gsap.to(WEB, {
  scrollTrigger:{
    trigger: AWCtext, 
   start: 'bottom top' // start the animation when ".box" enters the viewport (once)
  }, duration: 1,width:'100%',opacity:1
});

gsap.to(EOOOM, {
  scrollTrigger:{
    trigger:EOOOMtext, 
   start: 'bottom top' // start the animation when ".box" enters the viewport (once)
  }, duration: 1,transform : "rotate(0deg)",
  top: 0,
  left: 0,
  opacity: 1,
});

gsap.to(EOOOMtext, {
  scrollTrigger:{
    trigger: EOOOMtext, 
   start: 'bottom top' // start the animation when ".box" enters the viewport (once)
  }, duration: 1,transform : "rotate(0deg)",
  top: 0,
  right: 0,
  opacity: 1,
});


})


  return (
    <div className='howitworks' ref={ref}>
 <h2 className='HHWtext'>HERES’S HOW IT WORKS</h2>


<div className='studyfromhome'>
 <div className='studyonline'>
 <img className='study' src={StudyOnline} alt="study"  />
 </div>
 <div className='o1'><img src={ONE} alt='1'/> </div>
 <div className='SFdiv'>
  <h4 className='SFTCOYH' >STUDY FROM THE COMFORT OF YOUR HOME</h4>
  <div className='SFTCOYHtext'>
    <p>Inspire Coder equips you with tons of resources ranging from books, blog post, videos,
       e-books which can all be downloaded  and can be accessed offline for 
       times of low internet connection.</p>
  </div></div></div>

  <div className='attemptweeklychalanges'>
  <div className='workathome'>
 <img className='work' src={WorkAtHome} alt="work"  />
 </div>
 <div className='t2'><img src={TWO} alt='2'/> </div>
 <div className='AWdiv'>
 <h4 className='AWC'>ATTEMPT WEEKLY  CHALLENGES</h4>

 <div className='AWCtext'>
    <p>You learng by writting code, practice what you have learnt so far and attemp 
      weekly challenges which would be given, solutions can be accessed 
      on the dashboard and the best solution would be displayed on the leader board</p>
  </div></div>
</div>

<div className='enjoymentorship'>
  <div className='webdesign'>
 <img className='web' src={WebDesign} alt="design"  />
 </div>
 <div className='t3'><img src={THREE} alt='3'/> </div>
 <div className='EOdiv'>
 <h4 className='EOOOM'>ENJOY ONE ON ONE MENTORSHIP</h4> 
 <div className='EOOOMtext'>
    <p>Meet with mentors on the platform and other team mates for peer review session, codelabs, meetups tcs</p>
  </div></div>
</div>



    </div>




  );
}

export  function Footer() {
const ref=useRef(null)

useEffect(()=>{
let footer = ref.current;
let GITWU = footer.querySelector('.GITWU')
let inputs = footer.querySelector('.inputs')
let sendMessageButton = footer.querySelector('.sendMessageButton')
let contactAndlinks = footer.querySelector('.contactAndlinks')

gsap.to(GITWU, {
  scrollTrigger:{
    trigger:GITWU , 
    // start the animation when ".box" enters the viewport (once)
  }, duration: 2,left:0,
 
  opacity: 1,
});


gsap.to(inputs, {
  scrollTrigger:{
    trigger: inputs, 
   // start the animation when ".box" enters the viewport (once)
  }, duration: 2,
  
  right: 0,
  opacity: 1,
});

gsap.to(sendMessageButton, {
  scrollTrigger:{
    trigger: sendMessageButton, 
   // start the animation when ".box" enters the viewport (once)
  }, duration: 2,
  
  left: 0,
  opacity: 1,
});

gsap.to(contactAndlinks, {
  scrollTrigger:{
    trigger:contactAndlinks , 
  // start the animation when ".box" enters the viewport (once)
  }, duration: 2,
  
  right: 0,
  opacity: 1,
});


})



  return (
    <div className='footer' ref={ref}>
 <div className='cantfindacourse'>
<h4 className='cantheader'>CAN’T FIND A COURSE</h4>
<span className='canttext'>Fill the form below  with the course you would like to take and why  you want the course added</span>


<div className='nameNemaildiv'>
<input type='text' placeholder='Full Name'/><input type='text' placeholder='Email Adress'/>

</div>

<div className='noteNbuttondiv'>
  <textarea className='textarea' placeholder='Course Name And Reason'/>  <div className='btt'><button>SUBMIT</button></div>
</div>


<div className='cantpng'>
<img src={CANT} alt='find'/>
</div>



</div>


<div className='rowdiv'>
<div className='emailNbuttondiv'>
   <h3 className='GITWU'>
   Get in touch with us
   </h3> 
   <div className='inputs'>
  <input type='text' placeholder='EMail Address'/>
  <input type='text' placeholder='Subject'/>
  <input type='text' placeholder='Message'/>
</div>

  <div  className='sendMessageButton'>SEND MESSAGE</div>  
</div>



  <div className='contactAndlinks'>
    <div className='contactNnum'>
<h2>Contact Phone Numbers</h2>

<p  ><span className='cservice'>Customer Services:</span>
<span className='numb'>02035143971<br/></span>
<span className='p'>
0-24 h every day. Customised 
service:  Local call. Nigerian time.
</span>
</p>
</div>


<div className='links'>
<p><img className='path  ' src={Path  } alt="path "  />    Links</p>
<p><img className='path  ' src={Path } alt="path "  />    Home</p>
<p><img className='path  ' src={Path  } alt="path  "  />    About</p>
<p><img className='path  ' src={Path  } alt="path "  />    How it works</p>
<p><img className='path  ' src={Path } alt="path  "  />    Apply</p>
<p><img className='path  ' src={Path } alt="path  "  />    Contacts</p>

</div>

</div>
</div>



<div className='copyNsocials'>
<h5 className='copyright'>© 2020 Company LTD. All rights reserved.  Terms & Conditions | Privacy Policy</h5>
<div className='END'>
<div className='socials'>
 <div  className='SC'><img className='fb' src={FB} alt="socialMedia  "  /></div>
 <div  className='SC'> <img className='twitter  ' src={Twitter} alt="socialMedia  "  /></div>
  
 <div  className='SC'> <img className='LN  ' src={LN} alt="socialMedia  "  /></div>
 </div></div>

  
 </div>
 
    </div>
  );
}