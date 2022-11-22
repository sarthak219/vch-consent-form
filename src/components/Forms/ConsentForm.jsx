import React, { useState } from 'react'
import Button from '../elements/Button'
import Input from '../elements/Input'
import "../../assets/Css/FormStyles.css"
import useInput from '../Hooks/useInput';
import Datepicker from '../elements/Datepicker';

function ConsentForm() {
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    const phnNumber = useInput("");
    const otherProf = useInput("");
    const empCode = useInput("");
    const isVchWorkerInput = useInput(false)
    const [isVchWorker, setIsVchWorker] = useState(false)
    const dob = useInput("0000-00-00");
    const organization = useInput("");
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [clinic, setClinic] = useState("");
    const [profession, setProfession] = useState("");
    const isTermAcceptedInput = useInput("");
    const [isTermAccepted, setIsTermAccepted] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        const {success, error} = validate();
        if(success) {
            const data = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                phnNumber: phnNumber.value,
                dob: dob.value,
                firstTimeVaccinated: q1,
                hasIllness: q2,
                isAllergic: q3,
                clinic,
                profession
            }
            console.log(data);
        } else {
            alert(error);
        }
    }

    const validate = () => {
        // Check for empty fields
        if(firstName.value === null || firstName.value === undefined || firstName.value === "" ) return {success: false, error:"First Name can't be left blank"};
        if(lastName.value === null || lastName.value === undefined || lastName.value === "" ) return {success: false, error:"Last Name can't be left blank"};;
        if(email.value === null || email.value === undefined || email.value === "" ) return {success: false, error:"Email can't be left blank"};;
        if(phnNumber.value === null || phnNumber.value === undefined || phnNumber.value === "" ) return {success: false, error:"PHN number can't be left blank"};;
        if(dob.value === null || dob.value === undefined || dob.value === "" || dob.value === "0000-00-00") return {success: false, error:"Date of birth can't be left blank"};;
        if(q1 === null || q1 === undefined || q1 === "") return {success: false, error:"Q1 can't be left blank"};
        if(q2 === null || q2 === undefined || q2 === "") return {success: false, error:"Q2 can't be left blank"};
        if(q3 === null || q3 === undefined || q3 === "") return {success: false, error:"Q3 can't be left blank"};
        if(clinic === null || clinic === undefined || clinic === "") return {success: false, error:"Clinic can't be left blank"};
        if(profession === null || profession === undefined || profession === "") return {success: false, error:"Profession can't be left blank"};
        if(profession === "other"){
            if(otherProf.value === null || otherProf.value === undefined || otherProf.value === "") return {success: false, error:"Profession can't be left blank"};
            if(organization.value === null || organization.value === undefined || organization.value === "") return {success: false, error:"Profession can't be left blank"};
        }
        if(!isTermAccepted) return {success: false, error:"Please accept our terms to proceed"};
        return {success:true}
    }

    function handleIsVchStaffChange(e) {
        setIsVchWorker(e.target.checked);
    }
    function handleAgreeToTermChange(e) {
        setIsTermAccepted(e.target.checked);
        console.log("changed", e.target.checked);
    }

    return (
        <form>
            <img className='logo w-50 mx-auto mb-5 mt-3' src={require("../../assets/img/VCH-logo.png")} alt="" />
            {/* Personal Details */}
            <Input id={"firstName"} type={"text"} label={"First Name"} {...firstName}/>
            <Input id={"lastName"} type={"text"} label={"Last Name"} {...lastName}/>
            <Input id={"email"} type={"email"} label={"E-mail"} {...email}/>
            <p className='short-msg text-muted'> <i>We will use this to send you your copy</i></p>
            <Input id={"phnNum"} type={"text"} label={"PHN Number"} {...phnNumber}/>
            <Datepicker id={"dob"} value={""} label="Date of Birth" {...dob}/>
            
            <hr  className='my-4'/>
            
            <div className="vch-emp-container">
                <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="isVchEmployee" {...isVchWorkerInput} onChange={handleIsVchStaffChange}/>
                    <label className="form-check-label text-muted" htmlFor="isVchEmployee">
                        <i>Do you work for VCH?</i>
                    </label>
                </div> 
                {isVchWorker && <Input id={"empCode"} type={"text"} label={"Employee Code"} {...empCode}/>}
            </div>

            <hr  className='my-4'/>

            {/* Questions */}
            <h5 className='mx-2 mb-3 gray'>Questions to be answered before receiving influenza vaccine</h5>
            <ol>
                <li>
                    <fieldset id="Q1">
                        <p className='m-2 gray'>Is this the first time I am receiving the Flu Vaccine? </p>
                        <div className="form-check">
                            <input className="form-check-input" value={"Yes"} type="radio" name="Q1" id="q1RadioYes" onChange={(e)=>{setQ1(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="q1RadioYes">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" value={"No"} type="radio" name="Q1" id="q1RadioNo" onChange={(e)=>{setQ1(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="q1RadioNo">
                                No
                            </label>
                            </div>
                    </fieldset>

                </li>
                <li>
                    <fieldset id="Q2">
                        <p className='m-2 gray'>Do you currently have a fever or a serious illness?: </p>
                        <div className="form-check">
                            <input className="form-check-input" value={"Yes"} type="radio" name="Q2" id="q2RadioYes" onChange={(e)=>{setQ2(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="q2RadioYes">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" value={"No"} type="radio" name="Q2" id="q2RadioNo" onChange={(e)=>{setQ2(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="q2RadioNo">
                                No
                            </label>
                            </div>
                    </fieldset>

                </li>
                <li>
                    <fieldset id="Q3">
                        <p className='m-2 gray'>
                            Have you ever had an anaphylactic reaction to a previous dose of 
                            any type of influenza vaccine or to any vaccine components 
                            (Hives, swelling of the mouth or throat, difficult breathing, 
                            hypotension, shock, etc.)?
                        </p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Q3" value={"Yes"} id="q3RadioYes" onChange={(e)=>{setQ3(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="q3RadioYes">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Q3" value={"No"} id="q3RadioNo" onChange={(e)=>{setQ3(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="q3RadioNo">
                                No
                            </label>
                            </div>
                    </fieldset>
                </li>
            </ol>

            <hr  className='my-4'/>

            <fieldset id="clinic">
                <h5 className='mx-2 mb-3 gray'>Please select your clinic:</h5>
                <div className="d-flex justify-content-around my-2 mx-2">
                    <div className="col-3">
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" value={"VCH"} name="clinic" id="VCH" required onChange={(e)=>{setClinic(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="VCH">
                                VCH
                            </label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" value={"PHSA"} name="clinic" id="PHSA" required onChange={(e)=>{setClinic(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="PHSA">
                                PHSA
                            </label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" value={"PHC"} name="clinic" id="PHC" required onChange={(e)=>{setClinic(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="PHC">
                                PHC
                            </label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" value={"FHA"} name="clinic" id="FHA" required onChange={(e)=>{setClinic(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="FHA">
                                FHA
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>

            <hr className='my-4'/>

            <fieldset id="profession">
                <h5 className='mx-2 mb-3 gray'>Non-Employees/Contract Staff:</h5>
                    <div className="container mx-2">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value={"physician"} name="profession" id="physician" required onChange={(e)=>{setProfession(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="physician">
                                Physician (Contracted)
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value={"volunteer"} name="profession" id="volunteer" required onChange={(e)=>{setProfession(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="volunteer">
                                Volunteer
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value={"student"} name="profession" id="student" required onChange={(e)=>{setProfession(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="student">
                                Student
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value={"other"} name="profession" id="other" required onChange={(e)=>{setProfession(e.target.value)}}/>
                            <label className="form-check-label gray" htmlFor="other">
                                Other:
                            </label>
                            {(profession === "other") &&
                                <>
                                <div className="other-input-container mt-3">
                                    <Input id={"otherInput"} label={"Other"} type={"text"} {...otherProf}/>
                                    <Input id={"organization"} label={"Organization"} type={"text"} {...organization}/>
                                </div>
                                </>
                                }
                        </div>
                    </div>
            </fieldset>

            <hr  className='my-4'/>

            <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="consent" {...isTermAcceptedInput} onChange={handleAgreeToTermChange}/>
                <label className="form-check-label  " htmlFor="consent">
                    <i>I have read the BC Health file and understand the information. 
                        I consent to receiving the vaccine.</i>
                </label>
            </div>
            
            {/* Submit button */}
            <div className='d-flex justify-content-center'>
                <Button onClick={handleSubmit} className={"submit-btn"} type={"submit"} text="Submit"/>
            </div>
        </form>
    )
}

export default ConsentForm