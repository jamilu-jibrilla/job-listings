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
    values: [],
    display: false
  });
  
  const handleRoleFilter = (e) => {
    let val = e.target.textContent
    setFilterBy({
      ... filterBy,
      role: val,
      values: filterBy.values.includes(val) ? [...filterBy.values] : [...filterBy.values, val],
      display: true
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
      display: true
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
      display: true
    }) 
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
        <div className={`${filterBy.display ? "header-card" : "none"} `}>
          <div>
            {filterBy.values.map(item=> (
              <h4>{item}</h4>
            ))}
          </div>
          <p onClick={()=>location.reload()}><a href="">clear</a></p>
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
