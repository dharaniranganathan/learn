import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../database/data'; // Assuming your product data is stored in 'data.js'
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component

const ProductCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div>
            <h2>Featured Products</h2>
            <Slider {...settings}>
                {data.map(product => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductCarousel;
