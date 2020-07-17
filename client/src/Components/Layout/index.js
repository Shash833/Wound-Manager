import React from "react";
import { Layout } from 'antd'
const { Content, Footer } = Layout;

function Layouts({ children }) {
    return <Layout style={{ height: '100%' }}>
        <Content style={{ padding: '0 50px' }}>{children}</Content>
        {/* <Footer style={{ textAlign: 'center' }}>Wound Manager ©2020</Footer> */}
    </Layout>
}

export default Layouts;

