import React from 'react'
import Header from '../AdminComponents/Header'
import LeftSide from '../AdminComponents/LeftSide'

export default function ViewCategory() {
  return (
    <>
      <div className="conatiner-fluid">
        <Header />
        <div className="row  bg-danger">
          <div className="col-4">
            <LeftSide />
          </div>
          <div className="col-8">ViewCategory-page</div>
        </div>
      </div>
    </>
  )
}
