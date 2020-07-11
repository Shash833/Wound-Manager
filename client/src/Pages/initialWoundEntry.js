import React from "react";
import Layout from "../Components/Layout"
import Row from "../Components/Row"
import Column from "../Components/Columns"
import Form from "../Components/Form"
import Input from "../Components/FormItem"
import Card from "../Components/Card"
import Button from "../Components/Button"

function InitialWoundEntry() {
    return <Layout>
        <Row>
            <Column>
                <Card title="Initial Wound Entry">
                    <Form>
                        <Input label="Location:">
                        </Input>
                        <Input label="Aetiology:">
                        </Input>
                        <Input label="Date discovered">
                        </Input>
                        <Input label="Additional objective or diagnostic assessments:"></Input>
                    </Form>
                </Card>
            </Column>
        </Row>
    </Layout>
}

export default InitialWoundEntry;
