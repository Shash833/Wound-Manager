import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../Context/AuthContext'
import { PatientContext } from "../Context/PatientContext";
import Layout from "../Components/Layout"
import Row from "../Components/Row"
import Column from "../Components/Columns"
import FormItem from "../Components/FormItem"
import Button from "../Components/Button"
// import ScrollList from "../Components/ScrollList"
import axios from "axios";


function SearchPage() {
    const { user } = useContext(UserContext)

    const [input, setInput] = useState()
    const [searchResults, setResults] = useState([])
    const { setPatient } = useContext(PatientContext)

    async function searchPatients() {
        try {
            const { data } = await axios.get(`/api/patients/${user.dataValues.id}`)
            setResults(data)
            // console.log(data)
            // console.log(searchResults)
        }
        catch (error) { console.log(error) }
    }

    async function selectPatient(data) {
        try {
            setPatient(data)
            console.log(data)
        }
        catch (error) { console.log(error) }
    }

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    useEffect(() => {
        searchPatients()
    }, [input])



    //TODO: Use context to set name of orginisation
    return <Layout>
        <Row>
            <h2>{"Welcome, " + user.dataValues.username + "!"}</h2>
        </Row>
        <Column offset={8}>
            <Row>
                <FormItem label={"Patient search:"} type={"text"} placeholder={"Enter patient name"} onChange={e => setInput(e.target.value)} />

            </Row>
            <Row>

            </Row>
        </Column>

        <Row>
            <Button link="new_patient_form">Enter new patient</Button>
        </Row >

        <Row>
            <ul>
                {searchResults.map(({ FirstName, LastName, id, Address, GPDetails, MedicalHistory, Medications, DOB }) => (
                    <li key={id}>
                        {LastName + "," + FirstName + " - " + Address}
                        <Button link={"patient"} onClick={() => selectPatient({ FirstName, DOB, GPDetails, MedicalHistory, Medications, id })} >Select patient</Button>
                    </li>
                ))}
            </ul>
        </Row>
    </Layout >
}

export default SearchPage;
