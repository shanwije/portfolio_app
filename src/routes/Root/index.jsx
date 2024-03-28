import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from '../../components/Nav';
const Root = () => {
  return (
    <>
        <Nav/>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default Root;