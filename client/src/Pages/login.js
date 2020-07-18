import React, { useState, useContext } from "react";
import { withRouter } from 'react-router-dom'
import Layout from "../Components/Layout"
import Row from "../Components/Row"
import Column from "../Components/Columns"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import Button from "../Components/Button"
import Card from "../Components/Card"
import axios from "axios";
import { UserContext } from "../Context/AuthContext";

function Login({ history }) {
    //States for username and password:
    const [organisationName, setName] = useState()
    const [password, setPassword] = useState()

    //Context to set state for logged in user details:
    const { setUser } = useContext(UserContext)

    const [errorMessage, setError] = useState()

    //Event handler for login:
    const handleInput = async (event) => {
        event.preventDefault()
        try {
            const { data } = await axios.post("/api/login", {
                username: organisationName,
                password: password
            })
            setUser(data)
            history.push("/home")
        }
        catch (error) {
            setError("Please enter correct login details.")
            console.log(error)
        }
    }

    return (<Layout>
        <Row>
            <Column size={"is-half is-offset-one-quarter"}>
                <Card title={"Login"} id={'centralize'}>
                    <Form>
                        <FormItem label={"Organisation Name:"} name={"Organisation Name"} value={organisationName} onChange={e => setName(e.target.value)}>
                        </FormItem>
                        <FormItem label={"Password:"} name={"Password"} type={"password"} value={'password'} onChange={e => setPassword(e.target.value)}>
                        </FormItem>
                    </Form>
                    {errorMessage ? <div><i>{errorMessage}</i></div> : false}
                    <Row>
                        <Button onClick={handleInput}>Login</Button>
                    </Row>
                    <Row><Button link={"/registration"}>Register your clinic!</Button></Row>
                </Card>
            </Column>
        </Row>
    </Layout>)

}

export default withRouter(Login);
