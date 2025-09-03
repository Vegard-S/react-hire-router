/* eslint-disable no-unused-vars */

import { Link, Route, Routes } from "react-router-dom"

/* eslint-disable react/prop-types */
function PeopleListItem(props) {
  const { person, id} = props


  return (
    <>
      <Link to={`/view/${id}`}>
        <li>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
          {person.wage && <p>Wage: £{person.wage}</p>}
        </li>
      </Link>
    </>
  )
}

export default PeopleListItem
