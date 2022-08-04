import React,{useState} from "react";
import Info from './form/Info';
import Education from './form/Education';
import Experience from './form/Experience';

const Create = ({cv,onChangePersonal}) => {
    cv.personalInfo.address = 'Something';



    return(
        <div>
            <Info personalInfo = {cv.personalInfo} onChange={onChangePersonal}/>
            <Education education ={cv.education}/>
            <Experience exp ={cv.experience}/>
        </div>
    )

}

export default Create;