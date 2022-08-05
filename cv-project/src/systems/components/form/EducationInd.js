
import React, {} from 'react'


const Education = ({id, education, onChange, onDelete}) => {

    return (<form>
        <input
            onChange={(e) => onChange(e,id)}
            type="text"
            name="universityName"
            placeholder="University name"
            value={education.universityName}
        />
        <input
            onChange={(e) => onChange(e,id)}            type="text"
            name="city"
            placeholder="City"
            value={education.city}
        />
        <input
            onChange={(e) => onChange(e,id)}            type="text"
            name="degree"
            placeholder="Degree"
            value={education.degree}
        />

        <input
            onChange={(e) => onChange(e,id)}            type="text"
            name="subject"
            placeholder="Subject"
            value={education.subject}
        />
        <input
            onChange={(e) => onChange(e,id)}            type="text"
            name="from"
            placeholder="From"
            value={education.from}
        />
        <input
            onChange={(e) => onChange(e,id)}            type="text"
            name="to"
            placeholder="To"
            value={education.to}
        />
        <button text="Delete" onClick={() => onDelete(id)}></button>
    </form>
);
};

export default Education;