import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../Context/AuthContext'
import Modal from 'react-modal'
import Layout from "../Components/Layout"
import Breadcrumb from "../Components/Breadcrumb"
import Row from "../Components/Row"
import Column from "../Components/Columns"
import Search from "../Components/SearchBox"
import Button from "../Components/Button"
import PatientTable from "../Components/PatientTable"
import axios from "axios";
import NewPatient from "./NewPatientForm"


function SearchPage() {
    //Logged in user context
    const { user } = useContext(UserContext)
    //Modal state
    const [isOpen, setIsOpen] = useState(false)
    //State to store retrieved patients
    const [Patients, setPatients] = useState([])
    //State to store search input
    const [search, setSearch] = useState()
    //Function to retrieve patients from DB
    async function retrievePatients() {
        try {
            const { data } = await axios.get(`/api/patients/${user.dataValues.id}`)
            const sortedList = await data.sort((a, b) => (a.LastName > b.LastName) ? 1 : -1)
            setPatients(sortedList)
            return sortedList
        }
        catch (error) { console.log(error) }
    }
    //Retrieve patients on loading of page
    useEffect(() => {
        retrievePatients()
    }, [])
    //Patient search function:
    async function searchPatient() {
        try {
            await retrievePatients()
            const result = await Patients.filter((patient) => patient.LastName === search)
            if (result.length) { setPatients(result) }
            else return
        }
        catch (error) { console.log(error) }
    }

    return <>
        <Breadcrumb navArray={[{}]} />
        <Layout>
            <Row>
                <h2>{user.dataValues.username} Wound Management Tool</h2>
            </Row>
            <Row>
                <Column size={"is-10"}><Search placeholder={'Search for patient by surname'} onChange={e => setSearch(e.target.value)} onSearch={searchPatient}></Search></Column>
                <Column size={"is-2"}>  <Button onClick={() => setIsOpen(true)}>Enter new patient</Button></Column>
            </Row>
            <Row>
                <Column>
                    <PatientTable data={Patients} />
                </Column>
            </Row>
        </Layout>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
            <NewPatient addPatient={(value) => setPatients([value, ...Patients])} close={() => setIsOpen(false)} />
        </Modal>
    </>
}

export default SearchPage;
