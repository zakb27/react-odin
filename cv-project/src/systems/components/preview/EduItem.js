import React from "react";
import Render from "../Render";


const EduItem = (educationItems) => {
    return(
    <section className={'education'}>
        <div className={'Period'}>
            {educationItems.from} - {educationItems.to}
        </div>
        <div className={'name_city'}>
            <p>University: {educationItems.universityName}</p>
            <p>Location: {educationItems.city}</p>
        </div>
        <div className={'degree_subject'}>
            <p>Degree: {educationItems.degree}</p>
            <p>Subject: {educationItems.subject}</p>
        </div>
    </section>);
};

export default EduItem;