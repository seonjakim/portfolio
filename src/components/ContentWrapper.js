import React from 'react'

const ContentWrapper = ({ eachProject }) => {
  const returnLibraryLists = eachProject.libraryList.map((el, idx) => (
    <img key={idx} src={el} alt="" />
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
        <button className="btn-common github">Visit Github</button>
        <button className="btn-common">Open the site</button>
      </div>
    </div>
  )
}

export default ContentWrapper
