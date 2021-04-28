import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap";
import './Product.css'

const Product = ({match}) => {

// use State
    const [product, setProduct] = useState({});

// use Effect
    useEffect( () => {
        getSingleProduct();
    }, []);

// Methods
    const getSingleProduct = () => {
        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json));
    }
    
    return(

        <div className="col-7 container text-center mt-5">
            <h3>{product.title}</h3>
            
            {product.image ?
            <img className="img-fluid p-5" src={product.image} alt="product imagee" />
            :
            <Spinner animation="grow" />
            }
            <p className="text-muted text-center px-5">{product.description}</p>
            <p className="text-danger">{product.price} $</p>
            
            <div className="row d-flex justify-content-around py-4">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-danger">Set to Favorits</button>
            </div>
        </div>
    );
}

export default Product;