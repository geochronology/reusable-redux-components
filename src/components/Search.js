import React, { useState } from 'react'
import { connect } from "react-redux";
import { searchList } from "../actions";

const Search = () => {

  const [query, setQuery] = useState("")

  const onInputChange = (e) => {
    setQuery(e.target.value)
  }

  const onButtonClick = (e) => {
    searchList(query)
  }

  return (
    <div>

      <div className="search">
        <input
          type="text"
          value={query}
          onChange={onInputChange}
        />
        <button onClick={onButtonClick}>Search</button>
      </div>

    </div>
  )
}


const mapDispatchToProps = {
  searchList
}

export default connect(null, mapDispatchToProps)(Search);
