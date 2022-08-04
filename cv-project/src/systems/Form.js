import React,{useState} from "react";
import Create from './components/Create';
import Render from './components/Render';
import emptyCV from "./components/utilities/emptyCV";

const Form = ()=>{
    const [cv, setCv] = useState(emptyCV)

    const handleChangePersonal = (e) => {
        const { name, value, type } = e.target

        if (type === 'file') {
            handleChangeFile(e)
            return
        }

        setCv((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value,
            },
        }))
    }
    const handleChangeFile = (e) => {
        const { name } = e.target
        const file = e.target.files[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = () => {
            setCv((prevState) => ({
                ...prevState,
                personalInfo: {
                    ...prevState.personalInfo,
                    [name]: reader.result,
                },
            }))
        }
        reader.readAsDataURL(file)
    }


    return(
        <div>
            <Create cv={emptyCV} onChangePersonal={handleChangePersonal}/>
            <Render cv={emptyCV}/>
        </div>
    )
}

export default Form;