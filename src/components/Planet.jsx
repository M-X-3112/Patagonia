import React from 'react'
import "../Css/planet.css"

function Planet() {
  return (
    <div className='planet-main'>
        <div className='planet-bg'>
            <div className='planet-h2'>
                <h2>1% for the Planet</h2>
            </div>
        </div>
        <p>Since 1985, Patagonia has pledged 1% of sales to the preservation and restoration of the natural environment. We've awarded over $140 million in cash and in-kind donations to domestic and international grassroots environmental groups making a difference in their local communities. In 2002, founder of Patagonia, Yvon Chouinard, and Craig Mathews, owner of Blue Ribbon Flies, created a non-profit corporation to encourage other businesses to do the same.
            1% for the Planet is an alliance of businesses that understand the necessity of protecting the natural environment. They understand that profit and loss are directly linked to its health, and are concerned with the social and environmental impacts of industry.
            If you're a business owner (or have any influence over your boss), please consider becoming a member of this socially and environmentally progressive group. By contributing 1% of total annual sales to grassroots environmental groups, members of 1% for the Planet affect real change. And members receive other benefits: The satisfaction of paving the way for more corporate responsibility in the business community and the recognition, support and patronage of conscientious consumers who value serious commitment to the environment.
        </p>
        <a href='https://www.onepercentfortheplanet.org/' target='_blank'>Learn More</a>
    </div>
  )
}

export default Planet