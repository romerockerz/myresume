import React from "react";
import ReactToPrint from "react-to-print";
import {AiFillGithub,AiFillMail,SiGmail} from "react-icons/si";
import {FaMobileAlt,FaLinkedin,FaGraduationCap,FaUniversity,FaSlidersH,} from "react-icons/fa";
import {FiArrowRightCircle} from "react-icons/fi";
import {FcCellPhone,FcFeedback,FcPhoneAndroid} from "react-icons/fc";
import {GiGraduateCap} from "react-icons/gi";
import {AiOutlineRight,AiOutlineRightCircle} from "react-icons/ai";
import {BsCaretRight,BsFillBriefcaseFill} from "react-icons/bs";
import {RiArrowDropRightLine,RiArrowRightSLine} from "react-icons/ri";
import {BiRightArrow,BiSpreadsheet} from "react-icons/bi";
import {ImLocation,ImHome3} from "react-icons/im";
import {GrSatellite} from "react-icons/gr";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {PDFExport} from '@progress/kendo-react-pdf';

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="resume">
      <div className="vertical"></div>
      <div className="verticalright"></div>
      <h1 className="centrename">Rahul Khanna</h1> 
      <div>
    </div>
      <span className="centreaddress">
        <ImLocation/>
        <h4 className="virtualspace">|</h4>
        <h4>Patiala</h4>
        <h4 className="virtualspace">|||||</h4><h4>|</h4><h4 className="virtualspace">|||||</h4>
        <ImHome3 size={16}/>
        <h4 className="virtualspace">|</h4>
        <h4>India</h4>
      </span>  
      <span className= "centrecontact"> 
        <FcPhoneAndroid size={20}/>
        <h5 className="virtualspace">|</h5>      
        <h5 style={{fontWeight:"600"}}>(+91) 99-1420-3723</h5>
        <h5 className="virtualspace">|||||</h5><h5>|</h5><h5 className="virtualspace">|||||</h5>
        <FcFeedback size={20}/>
        <h5 className="virtualspace">|</h5>
        <h5 style={{fontWeight:"600"}}>romekhanna88@gmail.com</h5>
        <h5 className="virtualspace">|||||</h5><h5>|</h5><h5 className="virtualspace">|||||</h5>
        <FaLinkedin size={18}/>
        <h5 className="virtualspace">|</h5>
        <h5 style={{fontWeight:"600"}}>linkedIn link</h5>
      </span>
        <h4 className="centrequote">"My favorite Quote"</h4>
      <div>
        <h2 className="contentheading"><GrSatellite className="headiconpad" size={21} /> Research Interests</h2>
        <div className="horizontal"></div>
        <p className="peducation">I am a passionate and curious explorer of universe's hidden secrets, with my learned skills and knowledge I 
           thrive to decode most of these secrets. With my aim to gather more knowledge and develop experimental skills,
           I aim to one day become a astrophysists doing research on many of the wonders of the universe. 
        </p>
      </div>
      <div>
        <h2 className="contentheading"><FaUniversity className="headiconpad" size={21} /> Education</h2>
        <div className="horizontal"></div>
        <div className="nextcontent">  
         <span>
           <b className="etimeline">2016-2020</b>
           <a className="econtentfirst" href="https://www.iitrpr.ac.in/">Indian Institute of Technology (IIT), Ropar </a>
         </span>
      </div>
      <b className="econtentinner" > 
         Bachelor of Technology (B.Tech)
      </b>
      <div> 
        <AiOutlineRight className="iconpadding" size={11}/>
        <b className="econtentafter">Major : Mechanical Engineering</b>
      </div>
      <div>  
        <AiOutlineRight className="iconpadding" size={11}/> 
        <b className="econtentafter">Cumulative GPA : 8.06/10   Department Rank : 7</b>
      </div>
      <div>
       <div className="nextcontent">
         <span>
           <b className="etimeline">2015-2016</b>
           <a className="econtentfirst" href="http://davpatiala.com/">D.A.V. Public School, Patiala </a>
         </span>
       </div>
       <b className="econtentinner">Intermediate Grade-XII</b>
       <div> 
        <AiOutlineRight className="iconpadding" size={11}/>
        <b className="econtentafter">Board: Central Board of Secondary Education (CBSE)</b>
      </div>
      <div>  
        <AiOutlineRight className="iconpadding" size={11}/> 
        <b className="econtentafter">Percentage secured: 90.8%</b>
      </div>
      </div> 
      <div>
        <h2 className="contentheading">< BsFillBriefcaseFill className="headiconpad" size={20} /> Work Experience</h2>
        <div className="horizontal"></div>
        <div name="first_job" className="nextcontent">
          <span>
           <b className="etimeline">August 2020-</b>
           <b className="wecontent1first">Research and Development Engineer</b>
          </span>
       </div>
        <div name="first_job">       
          <span>
           <b className="etimeline">Present</b> 
           <a style={{fontStyle: "italic"}} href ="https://www.medidata.com/en/" className="wecontent1inner">Brand : Medidata Solutions</a>
          </span>
        </div>
        <a style={{color: "black"}} href="https://www.3ds.com/"className="econtentinner">Dassault Systèmes, Pune</a> 
        <div name="btp_project" className="nextcontent">
          <span>
           <b className="etimeline">August 2019-</b>
           <b className="wecontent2first">Bacherlor's Thesis, IIT Ropar, Punjab, India</b>
          </span>
        </div>
        <div name="btp_project">       
          <span>
           <b className="etimeline">June 2020</b> 
           <a className="wecontent2inner" style={{fontStyle: "italic"}} href="https://www.iitrpr.ac.in/smmee/devranjan">Guide: Dr. Devranjan Samanta</a>
          </span> 
        </div>
        <div>       
          <span>
           <b className="econtentinner">Title: Drop Impact Dynamics for different solutions in Leidenfrost regime</b>
          </span> 
        </div>
        <div name="taiwan_intern" className="nextcontent">
          <span>
           <b className="etimeline">June 2019-</b>
           <b className="wecontent3first">Research Internship, National Tsing Hua University, Hsinchu, Taiwan</b>
          </span>
        </div>
        <div name="taiwan_intern">       
          <span>
           <b className="etimeline">August 2019</b> 
           <a className="wecontent3inner" style={{fontStyle: "italic"}} href="http://eng-en.site.nthu.edu.tw/app/index.php?Action=mobileloadmod&Type=mobile_um_mstr&Nbr=2887">Guide: Prof. Chao-An Lin</a>
          </span> 
        </div>
        <div>       
          <span>
           <b className="econtentinner">Title: Linear Stability Analysis for 2D and 3D lid driven cavity flows with varied Aspect Ratios</b>
          </span> 
        </div>
        <div name="iisc_intern" className="nextcontent">
          <span>
           <b className="etimeline">December '18-</b>
           <b className="wecontent4first">Research and Development Internship, IISc, Bangalore, India</b>
          </span>
        </div>
        <div name="iisc_intern">       
          <span>
           <b className="etimeline">January 2019</b>  
           <a className="wecontent4inner" style={{fontStyle: "italic"}} href="https://scholar.google.co.in/citations?user=6N7HkckAAAAJ&hl=en">Guide: Dr. Kumari MC </a>
           <a style={{fontStyle: "italic"}} href="https://cpdm.iisc.ac.in/cpdm/facultyprofile.php?name=3">and Prof. B. Gurumoorthy</a> 
          </span> 
        </div>
        <div>       
          <span>
           <b className="econtentinner">Title: Properties of Generative forms of nature</b>
          </span> 
        </div>
        <div name="iisc_intern" className="nextcontent">
          <span>
           <b className="etimeline">June 2018-</b>
           <b className="wecontent5first">Design and Development Internship, IISc, Bangalore, India</b>
          </span>
        </div>
        <div name="iisc_intern">       
          <span>
           <b className="etimeline">August 2018</b> 
           <a className="wecontent5inner" style={{fontStyle: "italic"}} href="https://scholar.google.co.in/citations?user=6N7HkckAAAAJ&hl=en">Guide: Dr. Kumari MC </a>
           <a style={{fontStyle: "italic"}} href="https://cpdm.iisc.ac.in/cpdm/facultyprofile.php?name=3">and Prof. B. Gurumoorthy</a> 
          </span> 
        </div>
        <div>       
          <span>
           <b className="econtentinner">Title: Innovating and development of two new Science experiments</b>
          </span> 
        </div>    
      </div>

      <div>
        <h2 className="contentheading"><BiSpreadsheet className="headiconpad" size={21} />Projects</h2>
        <div className="horizontal"></div>
        <div name="btp_project" className="nextcontent">
          <span>
           <b className="etimeline">August 2019-</b>
           <b className="wecontent2first" style={{fontWeight: "600"}}>Drop Impact Dynamics for different solutions in Leidenfrost regime </b>
          </span>
        </div>
        <div name="btp_project">       
          <span>
           <b className="etimeline">June 2020</b> 
           <a className="wecontent2inner" style={{fontStyle: "italic"}} href="https://www.iitrpr.ac.in/smmee/devranjan">Guide: Dr. Devranjan Samanta</a>
          </span> 
          <p className="pcontent">Experimentally analysed and studied the drop dynamics of newtonian and non-newtonian 
           solutions near and in the Leidenfrost Regime. Using a high speed camera captured images of drop during the whole
           impact cycle for different impact velocities and impact height. Calculated the energy lost due to rapid film boiling
           and measured the Leidenfrost point for each liquid. Using MATLAB image processing tools developed autonomous code that 
           can calculate rebound characteristics and drop-diameter precisely.    
          </p>
        </div>
        <div name="taiwan_intern" className="nextcontent">
          <span>
           <b className="etimeline">June 2019-</b>
           <b className="wecontent3first" style={{fontWeight: "600"}}>Linear Stability Analysis for 2D and 3D lid driven cavity flows with varied Aspect Ratios</b>
          </span>
        </div>
        <div name="taiwan_intern">       
          <span>
           <b className="etimeline">August 2019</b> 
           <a className="wecontent3inner" style={{fontStyle: "italic"}} href="http://eng-en.site.nthu.edu.tw/app/index.php?Action=mobileloadmod&Type=mobile_um_mstr&Nbr=2887">Guide: Prof. Chao-An Lin</a>
          </span>
          <p className="pcontent">
          Developed python code to compute Base/Laminar flow for a 2-D cavity with any aspect ratio between
          1-4 on a uniform grid. On MATLAB discretized the whole flow spatial domain using DRP schemes and
          Chebyshev spectral method (non-uniform). Further used Arnoldi’s Algorithm to solve eigen-value problem
          generated from discretized and linearized Navier-Stokes Equation. Recorded the observations for most
          unstable eigen-modes extracted vorticity and streamline flow field that is causing the most instability.
          Achieved decisive results for 2-D cavity flows with aspect ratios 1,2,3 and 4. Further would extend the study to
          3-D cavity case.
          </p> 
        </div>
        <div name="iisc_intern" className="nextcontent">
          <span>
           <b className="etimeline">December '18-</b>
           <b className="wecontent4first" style={{fontWeight: "600"}}>Properties of Generative forms of nature</b>
          </span>
        </div>
        <div name="iisc_intern">       
          <span>
           <b className="etimeline">January 2019</b> 
           <a className="wecontent4inner" style={{fontStyle: "italic"}} href="https://scholar.google.co.in/citations?user=6N7HkckAAAAJ&hl=en">Guide: Dr. Kumari MC </a>
           <a style={{fontStyle: "italic"}} href="https://cpdm.iisc.ac.in/cpdm/facultyprofile.php?name=3">and Prof. B. Gurumoorthy</a>          
           </span>
          <p className="pcontent">
          Examined microstructure of three naturally found generative porous materials: black butterfly scales,
          Fontainebleau sandstone and trabecular bone tissue. Scrutinized the SEM images and outlined the details of
          recurring pattern in each sample. Through dimensional study of the images, estimated selected properties of
          the microstructure: average number of pores, area density of pores and mean grain size in the
          recurring pattern. Coded on GRASSHOPPER to replicate each material pattern and pattern’s randomness,
          achieved quite comparable results to their 2-D SEM image. Generated 2D pattern-models for each of the
          selected porous materials. Performed FEA using ANSYS (APDL module) and compared results obtained from
          compressive and tensile tests for all the variations. Achieved conclusive results for two material-models and
          currently working on the third. Tabulated the derived results characteristics and will be further cross-referred
          with experimental observations. Currently working on poisson’s ratio analysis and energy absorption abilities.
          </p> 
        </div>
        <div name="iisc_intern" className="nextcontent">
          <span>
           <b className="etimeline">June 2018-</b>
           <b className="wecontent5first" style={{fontWeight: "600"}}>Innovating and development of two new Science experiments</b>
          </span>
        </div>
        <div name="iisc_intern">       
          <span>
           <b className="etimeline">August 2018</b> 
           <a className="wecontent5inner" style={{fontStyle: "italic"}} href="https://scholar.google.co.in/citations?user=6N7HkckAAAAJ&hl=en">Guide: Dr. Kumari MC </a>
           <a style={{fontStyle: "italic"}} href="https://cpdm.iisc.ac.in/cpdm/facultyprofile.php?name=3">and Prof. B. Gurumoorthy</a>
          </span>
          <p className="pcontent">
          Selected as an Intern by "National Design Innovation Network, India (NDIN)" to work at IISc Bangalore.
          Designed on SolidWorks and Prototyped two entirely new science experiments for CBSE experiments module.
          First experiment explained the concept of finding the unknown mass by balancing it with known mass on a
          lever- scale balancing mechanism (like see-saw). Produced accurate results with recorded average error 0.4%
          after 100 observations. Second experiment predicted Centre of Mass for symmetric simple bodies (for less
          than 5 sides from cross-sectional view) using the toppling concept at inclined plane on varying angle as input.
          Introduced a stopping mechanism to the machine to instantly stop the plane just before toppling.
          </p> 
        </div>
      </div>
      <div>
        <h2 className="contentheading"><FaSlidersH className="headiconpad" size={20} /> Technical Skills</h2>
        <div className="horizontal"></div>
        <div className="nextcontent">
          <b className= "tscontent">
            Programming Languages 
          </b>
        </div>
        <div>
          <b className="tsskill"><AiOutlineRight className="headiconpad" size={11}/> Proficient :</b>
          <b className="tsfont">Python, Ruby, MATLAB, Java, C, C++, SQL</b>
        </div>
        <div>
          <b className="tsskill"><AiOutlineRight className="headiconpad" size={11}/> Novice :</b>
          <b className="tsfont">PHP, Javascript</b>
        </div>
        <div className="nextcontent">
          <b className= "tscontent">
            Software Tools and Operating Systems 
          </b>
        </div>
        <div>
          <b className="tsskill"><AiOutlineRight className="headiconpad" size={11}/> Computational Tools :</b>
          <b className="tsfont">Mathematica, Anaconda, Einstien Toolkit, ANSYS APDL, Grasshopper, SolidWorks</b>
        </div>
        <div>
          <b className="tsskill"><AiOutlineRight className="headiconpad" size={11}/> Others :</b>
          <b className="tsfont">HTML, CSS, BootStrap, ROR, React</b>
        </div>
        <div>
          <b className="tsskill"><AiOutlineRight className="headiconpad" size={11}/> Operating Systems :</b>
          <b className="tsfont">LINUX/Unix, Windows, CentOS, Mac</b>
        </div>   
      </div>
      <div>
        <h2 className="contentheading">Relevant Coursework</h2>
        <div className="horizontal"></div>
        <div className="nextcontent">
         <b className= "tscontent">
            Courses in P: 
          </b>
        </div>
        <p className="rccontent">
          Quantum Physics, Classical Mechanics, Thermal and Statistical Physics, Continuum Mechanics, 
          Physics Laboratory, Engineering Mechanics, Energy Science and Technology
        </p>
        <div >
         <b className= "tscontent">
            Courses in M: 
          </b>
        </div>
        <p className="rccontent">
          Errors and Numerics, Advance Calculus, Linear Algebra, Graph Theory, Ordinary Differential Equations
          Probability and Stochastic Processes, Maths Laboratory
        </p>
        <div >
         <b className= "tscontent">
            Courses other: 
          </b>
        </div>
        <p className="rccontent">
          Intro to computing, Fluids Mechanics, Control Engineering, Robot Manipulators
        </p>
      </div>
      <div>
        <h2 className="contentheading">Workshops and Trainings</h2>
        <div className="horizontal"></div>
        <div className="nextcontent"> 
          <a className="wtcontent" href="http://www.rri.res.in/SWAN/SWANRRI.html">SWAN Hands on Camp on Radio Astronomy 2018 (Garibidanur Observatory)</a>
        </div>    
      </div> 
      <div>  
        <h2 className="contentheading">Honors and Achievements</h2>
        <div className="horizontal"></div>
        <p className="aacontent">
        <FiArrowRightCircle className="headiconpad" size={13}/> Graduated from IIT Ropar with a department rank 7 and cumulative GPA 8.06.  (2020)
        </p>
        <p className="aacontent">
        <FiArrowRightCircle className="headiconpad" size={13}/> Secretary Head (Mentor) of Zenith-Astronomy and Astrophysics Club. (2018-2019)
        </p>
        <p className="aacontent">
        <FiArrowRightCircle className="headiconpad" size={13}/> Training and Placement Cell Representative of Mechanical Department. (2017-2018)
        </p>
        <p className="aacontent">
        <FiArrowRightCircle className="headiconpad" size={13}/> Participated in ISMP and mentored a group of 5 freshers’ students. (2017)
        </p>
        <p className="aacontent">
        <FiArrowRightCircle className="headiconpad" size={13}/> Group Leader of Project Prabhas of Enactus IIT Ropar. (2017)
        </p>
        <p className= "aacontent">
        <FiArrowRightCircle className="headiconpad" size={13}/> Achieved an All India Rank of 4912 in JEE-Advance 2016 among top 0.3% students. (2016)
        </p>
      </div> 
      <div>
        <h2 className="contentheading">Extracurricular Activities</h2>
        <div className="horizontal"></div>
        <p className="aacontent">
          Bhangra (Punjab Folk Dance) Lover. Stood 1st Position in an Intra-College Cultural group Dance event         
        </p>
        <p className="aacontent">
          Participated in IIT Ropar Run Quarter Marathon event to celebrate Gandhi Jayanti.
        </p>
        <p className="aacontent">
          Actively participated in field trips representing Enactus IIT Ropar 
        </p>
        <p className="aacontent">
          CSGO player, Cricket Fan, Love cycling. 
        </p>      
      </div> 
    </div>
    
  </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;