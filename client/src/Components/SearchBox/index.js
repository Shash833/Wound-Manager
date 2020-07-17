import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchBox({ placeholder, onSearch, children }) {

    return <Search placeholder={placeholder} onSearch={onSearch} enterButton />
}

export default SearchBox