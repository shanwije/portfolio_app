import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../../components/Header';
const Root = () => {
  return (
    <>
        <Header/>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default Root;