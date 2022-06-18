import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import {data} from './data.js'
function App() {
  let [filterBy, setFilterBy] = useState({
    role: "",
    level: "",
    lang: [""],
    tool: [""]  
  });
  
  const handleRoleFilter = (e) => {
    setFilterBy({
      ... filterBy,
      role: e.target.textContent
    })
  }

  const handleLevelFilter = (e) => {
    setFilterBy({
      ...filterBy,
      level: e.target.textContent
    }) 
  }

  const handleLanguageFilter = (e) => {
    setFilterBy({
      ...filterBy,
      lang: [ filterBy.lang = filterBy.lang.filter(item => item !== "")]
    })

    setFilterBy({
      ...filterBy,
      lang: [...filterBy.lang, e.target.textContent]
    }) 
  }

  const handleToolFilter = (e) => {
    setFilterBy({
      ...filterBy,
      tool: [filterBy.tool = filterBy.tool.filter(item => item !== "")]
    })

    setFilterBy({
      ...filterBy,
      tool: [...filterBy.tool, e.target.textContent]
    }) 
  }



  console.log(filterBy)
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
