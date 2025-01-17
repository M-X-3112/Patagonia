import React, { createContext, useEffect, useReducer, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data, { DataContext } from "../Data/Data";
import Popup from "../components/Popup";
import Popup2 from "../components/Popup2";
import SlideMenu from "../components/SlideMenu";
import { Outlet } from "react-router-dom";
import LeftSlideMenu from "../components/LeftSlideMenu";
import "../Css/Layout.css";
import datam from "../Data/Data";
import axios from "axios";
import { PatagoniaContext, productPa } from "../Data/db";
import StoriesMenu from "../components/StoriesMenu";
import Activism from "../components/Activisim";
import { Box, CircularProgress} from "@mui/material";

export const VisibleContext = createContext();
// export const JsonContext = createContext()

function Layout() {
  // const [jsonData1, setJsonData1] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(!loading);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    document.querySelector("body").style.overflow = visible ? "hidden" : "auto";
    return () => {
      document.querySelector("body").style.overflow = "auto";
    };
  }, [visible]);

  useEffect(() => {
    document.querySelector("body").style.overflow = visible2
      ? "hidden"
      : "auto";
    return () => {
      document.querySelector("body").style.overflow = "auto";
    };
  }, [visible2]);

  useEffect(() => {
    document.querySelector("body").style.overflow = visible3
      ? "hidden"
      : "auto";
    return () => {
      document.querySelector("body").style.overflow = "auto";
    };
  }, [visible3]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3005/all');
  //       setJsonData1(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();

  // }, []);

  // console.log(jsonData1);

  const close = () => {
    setVisible(false);
  };
  const close2 = () => {
    setVisible2(false);
  };
  const close3 = () => {
    setVisible3(false);
  };
  const close4 = () => {
    setVisible4(false);
  };
  const close5 = () => {
    setVisible5(false);
  };
  const close6 = () => {
    setVisible6(false);
  };

  // if (loading) {
  //   return (
  //     <div className="loading-x">
  //       <CircularProgress />
  //     </div>
  //   );
  // }
  return (
    <div className="layout-main">
      <DataContext.Provider value={datam}>
        <PatagoniaContext.Provider value={productPa}>
          <VisibleContext.Provider
            value={{
              close,
              close2,
              close3,
              close4,
              close5,
              close6,
              visible,
              visible2,
              visible3,
              visible4,
              visible5,
              visible6,
              setVisible,
              setVisible2,
              setVisible3,
              setVisible4,
              setVisible5,
              setVisible6,
            }}
          >
            <Popup />
            <Popup2 />
            <SlideMenu />
            <LeftSlideMenu />
            <Activism />
            <StoriesMenu />
            <Header />
            <Outlet />
            <Footer />
          </VisibleContext.Provider>
        </PatagoniaContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default Layout;
