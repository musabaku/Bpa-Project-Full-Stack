import React,{Fragment} from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slider1 from '../../../images/Slider/slider1.JPG';
import slider2 from '../../../images/Slider/slider2.JPG';
import slider3 from '../../../images/Slider/slider3.JPG';
import slider4 from '../../../images/Slider/slider4.JPG';
import "./Home.css"
import TCshort from "./TCshort"
import TopProperty from "./TopProperty"
import CountStats from "./CountStats"
import AboutShort from "./AboutShort"


const sliders = [
{ src: slider1, alt: "Slider 1" },
{ src: slider2, alt: "Slider 2" },
{ src: slider3, alt: "Slider 3" },
{ src: slider4, alt: "Slider 4" },

];

const settings = {
dots: true,
infinite: true,
speed: 200,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
}

const Home = () => {
return (<Fragment>

<div className="slider">
<Slider {...settings}>
{sliders.map((slider, index) => (
<div key={index}>
<img src={slider.src} alt={slider.alt} />
</div>
))}
</Slider>
</div>
<TopProperty />
<TCshort />
<CountStats/>
<AboutShort/>
</Fragment>
)
}

export default Home