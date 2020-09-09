import React from "react";
// import ReactDOM from 'react-dom'
// import portfolioBackground from '../images/React_Portfolio_BG_02.jpg'
import Project from "../project";
import backgroundImage from '../images/Backgrounds/React_Portfolio_BG_02.jpg'

const projects = [{ 
    title: "Work Day Scheduler",
    description: "Scheduling Application to help the user keep add and delete tasks for the work day",
    src: "link1",
    href: "https://github.com/DiegoResendez/Work_Day_Scheduler",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Password Generator",
    description: "Secure Password Generator Application that will provide the user with a secure password using the number and type of characters requested by the user",
    src: "link2",
    href: "https://diegoresendez.github.io/Password_Generator/",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Weather Dashboad",
    description: "Weather Report Application with current temperature, humidity, wind speed and UV index ",
    src: "link3",
    href: "https://github.com/DiegoResendez/Weather_Dashboard",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Camping Checklist",
    description: "Checklist Application for a user to create a list of camping necessities.",
    src: "link4",
    href: "https://github.com/DiegoResendez/Bootcamp_Project_2",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Trivia Game",
    description: "Fun trivia application to challenge your StarWars knowledge",
    src: "link5",
    href: "https://diegoresendez.github.io/Code_Quiz/",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "MacGuyver Drinking App",
    description: "Drink list application for those who are looking to make a drink from their own household items.",
    src: "link6",
    href: "https://diegoresendez.github.io/MacGuyver_Drinking_App/",
    img: "https://via.placeholder.com/150"
  },
  ]



class Portfolio extends React.Component{
    render(){
        return(
        <div className="PortfolioCards">
        <h1>Portfolio </h1>
        <div className="projectCards">
        {projects.map(project => {
          console.log(project)
        return (<Project  title={project.title} description={project.description} 
          src={project.link} href={project.href} img={project.img} />)
        })} 
        </div>
        <div  styles={{ backgroundImage:`url(${backgroundImage})` }}>
        </div>
        </div>
        )
    }


}

export default Portfolio;
