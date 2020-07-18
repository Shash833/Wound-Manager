import React, { useState, useContext, useEffect } from "react";
import { Divider } from 'antd';
import Modal from 'react-modal'
import Layout from "../Components/Layout"
import Breadcrumb from "../Components/Breadcrumb"
import Column from "../Components/Columns"
import Card from "../Components/Card"
import Row from "../Components/Row"
import Button from "../Components/Button"
import Table from "../Components/Table"
import NewWound from "../Pages/initialWoundEntry"
import axios from "axios"
import { PatientContext } from "../Context/PatientContext"


function PatientPage() {
    //State for list of patient wounds:
    const [Wounds, setWounds] = useState([])

    //Context with selected patient info:
    const { patient } = useContext(PatientContext)

    //For modal:
    const [isOpen, setIsOpen] = useState(false)

    //UseEffect to call above function on page load
    useEffect(() => {
        //Function to retreive list of chosen patient's wounds from DB
        async function getWounds() {
            try {
                const { data } = await axios.get(`/api/wounds/${patient.id}`)
                setWounds(data)
            }
            catch (error) { console.log(error) }
        }
        getWounds()
    }, [])

    return (<><Breadcrumb navArray={[{ label: `Patient: ${patient.FirstName} ${patient.LastName}`, link: "/patient" }]}></Breadcrumb>
        <Layout>
            <Row>
                <Column size={"is-4"}>
                    <Card title={"Patient details"} >
                        <p><b>Name: </b> {patient.FirstName} {patient.LastName}</p>
                        <Divider />
                        <p><b>D.O.B: </b> {patient.DOB}</p>
                        <Divider />
                        <p><b>GP Details: </b> {patient.GPDetails}</p>
                        <Divider />
                        <p><b>Medical History:</b></p>
                        <br></br>
                        <p>{patient.MedicalHistory}</p>
                        <Divider />
                        <p><b>Medications:</b></p>
                        <br></br>
                        <p>{patient.Medications}</p>
                    </Card>
                </Column>
                <Column size={"is-8"}>
                    <Card title={`${patient.FirstName} ${patient.LastName}'s wound records:`}>
                        <Row>
                            <Column>
                                <Button onClick={() => setIsOpen(true)}>Add new wound</Button>
                            </Column>
                        </Row>
                        {Wounds.length ?
                            <Table data={Wounds} /> :
                            <div><i>{`There are currently no wound records for ${patient.FirstName}.`}</i></div>}
                    </Card>
                </Column>
            </Row>
        </Layout>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
            <NewWound addWound={(value) => setWounds([value, ...Wounds])} close={() => setIsOpen(false)} />
        </Modal>
    </>)
}

export default PatientPage;
