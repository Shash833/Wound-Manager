import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { PatientContext } from "../../Context/PatientContext";
import { Table, Space } from 'antd';

const { Column } = Table;


function Tables({ data }) {
    const { setPatient } = useContext(PatientContext)

    async function selectPatient(data) {
        try {
            setPatient(data)
            console.log("PATIENT CONTEXT", data)
        }
        catch (error) { console.log(error) }
    }

    return <Table dataSource={data}>
        <Column title="Surname" dataIndex="LastName" key="LastName" />
        <Column title="First Name" dataIndex="FirstName" key="FirstName" />
        <Column title="D.O.B" dataIndex="DOB" key="DOB" />
        <Column title="Address" dataIndex="Address" key="Address" />
        <Column
            title=""
            key="action"
            render={(text, record) => (
                <Space size="middle" key={data.id}>
                    <Link to={"/patient"} onClick={() => selectPatient(record)}>Select Patient</Link>
                </Space>
            )}
        />
    </Table>

}

export default Tables;