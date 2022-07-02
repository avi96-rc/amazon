import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import styled from 'styled-components';

const carouselList = [
    'https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2021/Marketing/SWSpringDeal_DMUX-4280/Gateway/DV2/UK-EN_030821_SpringSitewide_ACQ_GW_Hero_D_1500x600_CV69._CB656397523_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/launch/gateway/TheUndergroundRailroad/UGRR_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB669781769_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/02/kindle/content/GTM/Editorial/0504-AMZN-GNBC-GatewayHero-1500x600_v5._CB669739807_.jpg'
];



const Carousel = () => {
  return (


        <SplideStyled options={{
            pagination: false
        }}>
            {
                carouselList.map((item)=> {
                    return(
                        <SplideSlide>
                            <img src={item} alt="" />
                            {/* <Gradient/> */}
                        </SplideSlide>
                    )
                })
            }
            
        </SplideStyled>
  )
}

export default Carousel

const SplideStyled = styled(Splide)`
 position: relative;
width: 100%;
border: 1px solid green;

img{
    /* height: 200px; */
    width: 100%;
}

`
