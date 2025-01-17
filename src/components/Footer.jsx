import React, { useContext } from 'react'
import "../Css/Footer.css"
import  { DataContext } from '../Data/Data'
import { Link } from 'react-router-dom'
function Footer() {
    const {footer} = useContext(DataContext)    
  return (
    <div className='footer-main'>
        <div className="footer-top">
            {footer.map((item) => 
                <div className='ft-s' key={item.id}>
                    <img src={item.img} alt="ft-s" />
                    <h2>{item.title}</h2>
                    <a href={item.link2}>{item.link}</a>
                </div>
            )}
        </div>
        <div className="footer-down">
            <div className='signup'>
                <h3>Newsletter Signup</h3>
                <p>Sign up for exclusive offers, original stories, activism awareness, events and more.</p>
                <div className="container">
                    <input required="required" type="email" name="text" className="input" placeholder='Email Adress' />
                    <label className="label">E-Mail*</label>
                    <button className='btn-sign'>Sign Me Up</button>
                    <p className='field-r'>This field is required</p>
                </div>
            </div>
            <div className='help'>
                <h3>Need Help?</h3>
                <div className='buttons-f'>
                    <a href="https://help.patagonia.com/s/" target='_blank'>Help Center</a>
                    <Link to="/order">Order Status</Link>
                    <a href='https://www.patagonia.com/guides/size-fit/' target='_blank'>Size & Fit Guide</a>
                    <a href='https://www.patagonia.com/returns.html' target='_blank'>Return & Exchanges</a>
                    <a href='https://www.patagonia.com/repairs/' target='_blank'>DIY Care & Repair</a>
                    <a>Login</a>
                    <a href='https://www.patagonia.com/web-accessibility.html' target='_blank'>Accessibility Statement</a>
                </div>
                <p>If you are using a screen reader and having difficulty please call us at <a href="tel: +18006386464">1-800-638-6464</a></p>
                <a href="https://www.patagonia.com/do-not-sell-my-info.html">Do Not Sell or Share My Data</a>
            </div>
            <div className='info'>
                <h3>More Info</h3>
                    <div className='info-links'>
                        <div className='info-l'>
                            <a href="https://www.patagonia.com/actionworks/" target="_blank">Patagonia Action Works™</a>
                            <a href="https://www.patagoniaprovisions.com/?utm_source=patagonia.com&utm_medium=referral&utm_campaign=global_nav" target="_blank">Patagonia Provisions®</a>
                            <a href="https://wornwear.patagonia.com/?utm_source=patww" target="_blank">Worn Wear®</a>
                            <Link to={"/events"}>Events</Link>
                            <Link to={"/planet"}>1% For The Planet®</Link>
                            <Link to={"/giftcard"}>Gift Cards</Link>
                            <Link to={'/location'}>Find a Store</Link>
                            <a href="https://careers.patagonia.com/us/en" target='_blank'>Careers</a>
                            <a href="https://www.patagoniaworks.com/#index" target='_blank'>Press</a>
                        </div>
                        <div className='info-r'>
                            <a href="https://www.patagonia.com/pro/" target='_blank'>Patagonia Pro Program</a>
                            <a href="https://www.patagonia.com/stories/our-acknowledgment/story-91580.html" target='_blank'>Our Acknowledgment</a>
                            <a href="https://help.patagonia.com/s/article/International-Shipping-Information" target='_blank'>International Orders</a>
                            <a href="https://www.patagonia.com/group-sales/" target='_blank'>Group Sales</a>
                            <a href="https://www.patagonia.com/privacy-notice.html" target='_blank'>Privacy Notice</a>
                            <a href="https://www.patagonia.com/terms-of-use.html" target='_blank'>Terms of Use</a>
                            <a href="https://www.patagonia.com/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dwa3116d38/slots/RMA/PAT_2024_LegalDocuments-ModernSlaveryAct-060324.pdf" target='_blank'>Statement on Modern Slavery in Supply Chain</a>
                            <a href="https://www.patagonia.com/sitemap/" target='_blank'>Sitemap</a>
                            <a href="https://www.patagonia.com/voluntary-recall-of-capilene-cool-daily-and-tropic-comfort-upf-products/" target='_blank'>UPF Recall</a>
                            <a href="https://www.patagonia.com/product-safety-recall-of-infant-capilene-midweight-set/" target='_blank'>Infant Product Recall</a>
                        </div>
                </div>
            </div>
        </div>
        <div className="footer-last">
            <p>© 2024 Patagonia, Inc. All Rights Reserved.</p>
            <div><span>English</span><img src="./src/images/footerimg/US.svg" alt="English" /></div>
        </div>
    </div>
  )
}

export default Footer