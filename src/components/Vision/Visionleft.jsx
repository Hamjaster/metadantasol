import React from 'react'
import { useState } from 'react';

export const Visionleft = () => {


    const [selectedDiv, setSelectedDiv] = useState(null);
  
    const handleDivClick = (divNumber) => {
      setSelectedDiv(divNumber);
    };
  
    const renderInformation = () => {
      switch (selectedDiv) {
        case 1:
          return <p className="info">Information for Div 1</p>;
        case 2:
          return <p className="info">Information for Div 2</p>;
        case 3:
          return <p className="info">Information for Div 3</p>;
        default:
          return <p className="info">Click on a div to see information</p>;
      }
    };

  return (
    <div className='Left-Vision'>
      <div  className='left--v-small-text'>
      There are many reasons why we have become renowned among the several data analytic companies. Our belief and vision led us to become the most prime data partners of all the clients who walk through our doors. <br/><br/><br/>

Besides being known for our expertise, our out of the box thinking and innovative thinking has landed us to become the best data partners one could ever hope for. Our vision along with our talent brings the best possible solution for all our clients.
      </div>
    <div>
    <div >
      <div className='checking-boxes '>
      <div
        onClick={() => handleDivClick(1)}
        className={`div ${selectedDiv === 1 ? 'selected':''}`}
      >
        Div 1
      </div>
      <div
        onClick={() => handleDivClick(2)}
        className={`div ${selectedDiv === 2 ? 'selected' : ''}`}
      >
        Div 2
      </div>
      <div
        onClick={() => handleDivClick(3)}
        className={`div ${selectedDiv === 3 ? 'selected' : ''}`}
      >
        Div 3
        </div>
             </div>
          <div className="information">{renderInformation()}</div>
         </div>
      </div>
    </div>
  )
}
