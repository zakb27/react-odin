import React,{useState} from "react";
import Info from './form/Info';
import Education from './form/Education';
import Experience from './form/Experience';

const Create = ({cv,onChangePersonal,onDeleteEducation,onAddEducation,onChangeEducation}) => {

    return(
        <div>
            <Info
                personalInfo = {cv.personalInfo}
                onChange={onChangePersonal}

            />
            <Education
                education={cv.education}
                onChange={onChangeEducation}
                onAdd={onAddEducation}
                onDelete={onDeleteEducation}/>
            <Experience exp ={cv.experience}/>
        </div>
    )

}

export default Create;