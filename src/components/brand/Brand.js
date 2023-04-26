import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import './Brand.css'

const Brand = () => {
  return (
    <div className='gpt3_brand_section section__padding'>
      <div>
        <img src={google} alt="Not found" />
      </div>
      <div>
        <img src={slack} alt="Not found" />
      </div>
      <div>
        <img src={atlassian} alt="Not found" />
      </div>
      <div>
        <img src={dropbox} alt="Not found" />
      </div>
      <div>
        <img src={shopify} alt="Not found" />
      </div>
    </div>
  )
}

export default Brand