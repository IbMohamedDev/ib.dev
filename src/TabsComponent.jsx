import React, { useState } from 'react';
import './index.css';
import Project from './components/Project';
import Tippy from '@tippyjs/react';
import JS from '../imgs/js.svg'
import ReactJS from '../imgs/react.png'
import Node from '../imgs/nodejs.svg'
import MongoDB from '../imgs/mongodb.svg'
import HTML5 from '../imgs/html.svg'
import PY from '../imgs/python.png'
import AWS from '../imgs/aws.png'
import DOCKER from '../imgs/docker.svg'
import SPARK from '../imgs/spark.png'
import GIT from '../imgs/git.svg'
import COMPUTERLOGO from '../imgs/laptop.gif'
import GITHUB from '../imgs/github.png'



const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      label: <img src={COMPUTERLOGO} width={33}></img>,
      content: (
        <>
         
         <h1 >Welcome!</h1>
          <p>My name is Ibrahim Mohamed <em></em>
and I found a  passion for programming while working in tech support. 👨🏾‍💻</p>
       <p>Find me on:<a href='https://github.com/IbMohamedDev'><u> Github,</u>  </a>
      <a href='https://www.linkedin.com/in/ib13mohamed'><u>
      LinkedIn </u></a> and download my Resume</p>         


<h3>My tech stack:</h3>
<img src={JS} alt="JavaScript" width={40}/>
<img src={ReactJS} alt="React"width={40} />
<img src={Node} alt="Node.js"width={40} />
<img src={HTML5} alt="HTML5" width={40}/>
<img src={MongoDB} alt="MongoDB"width={40} />
<img src={PY} alt="Python"width={40} />
<img src={AWS} alt="AWS"width={40} />
<img src={GIT} alt="Git" width={40} />
<img src={SPARK} alt="Spark" width={40} />
<img src={DOCKER} alt="Docker" width={40} />

          
            




 </>
      )
    },
    {
      label: "Projects",
      content: (
        <>
        <h1>Selected Projects</h1>
        <div className='container'>

      <Project 
      title="Easy Moving 🚚" img={GITHUB}
      info="Fullstack Customer Relationship Managmenet (CRM) application."
      project_link="/"
      github="https://github.com/example"
      />
      <Project title="Habit Tracker ❌" project_info="/"  img={GITHUB} info="Habit tracker based on the seinfield method."/>
      <Project title="React calculator 🧮" project_info="/"  img={GITHUB} info="React component compromised of calculator UI and logic."/>
      <Project title="Project 4" project_info="/"  img={GITHUB} info="foidsfj dskfsodif sodfijsdof dosfijsdoif."/>
      <Project title="Project 5" project_info="/"  img={GITHUB} info="foidsfj dskfsodif sodfijsdof dosfijsdoif."/>

         
      
        </div>
       </>
      )
    }
  
  ];

  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        <div>
         
          <div className="tabs-nav">
            {tabData.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
         
          <div className="tab-content">
            {tabData[activeTab].content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;