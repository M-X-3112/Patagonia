import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/homepage.css";
import { DataContext } from "../Data/Data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SliderHome from "../slider/SliderHome";

function HomePage() {
  const videoRef = useRef(null);
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const {selection, story } = useContext(DataContext);
  const path = "./public/images/cards/";
  const path2 = "./public/images/";


    return (
    <div className="home-main">
      <div className="home-1">
        <img src="./src/images/home-1.png" alt="homepage-photo" />
        <div className="blue-box">
          <h2>The gift is what they’ll do with it.</h2>
          <div className="link-home">
            <Link className="link-1" to={"/men"}>
              Men's
            </Link>
            <Link className="link-1" to={"women"}>
              Women's
            </Link>
            <Link className="link-1" to={"/kids"}>
              Kids & Baby
            </Link>
          </div>
        </div>
      </div>
      <div className="category-home">
        <div className="links-to-category" style={{ scrollbarWidth: "none" }}>
          <Link className="link-c" to={"/jackets"}>
            Jackets
          </Link>
          <Link className="link-c" target="_blank" to={"https://wornwear.patagonia.com/?utm_source=ecomm&utm_medium=internal&utm_campaign=global_nav_L1"}>
            Shop Used
          </Link>
          <Link className="link-c" to={"/bestseller"}>
            Best Sellers
          </Link>
          <Link className="link-c" to={"/tops"}>
            Tops
          </Link>
          <Link className="link-c" to={"/bottoms"}>
            Bottoms
          </Link>
          <Link className="link-c" to={"/accesories"}>
            Hats & Accessories
          </Link>
          <Link className="link-c" to={"/kids"}>
            Kids & Babies
          </Link>
          <Link className="link-c" to={"/gears"}>
            Gears
          </Link>
          <Link className="link-c" to={"/socks"}>
            Socks & Underwear
          </Link>
        </div>
        <hr className="hr-1" />
      </div>

      <SliderHome />
      
      <div className="main-video">
        <div className="video-tag">
          <h3>In Deep</h3>
          <p>
            We know our obsession with snow outerwear is probably unhealthy, but
            when you’re constantly dreaming about wild peaks and bottomless
            powder, you can’t help but go over-the-dome deep.
          </p>
          <button onClick={handleFullscreen} className="video-b">
            Watch
          </button>
        </div>
        <video ref={videoRef} id="background-video" autoPlay loop muted>
          <source src="./src/images/Papsura.mp4" type="video/mp4" />
        </video>
        <div className="black-window"></div>
      </div>
      <h2 className="story-h2">Activism Sports</h2>
      <div className="select-main">
        {selection.map((item) => (
          <div key={item.id} className="select-cat">
            <Link to={item.route}>
              <img src={path2 + item.img} alt="selection images" />
            </Link>
            <h3>{item.name}</h3>
            <Link to={item.route} className="select-link">
              Explore
            </Link>
          </div>
        ))}
      </div>
      <h2 className="story-h2">Latest Stories</h2>
      <div className="story-main">
        {story.map((item) => (
          <Link to={item.route} className="story-one" target="_blank" key={item.id}>
            <img src={path2 + item.img} alt="story img" />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div>3 min Read</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
