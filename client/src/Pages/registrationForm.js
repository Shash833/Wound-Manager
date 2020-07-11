import React, { useState } from "react";
import Layout from "../Components/Layout"
import Column from "../Components/Columns"
import Row from "../Components/Row"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import axios from "axios";

function RegistrationForm() {

    const [userName, setUserName] = useState()
    const [address, setAddress] = useState()
    const [accountHolder, setAccountHolder] = useState()
    const [contactNumber, setContactNumber] = useState()
    const [password, setPassword] = useState()

    const handleInput = async (event) => {
        try {
            event.preventDefault()
            console.log({ userName, address, accountHolder, contactNumber, password })
            axios.post("/api/users", ({
                username: userName,
                Password: password,
                Address: address,
                ContactName: accountHolder,
                ContactNumber: contactNumber
            }))
        }
        catch (error) { console.log(error) }
    }

    return <Layout>
        <Row justify={"center"}>
            <h2>Enter Registration Details</h2>
        </Row>
        <Row>
            <Column offset={8}>
                <Form onClick={handleInput}>
                    <FormItem label={"Organisation Name:"} value={userName} onChange={e => setUserName(e.target.value)} />
                    <FormItem label={"Address:"} value={address} onChange={e => setAddress(e.target.value)} />
                    <FormItem label={"Account holder:"} value={accountHolder} onChange={e => setAccountHolder(e.target.value)} />
                    <FormItem label={"Contact Number:"} value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
                    <FormItem label={"Password:"} value={password} onChange={e => setPassword(e.target.value)} />
                </Form>
            </Column>
        </Row>
    </Layout>
}

export default RegistrationForm;
