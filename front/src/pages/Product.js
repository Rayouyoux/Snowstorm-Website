import Carousel from "react-bootstrap/Carousel";

function Product(props) {
    return <div>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img lassName="d-block w-100" src="https://cdn.shopify.com/s/files/1/0533/4515/7292/files/Clavier_mecanique_custom_1600x.jpg?v=1642699727" alt="First slide"/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img className="d-block w-100" src="https://pbs.twimg.com/media/FY2gFATXgAAsfcr.jpg" alt="Second slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://www.richard-dern.fr/blog/2022/01/11/a-la-recherche-du-clavier-parfait-etape-3/images/7M6l2QU.jpeg" alt="Third slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://claviercustom.com/wp-content/uploads/2022/03/mon-permier-clavier-custom-scaled.jpg" alt="Fourth slide" />
                <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
}

export default Product;