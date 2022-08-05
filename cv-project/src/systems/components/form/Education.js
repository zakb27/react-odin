
import React, {} from 'react'
import EducationInd from "./EducationInd";

const Education = ({education, onChange, onAdd, onDelete}) => {
    const educationItems = education.map((educationItem) => (
        <EducationInd
            key={educationItem.id}
            id={educationItem.id}
            educationItem={educationItem}
            onChange={onChange}
            onDelete={onDelete}
        ></EducationInd>));

    return (
        <section className={'Education'}>
            {educationItems}
            <button text="Add" onClick={onAdd}></button>
        </section>
    );
};

export default Education;