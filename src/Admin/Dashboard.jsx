import React from 'react'

import LeftSide from './AdminComponents/LeftSide';
import Header from './AdminComponents/Header';

export default function Dashboard() {
    return (
        <>
            <div className="conatiner-fluid">
                <Header/>
                <div className="row  bg-danger">
                    <div className="col-4">
                        <LeftSide/>
                    </div>
                    <div className="col-8">Dashboard-home</div>
                </div>
            </div>
        </>
    )
}
