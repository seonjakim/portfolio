import React from 'react'
import ContentWrapper from './components/ContentWrapper'
import './styles/style.css'
import { projects } from '../data/projectList'

const App = () => {
  const returnListOfProjects = projects.map((el, idx) => (
    <div
      key={idx}
      className={`section ${idx % 2 === 0 ? 'grey-background' : ''}`}
    >
      <ContentWrapper eachProject={el} />
    </div>
  ))
  return (
    <>
      <div className="developer-info">
        <div className="developer-photo"></div>
        <h1>Kim Seonja</h1>
        <h2>Frontend-developer</h2>
      </div>
      <div>{returnListOfProjects}</div>
    </>
  )
}

export default App
