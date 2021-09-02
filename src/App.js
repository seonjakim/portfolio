import React from 'react'
import ContentWrapper from './components/ContentWrapper'
import Nav from './components/Nav'
import './styles/style.css'
import { projects, skills } from '../data/projectList'

const App = () => {
  const [isDay, setIsDay] = React.useState(true)
  const returnListOfProjects = projects.map((el, idx) => (
    <div
      key={idx}
      className={`section ${idx % 2 === 0 ? 'grey-background' : ''}`}
    >
      <ContentWrapper eachProject={el} />
    </div>
  ))
  const returnListOfSkills = skills.map((el, idx) => (
    <div key={idx} className="skills-icons-wrapper">
      <img style={{ height: '48px' }} src={el.png} alt="" />
      <h5 style={{ margin: '4px' }}>{el.library}</h5>
    </div>
  ))
  return (
    <div className={`main-wrapper ${isDay ? '' : 'dark'}`}>
      <nav style={{ display: 'flex', padding: '20px', alignItems: 'center' }}>
        <Nav />
        <div className="day-night" onClick={() => setIsDay(!isDay)}></div>
      </nav>
      <div className="developer-info">
        <div className="developer-photo"></div>
        <h1>Kim Seonja</h1>
        <h2>Frontend-developer</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3>{`< Skills / >`}</h3>
          <div style={{ display: 'flex' }}>{returnListOfSkills}</div>
        </div>
      </div>
      <div>{returnListOfProjects}</div>
    </div>
  )
}

export default App
