import React from 'react'
import { useState } from 'react';

export const Visionleft = () => {


  const [selectedDiv, setSelectedDiv] = useState(1);

  const handleDivClick = (divNumber) => {
    setSelectedDiv(divNumber);
  };

  const renderInformation = () => {
    switch (selectedDiv) {
      case 1:
        return <p className="info">The one thing that made us so popular is that we are in a constant learning stage. Everytime something new comes up in the industry, we are always on the top of it, ensuring that you get the best and most advanced solution possible for your data analytics needs.



        </p>;
      case 2:
        return <p className="info">Learning is one thing and applying what you learned is another. This is the reason we just don’t learn but also implement. Our progressive approach along with the experimenting zeal has made us who we are today, the best data analytics company across the world.

        </p>;
      case 3:
        return <p className="info">We have an understanding on how things work. This is why we are well-equipped with the tactics that would beat our and our client’s competitors. We implement the strategies that deliver results.



        </p>;
      default:
        return <p className="info">Learning is one thing and applying what you learned is another. This is the reason we just don’t learn but also implement. Our progressive approach along with the experimenting zeal has made us who we are today, the best data analytics company across the world.

        </p>;
    }
  };

  return (
    <div className='Left-Vision md:py-16'>
      <div className='text-lg font-normal px-5'>
        There are many reasons why we have become renowned among the several data analytic companies. Our belief and vision led us to become the most prime data partners of all the clients who walk through our doors. <br /><br />

        Besides being known for our expertise, our out of the box thinking and innovative thinking has landed us to become the best data partners one could ever hope for. Our vision along with our talent brings the best possible solution for all our clients.
      </div>
      <div>

        <div className='relative my-4' >
          <div className='checking-boxes '>
            <div
              onClick={() => handleDivClick(1)}
              className={`div ${selectedDiv === 1 ? 'selected' : ''}`}
            >
              Learning
            </div>
            <div
              onClick={() => handleDivClick(2)}
              className={`div ${selectedDiv === 2 ? 'selected' : ''}`}
            >
              Experimenting
            </div>
            <div
              onClick={() => handleDivClick(3)}
              className={`div ${selectedDiv === 3 ? 'selected' : ''}`}
            >
              Beating
            </div>
          </div>
          <div className="information absolute -z-10 top-[98%] right-0 left-0 ">
            {renderInformation()}
          </div>
        </div>

      </div>
    </div>
  )
}
