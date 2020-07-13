import React, { useState, useEffect, useContext } from "react";
import { withRouter } from 'react-router-dom'
import Layout from "../Components/Layout"
import Row from "../Components/Row"
import Column from "../Components/Columns"
import Form from "../Components/Form"
import FormItem from "../Components/FormItem"
import axios from "axios";
import { UserContext } from "../Context/AuthContext";

function Login({ history }) {
    const [organisationName, setName] = useState()
    const [password, setPassword] = useState()
    const { setUser } = useContext(UserContext)

    const handleInput = async (event) => {
        event.preventDefault()
        try {
            console.log({ organisationName, password })
            const { data } = await axios.post("/api/login", {
                username: organisationName,
                password: password
            })
            setUser(data)
            history.push("/home")
        }
        catch (error) { console.log(error) }
    }

    // const setData = async () => {
    //     try {
    //         const userData = await axios.get("/api/user_data")
    //         setUserInfo(userData)
    //     }
    //     catch (error) { console.log(error) }

    // };

    // useEffect(() => {
    //     console.log("context", UserContext)
    // }, [userInfo])


    return <Layout>
        <Row justify={"center"}>
            <Column span={5}>
                <h2>Login:</h2>
            </Column>
        </Row>
        <Row>
            <Column offset={8}>
                <Form onClick={handleInput}>
                    <FormItem label={"Organisation Name:"} name={"Organisation Name"} value={organisationName} onChange={e => setName(e.target.value)}>
                    </FormItem>
                    <FormItem label={"Password:"} name={"Password"} type={"password"} value={'password'} onChange={e => setPassword(e.target.value)}>
                    </FormItem>
                </Form>
            </Column>
        </Row>
    </Layout>

}

export default withRouter(Login);
