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
import NewPatient from "../Pages/newPatientForm"


function SearchPage() {
    const { user } = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)
    const [searchResults, setResults] = useState([])

    useEffect(() => {
        async function searchPatients() {
            try {
                const { data } = await axios.get(`/api/patients/${user.dataValues.id}`)
                setResults(data)
            }
            catch (error) { console.log(error) }
        }
        searchPatients()
    }, [])

    return (<><Layout>
        <Breadcrumb navArray={[{}]}></Breadcrumb>
        <Row>
            <h2>Welcome, {user.dataValues.username}!</h2>
        </Row>
        <Row justify={'center'} style={{ padding: '50px' }}>
            <Column span={20}>
                <Row gutter={4}>
                    <Column span={18}><Search placeholder={'Search by last name'}></Search></Column>
                    <Column span={6}>  <Button onClick={() => setIsOpen(true)}>Enter new patient</Button></Column>
                </Row>
            </Column>
        </Row >
        <Row justify={"center"}>
            <Column span={20}>
                <PatientTable data={searchResults}></PatientTable>
            </Column>
        </Row>
    </Layout>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
            <NewPatient addPatient={(value) => setResults([value, ...searchResults])} close={() => setIsOpen(false)} />
        </Modal>
    </>)
}

export default SearchPage;
