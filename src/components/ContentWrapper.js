import React from 'react'

const ContentWrapper = ({ eachProject }) => {
  const returnLibraryLists = eachProject.libraryList.map((el, idx) => (
    <img style={{ margin: '0 5px' }} key={idx} src={el} alt="" />
  ))
  return (
    <div className="content-wrapper">
      <div className="grid-section">
        <div className="img-area">
          <img src={eachProject.projectImgLink} alt="project-demo" />
        </div>
        <div className="summary">
          <h1 className="title">{eachProject.projectTitle}</h1>
          <div className="project-summary">{eachProject.projectSummary}</div>
        </div>
      </div>
      <div className="tech-area">
        <div className="tech-img-area">{returnLibraryLists}</div>
        <a target="_blank" rel="noopener noreferrer" href={eachProject.github}>
          <button className="btn-common github">Visit Github</button>
        </a>
        {eachProject.webpage && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={eachProject.webpage}
          >
            <button className="btn-common">Open the site</button>
          </a>
        )}
      </div>
    </div>
  )
}

export default ContentWrapper
