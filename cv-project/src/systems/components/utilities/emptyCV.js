import { v4 as uuid } from "uuid";

const emptyCV = {
    personalInfo: {
        firstName: "",
        lastName: "",
        title: "",
        photo: 'placeholder',
        address: "",
        phoneNumber: "",
        email: "",
        description: "",
    },
    experience: [
        {
            id: uuid(),
            position: "",
            company: "",
            city: "",
            from: "",
            to: "",
        },
    ],
    education: [
        {
            id: uuid(),
            universityName: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: "",
        },
    ],
};

export default emptyCV;