import React, { useState, useContext, useEffect } from "react";
import Layout from "../Components/Layout"
import Column from "../Components/Columns"
import Card from "../Components/Card"
import Row from "../Components/Row"
import Button from "../Components/Button"
import Table from "../Components/Table"
import axios from "axios"
import { PatientContext } from "../Context/PatientContext"



function PatientPage() {
    const [Wounds, setWounds] = useState()
    const { patient } = useContext(PatientContext)

    async function getWounds() {
        try {
            const { data } = await axios.get(`/api/wounds/${patient.id}`)
            setWounds(data)
        }
        catch (error) { console.log(error) }
    }

    useEffect(() => {
        getWounds()
    }, [])

    return <Layout>
        <Row>
            <Column span={6}>
                <Card title={"Patient details"}>
                    <ul>
                        <li><b>Name:</b> {patient.FirstName} {patient.LastName}</li>
                        <li><b>D.O.B: </b> {patient.DOB}</li>
                        <li><b>GP Details:</b> {patient.GPDetails}</li>
                        <li><b>Medical History:</b>{patient.MedicalHistory}</li>
                        <li><b>Current Medication:</b>{patient.Medications}</li>
                    </ul>
                </Card>
            </Column>
            <Column span={18}>
                <Row>
                    <Button link="/new_wound_entry">NEW WOUND ENTRY BUTTON</Button>
                </Row>
                <Row>
                    <Card title={"List of wounds"}>
                        <Table data={Wounds} ></Table>
                    </Card>
                </Row>
            </Column>
        </Row>

    </Layout>
}

export default PatientPage;
