import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import ExploreModal from '../ExploreModal'
import { useMediaQuery } from 'react-responsive'

export const Heroleft = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isSmall = useMediaQuery({ query: '(max-width: 640px)' })


  return (
    <div className='Hero-left-main px-4 overflow-hidden'>

      <div className='Hero-left-silly w-full md:mt-4 pb-12 md:h-[66vh]'>

        <div className='Text sm:mt-2 md:mt-24 overflow-hidden'>
          <div className='text-3xl sm:text-4xl md:text-5xl py-4 text-white font-bold'>
            Empowering Data-Driven Success

          </div>
          <div className=" text-gray-400 text-xl sm:text-2xl md:text-3xl ">
            <TypeAnimation className=''
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Business Intelligence & Integration ',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Data Reporting & Visualization',
                1000,
                'Data Science & AI Solutions',
                1000,
                'Custom Software Development',
                1000,
                "Predictive & Prescriptive Analytics"
              ]}
              wrapper="span"
              speed={20}
              style={{
                display: 'inline-block', color: '#C0C0C0',
                fontWeight: 600,
              }}
              repeat={Infinity}
            />
          </div>
          <div className=' text-white text-sm sm:text-xl mt-3'>
            We are a pioneering IT solutions provider dedicated to guiding organizations through digital transformation. Our focus spans data-driven decision-making, from dynamic dashboards to AI and custom software, addressing diverse business challenges with expertise and innovation.
          </div>
        </div>

        <div onClick={onOpen} className='py-7 '>
          <button className='bg-white hover:bg-slate-200 transition-colors w-full sm:w-56'>Explore the possibilities</button>
        </div>
        <ExploreModal isOpen={isOpen} onClose={onClose} />

        {/* <div className='cluch'>
          <img src="https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1.png 999w, https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1-278x300.png 278w, https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1-947x1024.png 947w, https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1-768x830.png 768w, https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-70f113c/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1-150x162.png 150w" alt="" srcset="" />
          <img src="https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-2e7431b/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1.png" alt="" srcset="" />
          <img src="https://cdn-cednl.nitrocdn.com/ZIEpBLjPiSWpOcIdsSTlIdzcQJzKTmWw/assets/images/optimized/rev-2e7431b/www.datatobiz.com/wp-content/uploads/2023/02/top_clutch.co_artificial_intelligence_company_india_2023-1.png" alt="" srcset="" />
        </div> */}

      </div>

    </div>
  )
}
