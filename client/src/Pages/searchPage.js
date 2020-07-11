import React from "react";
import { Link } from 'react-router-dom'
import Layout from "../Components/Layout"
import Row from "../Components/Row"
import Column from "../Components/Columns"
import FormItem from "../Components/FormItem"
import Button from "../Components/Button"


function SearchPage() {
    //TODO: Use context to set name of orginisation
    return <Layout>
        <Row>
            <h2>{"(Organisation name)"}</h2>
        </Row>
        <Column offset={8}>
            <Row>
                <FormItem label={"Patient search:"} type={"text"} placeholder={"Enter patient name"} />

            </Row>
            <Row>

            </Row>
        </Column>

        <Row>
            <Button><Link to="new_patient_form">Enter new patient</Link></Button>
        </Row>
    </Layout>
}

export default SearchPage;
