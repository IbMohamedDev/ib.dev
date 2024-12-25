import React, { useState } from 'react';
import './index.css';
import Project from './components/Project';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      label: <img src='imgs/laptop.gif' width={33}></img>,
      content: (
        <>
         
         <h1 >Welcome!</h1>
          <p>My name is Ibrahim Mohamed <em></em>
and I found a  passion for programming while working in tech support. 👨🏾‍💻</p>
       <p>Find me on:<a href='https://github.com/IbMohamedDev'><u> Github,</u>  </a>
      <a href='https://www.linkedin.com/in/ib13mohamed'><u>
      LinkedIn </u></a> and download my Resume</p>         


<h3>My tech stack:</h3>
<img width={40}  src='imgs/js.svg'></img>
<img width={50} height={40}  src='../imgs/react.svg'></img>
<img width={40}  src='imgs/nodejs.svg'></img>
<img width={40}  src='imgs/html.svg'></img>
<img width={40}  src='imgs/mongodb.svg'></img>
<img  width={35} src='./imgs/python.png'></img>
<img width={50} src='./imgs/aws.svg.png'></img>
<img width={40} src='./imgs/git.svg'></img>
<img width={50} src='./imgs/spark.png'></img>
<img width={50} src='./imgs/docker.svg'></img>
<img width={40}  src='imgs/css.svg'></img>






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
      title="Easy Moving 🚚" img="./imgs/github.png" 
      info="Fullstack Customer Relationship Managmenet (CRM) application."
      project_link="/"
      github="https://github.com/example"
      />
      <Project title="Habit Tracker ❌" project_info="/" img="./imgs/github.png" info="Habit tracker based on the seinfield method."/>
      <Project title="React calculator 🧮" project_info="/" img="./imgs/github.png" info="React component compromised of calculator UI and logic."/>
      <Project title="Project 4" project_info="/" img="./imgs/github.png" info="foidsfj dskfsodif sodfijsdof dosfijsdoif."/>
      <Project title="Project 5" project_info="/" img="./imgs/github.png" info="foidsfj dskfsodif sodfijsdof dosfijsdoif."/>

         
      
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