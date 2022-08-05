import React,{useState} from "react";
import EduItem from "./preview/EduItem";

const Render = ({cv}) => {
    const educationItems = cv.education.map((educationItem) => (
        <div key={educationItem.id} educationItem={educationItem} />
    ));

    return(

        <div className={'portfolio'}>
            <section className={'personalInfo'}>
                <div className='header_portfolio'>
                    <div className='first_name'>
                        {cv.personalInfo.firstName}
                    </div>
                    <div className='last_name'>
                        {cv.personalInfo.lastName}
                    </div>
                    <div className='title'>
                        {cv.personalInfo.title}
                    </div>
                </div>
                <div className='image'>
                    cv.personalInfo.
                </div>
                <div className='less'>
                    {cv.personalInfo.address}
                </div>
                <div className='less'>
                    {cv.personalInfo.phoneNumber}
                </div>
                <div className='less'>
                    {cv.personalInfo.email}
                </div>
            </section>
            <EduItem educationItems={educationItems}/>
        </div>
        );

}

export default Render;