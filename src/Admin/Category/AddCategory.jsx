import React from 'react'
import LeftSide from '../AdminComponents/LeftSide'
import Header from '../AdminComponents/Header'

export default function AddCategory() {
  return (
    <>
      <div className="conatiner-fluid">
        <Header />
        <div className="row  bg-danger">
          <div className="col-4">
            <LeftSide />
          </div>
          <div className="col-8">AddCategory-page</div>
        </div>
      </div>
    </>
  )
}
