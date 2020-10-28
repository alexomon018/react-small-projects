import React from 'react'

function Companies({ companies, filterCompanies, active }) {
  return (
    <>
      {companies.map((company) => {
        return (
          <button
            className={`job-btn ${active ? 'active-btn' : 'false'}`}
            onClick={() => filterCompanies(company)}
          >
            {company}
          </button>
        )
      })}
    </>
  )
}

export default Companies
