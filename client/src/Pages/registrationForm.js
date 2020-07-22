import React, { useState } from "react";
import Layout from "../Components/Layout"
import Column from "../Components/Columns"
import Row from "../Components/Row"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import Button from "../Components/Button"
import Card from "../Components/Card"
import axios from "axios";

function RegistrationForm() {
    //States for registration input details:
    const [userName, setUserName] = useState()
    const [address, setAddress] = useState()
    const [accountHolder, setAccountHolder] = useState()
    const [contactNumber, setContactNumber] = useState()
    const [password, setPassword] = useState()

    //Event handler for form submission:
    const handleInput = async (event) => {
        try {
            event.preventDefault()
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

    return <>
        <Layout>
            <Row>
                <Column size={"is-half is-offset-one-quarter"}>
                    <Card title={'Register your organisation:'} id={'centralize'}>
                        <Form>
                            <FormItem label={"Organisation Name:"} value={userName} onChange={e => setUserName(e.target.value)} />
                            <FormItem label={"Address:"} value={address} onChange={e => setAddress(e.target.value)} />
                            <FormItem label={"Account holder:"} value={accountHolder} onChange={e => setAccountHolder(e.target.value)} />
                            <FormItem label={"Contact Number:"} value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
                            <FormItem label={"Password:"} value={password} type={"password"} onChange={e => setPassword(e.target.value)} />
                        </Form>
                        <Row>
                            <Button onClick={(!userName || !address || !accountHolder || !contactNumber || !password) ? false : handleInput} link={(!userName || !address || !accountHolder || !contactNumber || !password) ? false : "/"}>Submit</Button>
                        </Row>
                        <Row justify={'center'}><Button link={"/"}>Return to login page</Button></Row>
                    </Card>
                </Column>
            </Row>
        </Layout>
    </>
}

export default RegistrationForm;
