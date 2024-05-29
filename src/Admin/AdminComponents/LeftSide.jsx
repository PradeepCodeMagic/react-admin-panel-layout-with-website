import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

export default function LeftSide() {
  return (
    <div>
      <div className="Category my-1">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Category</Accordion.Header>
                                    <Accordion.Body className=' p-0'>
                                        <div className="my-1 p-2 ">
                                            <Link to={"/dashboard/addcategory"} >AddCategory</Link>
                                        </div>
                                        <div className="my-1 p-2 ">
                                            <Link to={"/dashboard/viewcategory"} >viewCategory</Link>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="Product my-1">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Product</Accordion.Header>
                                    <Accordion.Body className=' p-0'>
                                        <div className="my-1 p-2 ">AddProduct</div>
                                        <div className="my-1 p-2 ">viewProduct</div>
                                    </Accordion.Body>
                                </Accordion.Item>


                            </Accordion>
                        </div>
    </div>
  )
}
