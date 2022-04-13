import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
	render() {
		return (
			<Carousel>
				
				<div>
					<img src="https://dummyimage.com/800x450/#CCCCCC/fff.png&text=Banner+Image" alt="image3"/>
					{/* <p className="legend">Image 3</p> */}

				</div>
				<div>
					<img src="https://dummyimage.com/800x450/#CCCCCC/fff.png&text=Banner+Image" alt="image4"/>
					{/* <p className="legend">Image 4</p> */}

				</div>
				<div>
					<img src="https://dummyimage.com/800x450/#CCCCCC/fff.png&text=Banner+Image" alt="image5"/>
					{/* <p className="legend">Image 5</p> */}

				</div>
			</Carousel>
			
		);
	}
};
