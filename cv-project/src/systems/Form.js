import React,{useState} from "react";
import Create from './components/Create';
import Render from './components/Render';
import emptyCV from "./components/utilities/emptyCV";

const Form = ()=>{
    const [cv, setCv] = useState(emptyCV)

    const handleChangePersonal = (e) => {
        const { name, value, type } = e.target
        setCv((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value,
            },
        }))
    }

    const handleChangeEducation = (e, id) =>{
        const {name,value} = e.target;
        setCv(prevState => {
            const newEducation = prevState.education.map((item) => {
                if(item.id===id){
                    return { ...item, [name]: value }
                }
                return item
            })
            return { ...prevState, education: [...newEducation] }

        })
    }

    const handleAddEducation = () => {
        setCv((prevState) => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    id: uuidv4(),
                    universityName: '',
                    city: '',
                    degree: '',
                    subject: '',
                    from: '',
                    to: '',
                },
            ],
        }))
    }

    const handleDeleteEducation = (id) => {
        setCv((prevState) => {
            const newEducation = prevState.education.filter(
                (educationItem) => educationItem.id !== id
            )
            return { ...prevState, education: [...newEducation] }
        })
    }


    return(
        <div>
            <Create
                cv={cv}
                onChangePersonal={handleChangePersonal}
                onChangeEducation={handleChangeEducation}
                onAddEducation={handleAddEducation}
                onDeleteEducation={handleDeleteEducation}
            />
            <Render cv={cv}/>
        </div>
    )
}

export default Form;