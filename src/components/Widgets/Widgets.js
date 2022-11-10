import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>
          {heading}
        </h4>
        <p>
          {subtitle}
        </p>
      </div>
    </div>
  }

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle('Influencers debate leaving Twitter, but where would they go', 'US politics:November 2022')}
      {newsArticle('TikTok going big on US e-commerce? Job listings  offer clues', 'News:October 2022')}
      {newsArticle('Shaping the future of sales strategy', 'Sponsored:October 2022')}
      {newsArticle('LinkedIn connections might not get you a better job, secret experiment reveals', 'Tech:September 2022')}
      {newsArticle('How sellers are winning in today`s challenging new world', 'Business:August 2022')}
      {newsArticle('Microsoft blames economic woes for missing profit targets', 'News: July 2022')}
    </div>
  )
}

export default Widgets
