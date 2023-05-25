import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./VerticalCarousel.scss";
import image1 from "../../../../assets/banner-img.png";
import image2 from "../../../../assets/product-1.png";
import image3 from "../../../../assets/product-2.png";

const VerticalCarousel = () => {

  const images = [image1, image2, image3];
  const carouselSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="full-width-container">
      <div className="column">
        <Slider {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} height={"593px"} alt={`banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VerticalCarousel;
