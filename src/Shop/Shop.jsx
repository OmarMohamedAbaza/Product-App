import { Link } from "react-router-dom"
import { useEffect, useState } from "react" 
import './Shop.css'
import { Col, Container, Row, Spinner } from "react-bootstrap";

const Shop = () => {
// use State
    const [products, setProduct] = useState([]);
// use Effect
    useEffect(() => {
        fetchProducts();
    }, []);

// methosds
const fetchProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json));
};

//  return
    return(

        <Container>
            <h2 className="text-center text-dark mb-5 p-2">Shopping is Lifestyle</h2>
        <Row>      
        <Col>
                {products && products.length > 0?
                products.map(product => {
                    return (
                    <Link key={products.id} to={`/shop/${product.id}`}>
                            <h4 className="text-center">{product.category}</h4>
                            <img className="product_im img-fluid py-2" src={product.image} alt="Product img"/>
                        <p className="text-muted py-3">{product.description}</p>
                    </Link>
                    ); 
                }):
                <Spinner animation="grow" />
            }
            </Col>
            <Col>
                {products && products.length > 0?
                products.map(product => {
                    return (
                    <Link key={products.id} to={`/shop/${product.id}`}>
                            <h4 className="text-center">{product.category}</h4>
                            <img className="product_im img-fluid py-2" src={product.image} alt="Product img"/>
                        <p className="text-muted py-3">{product.description}</p>
                    </Link>
                    ); 
                }):
                <Spinner animation="grow" />
            }
            </Col>
            <Col>
                {products && products.length > 0?
                products.map(product => {
                    return (
                    <Link key={products.id} to={`/shop/${product.id}`}>
                            <h4 className="text-center">{product.category}</h4>
                            <img className="product_im img-fluid py-2" src={product.image} alt="Product img"/>
                        <p className="text-muted py-3">{product.description}</p>
                    </Link>
                    ); 
                }):
                <Spinner animation="grow" />
            }
            </Col>
        </Row>
        

{/* Button group */}
    <div className="btn-toolbar my-5 mx-3 d-flex justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-secondary">1</button>
            <button type="button" className="btn btn-secondary">2</button>
            <button type="button" className="btn btn-secondary">3</button>
            <button type="button" className="btn btn-secondary">4</button>
        </div>
    </div>

    </Container>
    );
}

export default Shop;