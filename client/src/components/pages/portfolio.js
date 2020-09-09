import React from "react";
// import ReactDOM from 'react-dom'
import portfolioBackground from '../images/React_Portfolio_BG_02.jpg'
import Project from "../project";


const projects = [{ 
    title: "Project1",
    description: "BasicDescription1",
    src: "link1",
    href: "url1",
    img: "img1"
  },
  {
    title: "Project2",
    description: "BasicDescription2",
    src: "link2",
    href: "url2",
    img: "img2"
  },
  {
    title: "Project3",
    description: "BasicDescription3",
    src: "link3",
    href: "url3",
    img: "img3"

  },
  {
    title: "Project4",
    description: "BasicDescription4",
    src: "link4",
    href: "url4",
    img: "img4"
  },
  {
    title: "Project5",
    description: "BasicDescription5",
    src: "link5",
    href: "url5",
    img: "img5"

  },
  {
    title: "Project6",
    description: "BasicDescription6",
    src: "link6",
    href: "url6",
    img: "img6"
  },
  ]



class Portfolio extends React.Component{
    render(){
        return(
        <div>
        <h1>Portfolio </h1>
        {projects.map(project => {
          console.log(project)
        return (<Project title={project.title} description={project.description} src={project.link}/>)
        })} 
        <div  styles={{ backgroundImage:`url(${portfolioBackground})` }}>
        </div>
        </div>
        )
    }


}

export default Portfolio;
