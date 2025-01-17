import React from 'react'
import "../Css/gift.css"
function GiftCard() {
  return (
    <div className='gift-card'>
        <div className='card'>
            <div className="card-swipe">
                <img src="./src/images/gift_card_fitz_roy.webp" alt="gift card" />
                <div className='card-text'>
                    <h1>Digital Gift Card</h1>
                    <p>Let them choose with a Patagonia digital gift card. After checkout, 
                    the digital gift card code will be sent via email within 24 hours. Codes
                     are redeemable only in the U.S. at Patagonia.com, WornWear.com and Patagonia
                     stores (not Patagonia Provisions). Visit Patagonia Provisions to purchase a gift card for food.</p>
                </div>
            </div>
            <div className="card-down">
                <div className="card-left">
                    <h3>Gift Card Amount</h3>
                    <div className="card-ticket">
                        <button>25 $</button>
                        <button>50 $</button>
                        <button>75 $</button>
                        <button>100 $</button>
                    </div>
                    <h3>Message to recipient</h3>
                    <textarea placeholder='Gift Message *'></textarea>
                </div>
                <div className="card-right">
                    <h3>Details</h3>
                    <input type="text" placeholder="name *" />
                    <input type="text" placeholder="Recipdent name *" />
                    <input type="text" placeholder="E-mail adress *" />
                    <input type="text" placeholder="Confirm E-mail adress *" />
                    <div className="add-cart">
                        <button>Add to Cart</button>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default GiftCard