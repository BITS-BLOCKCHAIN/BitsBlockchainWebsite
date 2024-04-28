import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Css/info.css';

const Info = () => {
    const carouselSettings = {
        responsive: {
            all: {
                breakpoint: { max: 4000, min: 0 },
                items: 1,
            },
        },
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 3000,
        keyBoardControl: true,
        transitionDuration: 500,
    };

    return (
        <div className="info-container">
            <div className="info-column">
                <h2>Our Projects</h2>
                <Carousel {...carouselSettings}>
                <div className="carousel-item">
                        <img src="https://picsum.photos/803/400" alt="Random Event 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/804/400" alt="Random Event 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/805/400" alt="Random Event 3" />
                    </div>  
                </Carousel>
            </div>
                <div className="info-column">
                <h2>Upcoming Events</h2>
                <Carousel {...carouselSettings}>
                <div className="carousel-item">
                        <img src="https://picsum.photos/803/400" alt="Random Event 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/804/400" alt="Random Event 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://picsum.photos/805/400" alt="Random Event 3" />
                    </div> 
                </Carousel>
            </div>
        </div>
    );
};

export default Info;
