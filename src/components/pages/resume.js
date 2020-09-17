import React from "react";

class Resume extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-9 resumeText">
                <h3 className="Email" >diego.resendez@gmail.com</h3>
                <h3 className="Address">633 West Mercer Place Unit-B Seattle, WA 98119</h3>
                <h3 className="Phone">(425) 466-9803</h3>
                <h4>Summary of Relevant Qualiﬁcations</h4>
                <ol className="Qualifications">
                    <h5>
                    Proven ability to effectively train, lead and motivate team members, with 5+ year managerial experience in various business platforms.
                    </h5>
                    <h5>
                    Exemplary verbal, written and interpersonal communicator with extensive knowledge and use of Microsoft Office software.
                    </h5>
                    <h5>
                    Professional Video Editor with 15+ years-experience using Final Cut Pro, Premiere Pro, and After Effects.                    </h5>
                    <h5>
                    UW Coding Bootcamp 2020 
                    </h5>
                </ol>
                <h3 className="Experience">Professional Experience</h3>
                <h4 className="Amazon">Investigation Lead - Team ARES - Amazon.com</h4>
                <h5>February 2020 - Present</h5>
                <h4 className="Amazon2">Associate Advisor - Team ARES - Amazon.com</h4>
                <h5>February 2019 - February 2020</h5>
                <h5>
                Responsibilities include: Assist Project Managers to improve Machine Learning logic for ART program by studying trends, analyzing investigator case data and queue trends to uncover false positives and gaps in Amazon processes and policies.  Assist Department Manager in monitoring queue metrics and coaching associates to utilize best practices to help reach production goals.  Manage Seller escalations and assist with custom Seller communications.  Communicate and coordinate with additional Amazon departments to improve investigation processes and Amazon policies.  
                Facilitate two weekly meetings; one with the associate team and one with key Stakeholders.  Work with Capacity Planning to manage associate training and ramp plans.  Communicate trends and discuss productivity metrics with key Stakeholders.  Provide real time support, assistance and feedback to Credit Operations Associates.  Coach & mentor Associates to ensure they meet the required performance standards for quality & productivity.  Identify research and push for resolution on technical issues affecting internal and external customers.
                </h5>
                <h5>
                Accomplishments include: Creation of Escalation pathway leading to queue creation and Worldwide SOP Update.  Coordinating with FBA Leadership to develop a queue to handle ILAC case escalations.  Led team of 14 to eliminate 2400 case backlog one-month prior to expected goal.  Outlined and composed Team ARES training materials and SOP.  Coordinated with Training and FBA Leadership to revise, format and publish SOP and training materials.  Pushed Training materials and SOP to live and continue to monitor and update SOP as needed.  
Developed process improvement to ensure Seller trust resulting in creation of Team ARES, a 16-20 team queue with productivity goals, SOP and QA.
                </h5>
                <h4 className="Amazon3">Associate Advisor - Final Review/Quality Auditing - Amazon.com</h4>
                <h5>November 2016 - February 2019</h5>
                <h5>
                Responsibilities included: Managed internal trouble ticket queues supporting Seller Support partner sites; assisting with deep dive investigations and reimbursement re-evaluation requests.  Established quality standards and guidelines with consistent closed loop feedback mechanisms.
Assisted FBA management in policy implementation and training of Department SOP.  Investigated associate appeals to provide final resolution on reimbursement accuracy.  Assisted in launch of International ILAC partner sites: including development of partner site QA teams.  
Facilitated weekly calibration calls with Amazon international partner sites.  Provided real time support, assistance and feedback to Credit Operations Associates.  
Coach & mentor Associates to ensure they meet the required performance standards for quality & productivity.  Identify research and push for resolution on technical issues affecting internal and external customers. </h5>
                <h5>
                Accomplishments included: Creation of QA on-site and virtual training materials.  Successful launch of 3 International QA sites.  On-Site training: Cebu, Philippines; Jaipur, India.  
Virtual training: Beijing (Peking), China.  Assisted training team in successful launch of 2 International ILAC sites.                </h5>
                <h4 className="Amazon4">Special Skills</h4>
                <h5>Premiere Pro/After Effects/Photoshop</h5>
                <h5>Adobe Creative Suite</h5>
                <h5>JavaScript, CSS, HTML, JQuery, React, Node</h5>
                </div>
            </div>
        )
      }
    }
    
    export default Resume;