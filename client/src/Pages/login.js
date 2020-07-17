import React, { useState, useEffect, useContext } from "react";
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

    return (<Layout>
        {/* <Row justify={'center'} gutter={[0, 24]}>
            <Column span={8}>
                <h2>Login:</h2>
            </Column>
        </Row> */}
        <Row justify={'center'} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: '50px' }}>
            <Column span={8}>
                <Card title={"Login"}>
                    <Form labelSpan={8}>
                        <FormItem label={"Organisation Name:"} name={"Organisation Name"} value={organisationName} onChange={e => setName(e.target.value)}>
                        </FormItem>
                        <FormItem label={"Password:"} name={"Password"} type={"password"} value={'password'} onChange={e => setPassword(e.target.value)}>
                        </FormItem>
                    </Form>
                    <Row justify={"center"} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: '8px 0' }}>
                        <Column>  <Button onClick={handleInput}>Login</Button></Column>
                    </Row>
                    <Row justify={"center"} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}><Button link={"/registration"}>Register your clinic!</Button></Row>
                </Card>
            </Column>
        </Row>
    </Layout>)

}

export default withRouter(Login);
