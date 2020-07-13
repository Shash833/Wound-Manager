import React, { useContext, useState, useEffect } from "react";
import Row from "../Components/Row"
import Column from "../Components/Columns"
import Card from "../Components/Card"
import Layout from "../Components/Layout"
import List from "../Components/List"
import ListItem from "../Components/ListItem"
import Button from "../Components/Button"
import axios from "axios"
import { WoundContext } from "../Context/WoundContext"

function WoundHistoryPage() {

    const { Wound } = useContext(WoundContext)
    const [assessmentList, setList] = useState([])
    const [singleAssessment, setAssessment] = useState({})

    async function loadAssessments() {
        try {
            const { data } = await axios.get(`/api/AllAssessments/${Wound.id}`)
            setList(data)
            // console.log("Assessments", data)
            // console.log(searchResults)
        }
        catch (error) { console.log(error) }
    }

    async function oneAssessment(id) {
        try {
            const { data } = await axios.get(`/api/assessment/${id}`)
            setAssessment(data)
        }
        catch (error) { console.log(error) }
    }

    useEffect(() => {
        loadAssessments()
    }, [])


    useEffect(() => {
        console.log(singleAssessment)
    }, [singleAssessment])



    return <Layout>
        <Row>
            <Column span={10}>
                <Row>
                    <Card title={"Wound details:"}>
                        <p><b>Wound Location: </b>{Wound.WoundLocation}</p>
                        <p><b>Date Discovered: </b>{Wound.DateDiscovered}</p>
                        <p><b>Aetiology: </b>{Wound.Aetiology}</p>
                        <p><b>Additional Information/Assessments: </b>{Wound.AdditionalInfo}</p>
                    </Card>
                </Row>
                <Button link={"/wound_assessment"}>Enter New Assessment</Button>
                <Card title={"Assessment History"}>
                    <List>
                        {assessmentList.map(({ AssessmentDate, id }) => (
                            <ListItem key={id}>
                                <Button onClick={() => oneAssessment(id)} ><p><b>Review Date:</b> {AssessmentDate} </p></Button>
                            </ListItem>
                        ))}
                    </List>
                </Card>
            </Column>
            <Column span={14}>

                <Row>
                    {singleAssessment.id ?
                        (<Card title={`Wound review (${singleAssessment.AssessmentDate})`}>
                            <h3>Assessment Details:</h3>
                            <ul>
                                <li><b>Tissue Base:</b> {singleAssessment.TissueBase}</li>
                                <li><b>Infection:</b> {singleAssessment.Infection} </li>
                                <li><b>Odour:</b> {singleAssessment.Odour}</li>
                                <li><b>Moisture:</b> {singleAssessment.Moisture} </li>
                                <li><b>Edges:</b> {singleAssessment.Edges} </li>
                                <a><b>Dimensions:</b></a>
                                <li><b>Length: </b> {singleAssessment.Length}mm</li>
                                <li><b>Width:</b> {singleAssessment.Width}mm </li>
                                <li><b>Depth: </b> {singleAssessment.Depth}mm</li>
                            </ul>
                            <h3>Dressing Regimen:</h3>
                            <ul>
                                <li><b>Cleanse: </b>{singleAssessment.Cleanse}</li>
                                <li><b>Primary Dressing: </b>{singleAssessment.Primary}</li>
                                <li><b>Secondary Dressing: </b>{singleAssessment.Secondary}</li>
                                <li><b>Fixation: </b>{singleAssessment.Fixation}</li>
                                <li><b>Additional Interventions: </b>{singleAssessment.Additional}</li>
                            </ul>
                        </Card>) :
                        <p>Select previous wound assessment to review here.</p>}

                </Row>
            </Column>
        </Row>
    </Layout >
}

export default WoundHistoryPage;
