import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { WoundContext } from "../../Context/WoundContext"
import { Table, Space } from 'antd';

const { Column } = Table;


function Tables({ data }) {
    const { setWound } = useContext(WoundContext)

    async function selectWound(data) {
        try {
            setWound(data)
            console.log("WOUND CONTEXT", data)
        }
        catch (error) { console.log(error) }
    }

    return <Table dataSource={data}>
        <Column title="Location" dataIndex="WoundLocation" key="WoundLocation" />
        <Column title="Date" dataIndex="DateDiscovered" key="DateDiscovered" />
        <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle" key={data.id}>
                    <Link to={"/wound"} onClick={() => selectWound(record)}>View Wound</Link>
                </Space>
            )}
        />
    </Table>

}

export default Tables;