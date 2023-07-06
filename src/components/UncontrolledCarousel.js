import Carousel from 'react-bootstrap/Carousel';

function UncontrolledCarousel() {
   return (
      <Carousel className='carouselUncontrolled'>
         <Carousel.Item>
            <img
               className="d-block w-100 carouselImg"
               src="https://www.peru.pitt.edu/wp-content/uploads/2020/06/Photo1-scaled.jpg"
               alt="First slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100 carouselImg"
               src="https://www.peru.pitt.edu/wp-content/uploads/2017/01/Doctors-Discussing-with-Patients_stock-image-e1494248299513.jpg"
               alt="Second slide"
            />
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100 carouselImg"
               src="https://www.peru.pitt.edu/wp-content/uploads/2019/07/Our-People-Header-Image-final.jpg"
               alt="Third slide"
            />
         </Carousel.Item>
      </Carousel>
   );
}

export default UncontrolledCarousel;