import React, { useContext, useState } from 'react'
import { DataContext } from '../Data/Data'
import "../Css/location.css"

const path = "./public/images/location/"

function Location() {
    const { shops } = useContext(DataContext)
    const [location, setLocation] = useState("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13187.11628800939!2d-119.3040274!3d34.2796855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e9ac8ce4b2f38f%3A0xb899559b0a091340!2sPatagonia!5e0!3m2!1saz!2saz!4v1733092858953!5m2!1saz!2saz")

    const cityOptions = [...new Set(Object.keys(shops))] 
    const [selectedCity, setSelectedCity] = useState('') 
    const [searchTerm, setSearchTerm] = useState('') 

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value)
    }

    const inputChangener = (event) => {
        setSearchTerm(event.target.value.toLowerCase()) 
    }

    const cityShops = selectedCity ? shops[selectedCity] : Object.values(shops).flat();

    
    const filteredShops = cityShops.filter(shop => 
        shop.shopName.toLowerCase().includes(searchTerm)
    );

    return (
        <div className='location-main'>
            <h1 className='location-h1-1'>Patagonia Stores & Authorized Dealers</h1>
            <div className="map">
                <div className="left-search">
                    <div className="input-bar">
                        <input
                            className='loc-input'
                            type="text"
                            placeholder='Search for locations...'
                            onChange={inputChangener} 
                            value={searchTerm}
                        />
                    </div>
                    <div className="search-target">
                        {filteredShops.map((item, index) => (
                            <a key={index} onClick={() => setLocation(item.direct)}>{item.shopName}</a>
                        ))}
                    </div>
                </div>
                { location && <iframe src={location}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> }
            </div>
            <h1 className='location-h1-2'>Patagonia Stores</h1>
            <select value={selectedCity} onChange={handleCityChange}>
                <option value="">All Cities</option>
                {cityOptions.map((city, index) => 
                    <option key={index} value={city}>{city}</option>
                )}
            </select>
            {selectedCity && <h3 className='loc-name'>{selectedCity}</h3>}
            <div className="shops-list">
                {selectedCity === '' ? (
                    cityOptions.map((city, index) => (
                        <div className='shop-le' key={index}>
                            <h3>{city}</h3>
                            <div className='shop-col'>
                                {shops[city].map((shop) => (
                                    <div key={shop.idLoc}>
                                        <img src={`${path}${shop.img}`} alt={shop.shopName} />
                                        <h4>{shop.shopName}</h4>
                                        <p>{shop.point}</p>
                                        <p>{shop.street}</p>
                                        <p>{shop.phone}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='category-col'>
                        {filteredShops.map((shop, index) => ( 
                            <div className='shop-category' key={index}>
                                <img src={`${path}${shop.img}`} alt={shop.shopName} />
                                <h4>{shop.shopName}</h4>
                                <p>{shop.point}, {shop.street}</p>
                                <p>{shop.phone}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Location
