import React from 'react'

function SearchBox({ placeholder, onSearch, onChange }) {

    return <div className="field has-addons">
        <div className="control searchBox">
            <input className="input" type="text" placeholder={placeholder} onSubmit={onSearch} onChange={onChange} />
        </div>
        <div className="control searchBox">
            <a className="button is-info" onClick={onSearch}>
                Search</a>
        </div>
    </div>
}

export default SearchBox