import React from 'react'
import Search from '../components/Search'
import { connect, useSelector } from 'react-redux';
import ResultsList from "../components/ResultsList";

export const ResultsPage = () => {

  const results = useSelector(state => state.results)

  return (
    <div className="container">
      <h1>Results Page</h1>
      <Search />
      <ResultsList results={results} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    results: state.results
  }
}

export default connect(mapStateToProps, null)(ResultsPage)