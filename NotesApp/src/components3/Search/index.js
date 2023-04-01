import React , { useState } from 'react'
import style from "./style.module.css"

import { useSelector } from 'react-redux'

function Search() {

  const notes = useSelector((state) => state.notes.items)

  console.log("search" , notes)

  const [filterText , setFilterText] = useState("");

  const filtered = notes.filter((item) => { 
    return Object.keys(item).some(() => item.title
    .toString()
    .toLowerCase()
    .includes(filterText.toLowerCase()))
  })

  return (
    <div className={style.search}>
      <input className={style.searchInput} value={filterText} onChange={(e) => setFilterText(e.target.value)} placeholder='Search...' />
      {filterText !== "" && (
              <div className={style.filter}>
              <ul>
                {filtered.map((data) => (
                  <li key={data.id}>{data.title}</li>
                ))}
              </ul>
            </div>
      )}
    </div>
  )
}

export default Search
