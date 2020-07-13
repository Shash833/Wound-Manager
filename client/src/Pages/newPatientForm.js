import React, { useState, useContext } from "react";
import Layout from "../Components/Layout"
import Column from "../Components/Columns"
import Row from "../Components/Row"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import axios from "axios";

import { UserContext } from '../Context/AuthContext'

function NewPatientForm() {
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [DOB, setDOB] = useState()
    const [Address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [gpDetails, setGPDetails] = useState()
    const [medHistory, setMedHistory] = useState()
    const [medication, setMedication] = useState()

    const { user } = useContext(UserContext)

    const handleInput = async (event) => {
        try {
            event.preventDefault()
            console.log("CONTEXT", user.dataValues.id)
            console.log("CONTEXT NAME", user.dataValues.username)
            axios.post("/api/patients", ({
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
        }
        catch (error) { console.log(error) }
    }


    return <Layout>
        <Row justify={"center"}>
            <h2>Enter New Patient Details:</h2>
        </Row>
        <Row>
            <Column offset={8}>
                <Form onClick={handleInput} link={"home"}>
                    <FormItem label={"First Name:"} value={FirstName} onChange={e => setFirstName(e.target.value)} />
                    <FormItem label={"Last Name:"} value={LastName} onChange={e => setLastName(e.target.value)} />
                    <FormItem label={"DOB:"} value={DOB} onChange={e => setDOB(e.target.value)} />
                    <FormItem label={"Address:"} value={Address} onChange={e => setAddress(e.target.value)} />
                    <FormItem label={"Contact Number:"} value={phone} onChange={e => setPhone(e.target.value)} />
                    <FormItem label={"GP Details:"} value={gpDetails} onChange={e => setGPDetails(e.target.value)} />
                    <FormItem label={"Relevant Medical History:"} value={medHistory} onChange={e => setMedHistory(e.target.value)} />
                    <FormItem label={"Current Medications:"} value={medication} onChange={e => setMedication(e.target.value)} />
                </Form>
            </Column>
        </Row>
    </Layout>
}

export default NewPatientForm;
