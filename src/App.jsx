import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import {data} from './data.js'
function App() {
  
  let [filterBy, setFilterBy] = useState({
    role: "",
    level: "",
    lang: [""],
    tool: [""],
    values: []
  });
  
  const handleRoleFilter = (e) => {
    let val = e.target.textContent
    setFilterBy({
      ... filterBy,
      role: val,
      values: filterBy.values.includes(val) ? [...filterBy.values] : [...filterBy.values, val],
    })
  }

  const handleLevelFilter = (e) => {
    let val = e.target.textContent
    setFilterBy({
      ...filterBy,
      level: val,
      values: filterBy.values.includes(val) ? [...filterBy.values] : [...filterBy.values, val],
      display: true
    }) 
  }

  const handleLanguageFilter = (e) => {
    let val = e.target.textContent
    setFilterBy({
      ...filterBy,
      lang: [ filterBy.lang = filterBy.lang.filter(item => item !== "")]
    })

    setFilterBy({
      ...filterBy,
      lang: [...filterBy.lang, val],
      values: filterBy.values.includes(val) ? [...filterBy.values] : [...filterBy.values, val],
    }) 
  }

  const handleToolFilter = (e) => {
    let val = e.target.textContent
    setFilterBy({
      ...filterBy,
      tool: [filterBy.tool = filterBy.tool.filter(item => item !== "")]
    })

    setFilterBy({
      ...filterBy,
      tool: [...filterBy.tool, val],
      values: filterBy.values.includes(val) ? [...filterBy.values] : [...filterBy.values, val],
    }) 
  }

const handleClear=()=> {
  setFilterBy({
    role: "",
    level: "",
    lang: [""],
    tool: [""],
    values: []
  })
}

const handleItemClear=(e)=> {
  for(let key in filterBy) {
    if(key === "role" || key === "level" || key === "lang" || key === "tool") {
      if(filterBy[key].includes(e.target.className)) {
       if(typeof filterBy[key] === "string") {
          setFilterBy({
            ... filterBy,
            [key]: "",
            values: filterBy.values.filter(item=> item != e.target.className)
          })
        } else if(typeof filterBy[key] === "object") {
          setFilterBy({
            ... filterBy,
            [key]: filterBy[key].filter(item => item !== e.target.className),
            values: filterBy.values.filter(item=> item != e.target.className)
          })
        }
      }
    }
  }

}

  let filteredReturn = data.filter(item => {
    return (
            item.role.includes(filterBy.role) &&
            item.level.includes(filterBy.level) &&
            filterBy.lang.every(filter_item => item.languages.join("").includes(filter_item)) &&
            filterBy.tool.every(filter_item => item.tools.join("").includes(filter_item))            
    )})

  return (
    <div className="App">
      <header className='header'>
        <div className={`${filterBy.values.length ? "header-card" : "none"} `}>
          <div>
            {filterBy.values.map(item=> (
              <h4>{item} <span className={item} onClick={handleItemClear}>X</span> </h4>
            ))}
          </div>
          <p onClick={handleClear}>clear</p>
        </div>
      </header>
      <div className="container">
        {filteredReturn.map(item => (
          <Card item={item}
              handleRoleFilter={handleRoleFilter}
              handleLevelFilter={handleLevelFilter} 
              handleLanguageFilter={handleLanguageFilter}
              handleToolFilter={handleToolFilter}/>
        ))}
      </div>
    </div>
  )
}

export default App
