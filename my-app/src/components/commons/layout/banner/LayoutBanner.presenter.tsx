import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
    background: linear-gradient(95.18deg, #6400ff 0.47%, #e3d1ff 102.52%, #d0b1ff 102.52%);
    border: 4px solid #ffffff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    width: 764px;
    height: 240px;
    justify-content: center;
`;
const Sliderimage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    width: 90px;
    height: 60px;
`;

export default function LayoutBannerUI() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Wrapper>
            <Slider {...settings}>
                <Sliderimage>{/* Carousel<img src="/image/rocket.png" /> */}</Sliderimage>
            </Slider>
        </Wrapper>
    );
}
