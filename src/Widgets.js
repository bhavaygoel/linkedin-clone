import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import InfoIcon from '@mui/icons-material/Info'
import React from 'react'
import "./Widgets.css"
function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Hey my first React App", "Top news!")}
        {newsArticle("Testing", "Yes whatever!")}
        {newsArticle("Testing", "Yes whatever!")}
        {newsArticle("Testing", "Yes whatever!")}
        {newsArticle("Testing", "Yes whatever!")}
        {newsArticle("Testing", "Yes whatever!")}
        {newsArticle("Tribute to Vikram", "well i know you didn't see that coming")}
    </div>
  )
}

export default Widgets