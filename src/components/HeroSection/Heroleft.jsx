import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const Heroleft = () => {
  return (
    <div className='Hero-left-main bg-[#136aff]'>

      <div className='Hero-left-silly mt-20 h-[66vh] bg-[#136aff]'>

        <div className='Text'>
          <div className='text-4xl py-4 text-white font-bold'>
            Powering the Businesses to Find & Implement the True Potential of Data

          </div>
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
              fontSize: '50px',
              display: 'inline-block', color: 'black',
              fontWeight: 600
            }}
            repeat={Infinity}
          />
          <div className='smallText'>
            Envisioning the new possibilities to grow your business.
          </div>
        </div>

        <div className='py-7 '>
          <button className='bg-white hover:bg-slate-200 transition-colors w-56'>Explore the possibilities</button>
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
