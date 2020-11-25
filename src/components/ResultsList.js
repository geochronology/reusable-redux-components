import React from 'react';

const ResultsList = ({ results }) => {
  return (
    <div className="result-list">
      {results.map((result, index) => (
        <div className="result" key={index}>
          <div className="title">{result.title}</div>
          <div className="url">{result.url}</div>
        </div>
      ))}
    </div>
  )
}

export default ResultsList;