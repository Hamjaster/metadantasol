import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const Heroleft = () => {
  return (
    <div className='Hero-left-main px-4 overflow-hidden  bg-[#136aff]'>

      <div className='Hero-left-silly w-full md:mt-4 pb-12 md:h-[66vh] bg-[#136aff]'>

        <div className='Text sm:mt-2 md:mt-24 overflow-hidden'>
          <div className='text-3xl md:text-4xl py-4 text-white font-bold'>
            Powering the Businesses to Find & Implement the True Potential of Data

          </div>
          <div className="animatingText">
            <TypeAnimation className='Animating-text'
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Advance Data Technologies ',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Executive Dashboards',
                1000,
                'Report Migration',
                1000,
                'Data Visualization Solutions',
                1000
              ]}
              wrapper="span"
              speed={20}
              style={{
                fontSize: '30px',
                display: 'inline-block', color: 'black',
                fontWeight: 600
              }}
              repeat={Infinity}
            />
          </div>
          <div className='smallText'>
            Envisioning the new possibilities to grow your business.
          </div>
        </div>

        <div className='py-7 '>
          <button className='bg-white hover:bg-slate-200 transition-colors w-full sm:w-56'>Explore the possibilities</button>
        </div>

        {/* <div className='cluch'>
          <img src="https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1.png 999w, https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1-278x300.png 278w, https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1-947x1024.png 947w, https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1-768x830.png 768w, https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1-150x162.png 150w" alt="" srcset="" />
          <img src="https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-2e7431b/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1.png" alt="" srcset="" />
          <img src="https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-2e7431b/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1.png" alt="" srcset="" />
        </div> */}
      </div>

    </div>
  )
}
