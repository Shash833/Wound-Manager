import React from "react";
import { PageHeader } from 'antd'

function Header({ children, subtitle }) {
    return <PageHeader
        className="site-page-header"
        // onBack={() => null}
        title="Wound Manager"
        subTitle={subtitle}>{children}</PageHeader>
}
export default Header;
