import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { searchList } from "../actions";

const Search = () => {

  const [query, setQuery] = useState("")
  const dispatch = useDispatch()

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
        <button onClick={dispatch(searchList(query))}>Search</button>
      </div>

    </div>
  )
}

export default Search;
