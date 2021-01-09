import React from 'react'
import'./Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <img alt="" className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                <div className="home-row">
                    <Product title="Apple Watch Series 4 (GPS, 44MM) - Silver Aluminum Case with White Sport Band (Renewed)" 
                    price={328.99} img='https://m.media-amazon.com/images/I/51Vi2ob5G6L._AC_UL320_.jpg' rating={4} id='111121212' />
                   <Product title="Kingston Technology HyperX Impact  8GB 2933MHz DDR4 CL17 SODIMM Memory HX429S17IB2/8" 
                    price={552.26} img='https://m.media-amazon.com/images/I/81g-LlLPBAL._AC_UL320_.jpg' rating={5} id='115412122'/>
                </div>
                <div className="home-row">
                    <Product title="Wireless Charger,ZHIKE 3 in 1 Qi-Certified 15W Fast Charging Station for Apple iWatch Series 5/4/3/2/1,AirPods,Wireless Charging Stand for iPhone 11 Series/XS" 
                    price={35.98} img='https://m.media-amazon.com/images/I/61PZQ22BN0L._AC_UL320_.jpg' rating={4} id='11142141212' />
                    <Product title="Acer SB240Y Bbix 23.8” Full HD (1920 x 1080) Ultra-Thin Zero-Frame IPS Monitor with AMD Radeon FREESYNC Technology and 1ms VR" 
                    price={129.99} img='https://m.media-amazon.com/images/I/71mqBWRZlfL._AC_UL320_.jpg' rating={4}  id='1112312312121212'/>
                    <Product title="Samson Technologies Samson G-Track Pro Professional USB Condenser Microphone with Audio Interface, Black (SAGM1UPRO)" 
                    price={159.26} img='https://m.media-amazon.com/images/I/81I5xX-vvxL._AC_UL320_.jpg' rating={5}  id='321321415'/>
                    
                </div>
                <div className="home-row">
                    <Product title='LG 55UN7300PUF Alexa Built-in UHD 73 Series 55" 4K Smart UHD TV (2020) & LG SL5Y 2.1 Channel High Resolution Sound Bar w/DTS Virtual:X, Black" '
                    price={854.93} img='https://m.media-amazon.com/images/I/51bAkSSds4L._AC_UL320_.jpg' rating={4} id='11112121123215412'/>
                </div> 
            </div>
        </div>
    )
}

export default Home