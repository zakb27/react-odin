import React, {useState} from "react";

const Info = ({personalInfo,onChange})=>{
    return(
        <section className={'Personal_info'}>
            <form>
                    <input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={personalInfo.firstName}
                    />
                    <input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={personalInfo.lastName}
                    />
                    <input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={personalInfo.title}
                    />

                    <input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={personalInfo.address}
                    />
                    <input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone number"
                        value={personalInfo.phoneNumber}
                    />
                    <input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={personalInfo.email}
                    />
                    <input
                        onChange={(e) => onChange(e)}
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={personalInfo.description}
                    />
            </form>
            </section>);
}

export default Info;
