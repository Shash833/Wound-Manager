import React from "react";
import Layout from "../Components/Layout"
import Column from "../Components/Columns"
import Card from "../Components/Card"
import Row from "../Components/Row"



function PatientPage() {
    return <Layout>
        <Row>
            <Column span={6}>
                <Card title={"Patient details"}>
                    <ul>
                        <li>Name:</li>
                        <li>Address:</li>
                        <li>etc....:</li>
                        <li>To be generated from userDB</li>
                    </ul>
                </Card>
            </Column>
            <Column span={18}>
                <Row>
                    <button href="/new-wound-entry">NEW WOUND ENTRY BUTTON</button>
                </Row>
                <Row>
                    <Card title={"List of wounds"}>
                        <ul>
                            <li>
                                list of wounds to be generated from DB
                                <button href="/wound/:id">View wound history</button>
                            </li>
                            <li>
                                list of wounds to be generated from DB
                                <button href="/wound/:id">View wound history</button>
                            </li>
                        </ul>
                    </Card>
                </Row>
            </Column>
        </Row>

    </Layout>
}

export default PatientPage;
