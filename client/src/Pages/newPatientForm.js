import React, { useState, useContext } from "react";
import Layout from "../Components/Layout"
import Breadcrumb from "../Components/Breadcrumb"
import Column from "../Components/Columns"
import Card from "../Components/Card"
import Row from "../Components/Row"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import TextItem from "../Components/TextArea"
import DatePicker from "../Components/DatePicker"
import Button from "../Components/Button"
import axios from "axios";

import { UserContext } from '../Context/AuthContext'

function NewPatientForm(props) {
    //States for new patient details:
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [DOB, setDOB] = useState()
    const [Address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [gpDetails, setGPDetails] = useState()
    const [medHistory, setMedHistory] = useState()
    const [medication, setMedication] = useState()

    //Context with logged in user details:
    const { user } = useContext(UserContext)


    //Event handler for form submit:
    const handleInput = async (event) => {
        try {
            event.preventDefault()
            const response = await axios.post("/api/patients", ({
                FirstName: FirstName,
                LastName: LastName,
                Address: Address,
                Phone: phone,
                GPDetails: gpDetails,
                DOB: DOB,
                MedicalHistory: medHistory,
                Medications: medication,
                OrgID: user.dataValues.id
            }))
            props.addPatient(response.data)
            props.close()
        }
        catch (error) { console.log(error) }
    }

    return <>
        <Breadcrumb navArray={[{ label: `New patient registration:`, link: "/new_patient_form" }]} />
        <Layout>
            <Row>
                <Column size={"is-three-fifths is-offset-one-fifth"}>
                    <Card title="Register new patient:">
                        <Form>
                            <FormItem label={"First Name:"} value={FirstName} onChange={e => setFirstName(e.target.value)} />
                            <FormItem label={"Last Name:"} value={LastName} onChange={e => setLastName(e.target.value)} />
                            <DatePicker label={"DOB: "} onChange={(date, dateString) => setDOB(dateString)} />
                            <FormItem label={"Address:"} value={Address} onChange={e => setAddress(e.target.value)} />
                            <FormItem label={"Contact Number:"} value={phone} onChange={e => setPhone(e.target.value)} />
                            <FormItem label={"GP Details:"} value={gpDetails} onChange={e => setGPDetails(e.target.value)} />
                            <TextItem label={"Medical History:"} value={medHistory} onChange={e => setMedHistory(e.target.value)} />
                            <TextItem label={"Current Medications:"} value={medication} onChange={e => setMedication(e.target.value)} />
                        </Form>
                        <Row>
                            <Button onClick={(!FirstName || !LastName || !DOB || !Address || !phone || !gpDetails || !medHistory || !medication) ? false : handleInput} link={(!FirstName || !LastName || !DOB || !Address || !phone || !gpDetails || !medHistory || !medication) ? false : "home"}>Enter new patient</Button>
                        </Row>
                    </Card>
                </Column>
            </Row>
        </Layout>
    </>
}

export default NewPatientForm;
