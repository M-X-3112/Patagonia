import { createContext } from "react";

export const DataContext = createContext()
const datam = {
    footer: [
        {id:1001, title:"We guarantee everything we make.", link:"View Ironclad Guarantee", img: "./src/images/footerimg/fimg1.svg", link2: "https://help.patagonia.com/s/article/Ironclad-Guarantee"},
        {id:1002, title:"We take responsibility for our impact.", link:"Explore Our Footprint", img: "./src/images/footerimg/fimg2.svg", link2: "https://www.patagonia.com/our-footprint/"},
        {id:1003, title:"We support grassroots activism.", link:"Visit Patagonia Action Works", img: "./src/images/footerimg/fimg3.svg", link2: "https://www.patagonia.com/actionworks/home/choose-location/"},
        {id:1004, title:"We keep your gear going.", link:"Visit Worn Wear", img: "./src/images/footerimg/fimg4.svg", link2: "https://wornwear.patagonia.com/?utm_source=patww&_gl=1*1bxnpat*_ga*MTMzODcxNTI5MC4xNjk4MTczODUx*_ga_1SYPSJZYJ5*MTcxMjY4MTgwMS40MjguMS4xNzEyNjg2NTE3LjU4LjAuMA.."},
        {id:1005, title:"We give our profits to the planet.", link:"Read Our Commitment", img: "./src/images/footerimg/fimg5.svg", link2:"https://www.patagonia.com/ownership/?utm_source=em&utm_medium=email&utm_campaign=032924_waterproof_packs&utm_klaviyo_id=01GQMSEZBFS4EVN0XWT17JF1ZY&_kx=C6wWb5w05CnmwyrkOY1UzetDRt60iq6vAGrpv71GOr8.YgU9me"}
    ],
    shops: {
        California : [
            {idLoc:2001, city:"California", shopName:"Patagonia San Francisco", point:"770 North Point", street:"San Francisco, CA 94109", phone:"(415) 771-2050", img: "san-fran.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12609.278459744583!2d-122.4199375!3d37.805982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580e13822999f%3A0x9845cc61066a1d2e!2sPatagonia!5e0!3m2!1saz!2saz!4v1735041872988!5m2!1saz!2saz"},
            {idLoc:2002, city:"California", shopName:"Patagonia Outlet Santa Cruz", point:"415 River St. #C", street:"Santa Cruz, CA 95060", phone:"(831) 423-1776", img: "santa-cruz.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12748.730561329365!2d-122.0298044!3d36.9815734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e4030ff63b1d9%3A0x4695e3e967355d59!2sPatagonia%20Outlet!5e0!3m2!1saz!2saz!4v1735041987428!5m2!1saz!2saz"},
            {idLoc:2003, city:"California", shopName:"Patagonia Pasadena", point:"47 N Fair Oaks Ave.", street:"Pasadena, CA 91103", phone:"(626) 795-0319", img: "pasadena.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13207.952160518922!2d-118.1507793!3d34.1466481!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c37176f0e5a5%3A0xec2017fbcae13b1e!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042094696!5m2!1saz!2saz"}                
        ],
        Colorado : [
            {idLoc:2004, city:"Colorado", shopName:"Patagonia Boulder", point:"1630 Pearl St.", street:"Boulder, CO 80302", phone:"(720) 677-5010", img: "boulder.jpg", direct: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.5262760370756!2d-105.2738417!3d40.01902799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec26389cc02b%3A0xe3e696e3f7d1265!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042221681!5m2!1saz!2saz"},
            {idLoc:2005, city:"Colorado", shopName:"Patagonia Telluride", point:"200 W Colorado Ave", street:"Telluride, CO 81435", phone:"(970) 239-7058", img: "noimg.png", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12586.845635854124!2d-107.811994!3d37.9371719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873ed862ba6ea6fb%3A0x996c6e1ad5f5592a!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042281373!5m2!1saz!2saz"},
            {idLoc:2006, city:"Colorado", shopName:"Patagonia Denver", point:"2600 Walnut St", street:"Denver, CO 80205", phone:"(303) 446-9500", img: "denver.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12268.518631948862!2d-104.9857545!3d39.7591972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78c4f8e25c51%3A0x4ddc419de750ceaa!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042331387!5m2!1saz!2saz"}                
        ],
        Columbia : [
            {idLoc:2007, city:"District of Columbia", shopName:"Patagonia Washington DC", point:"3104 M St NW", street:"Washington, DC, 20007", phone:"(202) 333-1776", img: "wasington.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12419.31448667703!2d-77.061395!3d38.9050342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b64eb2c379c3%3A0xc52d116dc17ec808!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042371952!5m2!1saz!2saz"}
        ],
        Georgia : [
            {idLoc:2008, city:"Georgia", shopName:"Patagonia Atlanta Buckhead", point:"34 E. Andrews Dr.", street:"Atlanta, GA 30305", phone:"(404) 266-8182", img: "atlanta.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13255.193138140787!2d-84.3803432!3d33.8433123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5058bdf14f0a1%3A0x920efe259c65184c!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042408489!5m2!1saz!2saz"},
            {idLoc:2009, city:"Georgia", shopName:"Patagonia Atlanta BeltLine", point:"124 Krog St NE", street:"Atlanta, GA 30307", phone:"(470) 947-7432", img: "beltline.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13268.522907600489!2d-84.3647573!3d33.7572876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5035e7aa1a70b%3A0x7708afd812294bc1!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042438215!5m2!1saz!2saz"}
        ],
        Hawaii : [
            {idLoc:2010, city:"Hawaii", shopName:"Patagonia Hale'iwa", point:"66-250 Kamehameha Hwy", street:"Haleiwa, HI 96712", phone:"(808)-751-1477", img: "haleiwa.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14839.981195453798!2d-158.1029216!3d21.5861066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0058d374949f85%3A0x18a3720c8b008098!2sPatagonia%20Surf!5e0!3m2!1saz!2saz!4v1735042486841!5m2!1saz!2saz"},
            {idLoc:2011, city:"Hawaii", shopName:"Patagonia Honolulu", point:"535 Ward Ave.", street:"Honolulu, HI 96814", phone:"(808) 593-7502", img: "honolulu.webp", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14869.320342801895!2d-157.8531129!3d21.2979696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006de2afc083a5%3A0xc3567189cd93fb79!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042522686!5m2!1saz!2saz"}
        ],
        Minnesota : [
            {idLoc:2012, city:"Minnesota", shopName:"Patagonia St. Paul", point:"1648 Grand Ave.", street:"St. Paul, MN 55105", phone:"(651) 698 1703", img: "paul.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11296.767406266532!2d-93.170161!3d44.9397677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62a19ab9114bd%3A0x373d766c74210672!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042572116!5m2!1saz!2saz"}
        ],
        Nevada : [
            {idLoc:2013, city:"Nevada", shopName:"Patagonia Outlet Reno", point:"130 South Center St.", street:"Reno, NV 89501", phone:"(775) 746-6878", img: "reno.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12310.312894907447!2d-119.8104639!3d39.5240081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8099440bf01d9705%3A0x540070c01d94f6c7!2sPatagonia%20Outlet!5e0!3m2!1saz!2saz!4v1735042633310!5m2!1saz!2saz"}
        ],
        NewYork : [
            {idLoc:2014, city:"New York", shopName:"Patagonia NYC SoHo", point:"72 Greene Street", street:"New York, NY 10012", phone:"(212) 334-5213", img: "soho.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12095.054675656665!2d-74.0005998!3d40.7232188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c241f68b1%3A0x7dd6859db0bc2c31!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042671137!5m2!1saz!2saz"},
            {idLoc:2015, city:"New York", shopName:"Patagonia NYC Upper West Side", point:"426 Columbus Ave.", street:"New York, NY 10024", phone:"(917) 441-0011", img: "west-side.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12084.17622228663!2d-73.9750827!3d40.7830456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f654c7ed9%3A0xb65967b36af9f457!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042707969!5m2!1saz!2saz"},
            {idLoc:2016, city:"New York", shopName:"Patagonia Brooklyn", point:"70 N 6th St", street:"Brooklyn, NY 11249", phone:"646-916-4027", img: "brooklyn.webp", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12095.79112940154!2d-73.9615525!3d40.719166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259827405541f%3A0x1aabe7bc324d0457!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042737697!5m2!1saz!2saz"}
        ],
        Pennsylvania : [
            {idLoc:2017, city:"Pennsylvania", shopName:"Patagonia Pittsburgh", point:"5509 Walnut St.", street:"Pittsburgh, PA 15232", phone:"(412) 214-8388", img: "pitts.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12144.298077717096!2d-79.9333157!3d40.4514876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f2110737c9f3%3A0x45fc7df9497d5395!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042771717!5m2!1saz!2saz"}
        ],
        Texas : [
            {idLoc:2018, city:"Texas", shopName:"Patagonia Dallas", point:"2626 Main St", street:"Dallas, TX 75226", phone:"(469) 676-4836", img: "dallas.webp", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13417.331570166414!2d-96.7854103!3d32.7834315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99c08bd60237%3A0x36d94c2f99ea6628!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042826628!5m2!1saz!2saz"},
            {idLoc:2019, city:"Texas", shopName:"Patagonia Austin", point:"316 Congress Avenue", street:"Austin, TX 78701", phone:"(512) 320-8383", img: "austin.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13783.946189730075!2d-97.7438133!3d30.2659645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b50842cb6301%3A0x914a12d0c6194b65!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042854563!5m2!1saz!2saz"}
        ],
        Utah : [
            {idLoc:2020, city:"Utah", shopName:"Patagonia Outlet Salt Lake City", point:"2292 S. Highland Dr.", street:"Salt Lake City, UT 84106", phone:"(801) 466-2226", img: "utah.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12095.475843459053!2d-111.8584888!3d40.7209011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528aa02040d449%3A0x138de058e9256459!2sPatagonia%20Outlet!5e0!3m2!1saz!2saz!4v1735042882357!5m2!1saz!2saz"}
        ],
        Washington : [
            {idLoc:2021, city:"Washington", shopName:"Patagonia Seattle", point:"2100 First Ave.", street:"Seattle, WA 98121, UT 84106", phone:"(206) 622-9700", img: "seattle.jpg", direct: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10758.882042439187!2d-122.3440582!3d47.612124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154d1cc06867%3A0xc43ebb49edde7d88!2sPatagonia!5e0!3m2!1saz!2saz!4v1735042913637!5m2!1saz!2saz"}
        ]
    },
    cards: [
        {id: 8134, name: "Men's", img: "mens-routing.jpg", route: "/men"},
        {id: 8135, name: "Women's", img: "womens-routing.jpg", route: "/women"},
        {id: 8136, name: "Kid's & Baby", img: "kids-routing.jpg", route: "/kids"},
        {id: 8137, name: "Packs & Gear", img: "packs-gear-routing.jpg", route: "/gears"},
        {id: 8138, name: "Shop Used", img: "worn-wear-routing.jpg", route: "https://wornwear.patagonia.com/?utm_source=ecomm&utm_medium=internal&utm_campaign=catalog&_gl=1*1t5qyqg*_gcl_aw*R0NMLjE3MTk1MTI4NzcuQ2p3S0NBandtX1N6QmhBc0Vpd0FYRTJDdjdubWN5LWZtUlZEYnFlaF85Rkh1OHR0YmVmTS1BN0prLW5kdzdCc1hFYUlZR2N5UVlYZ3Nob0NINFFRQXZEX0J3RQ..*_gcl_au*MzI4MDI2NjI5LjE3MTg5MjYxMjI.*_ga*MTQ4MDIxMzk1OS4xNzE4OTI2MTIy*_ga_1SYPSJZYJ5*MTcxOTkzNDgwNy4xOS4xLjE3MTk5MzUxMDMuNTkuMC4w"},
        {id: 8139, name: "Food", img: "food-routing.jpg", route: "https://www.patagoniaprovisions.com/?utm_source=patagonia.com&utm_medium=referral&utm_campaign=category_card"},
        {id: 8140, name: "Books", img: "books-routing.jpg", route: "/books"},
    ],
    selection: [
        {id: 5901, name: "Skiing & Snowboarding", img: "select1.jpg", route: "/skiing"},
        {id: 5902, name: "Climbing", img: "select2.jpg", route: "/climbing"},
        {id: 5903, name: "Trail Running", img: "select3.jpg", route: "/running"},
    ],
    story: [
        {id: 6231, name: "A letter from Yvon Choinard", desc: "Earth is now our only shareholder." , img: "yvon.webp", route: "https://www.patagonia.com/ownership/"},
        {id: 6232, name: "Riding Out the Storm", desc: "How the worst climbing conditions can bring out the best in us.", img: "smith.webp", route: "https://www.patagonia.com/stories/riding-out-the-storm/story-156513.html"},
        {id: 6233, name: "Field Notes from a Gear Tester", desc: "A season of testing in Washington State.",img: "gnam.webp", route: "https://www.patagonia.com/stories/field-notes-from-a-gear-tester/story-155802.html"},
        {id: 6234, name: "Riders of the Night", desc: "As temperatures rise in the Southwest, mountain bikers in Phoenix, Arizona, are going nocturnal to escape the heat.", img: "andrew.webp", route: "https://www.patagonia.com/stories/riders-of-the-night/story-156320.html"}
    ]
}
export default datam