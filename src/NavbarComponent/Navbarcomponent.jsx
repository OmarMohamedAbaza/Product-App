import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbarcomponent.css'
import { TiShoppingCart } from 'react-icons/ti';
import { MdFavorite } from 'react-icons/md';

const Navbarcomponent = () => {
    return(
        <Navbar bg="primary" variant="dark">
        <Link to="/">
            <Navbar.Brand className="mx-5 font-weight-bold">CHANEL</Navbar.Brand>
        </Link>
        
        <Nav className="mr-auto ml-5">
        <Link to="/">
            <Nav.Link href="/home" >Home</Nav.Link>  
        </Link>
          
         <Link to="/about">
            <Nav.Link href="/about">About</Nav.Link>  
        </Link>
        <Link to="/shop">
            <Nav.Link href="/shop">Shop</Nav.Link>  
        </Link>

        <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <Link to="/kids">
            <NavDropdown.Item href="/kids">Kids</NavDropdown.Item>
            </Link>
            <Link to="/women">
            <NavDropdown.Item href="/women">Women</NavDropdown.Item>
            </Link>
            <Link to="/men">
            <NavDropdown.Item href="/men">Men</NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <Link to="/best">
            <NavDropdown.Item href="/best">Best Products</NavDropdown.Item>
            </Link>
        </NavDropdown>
        </Nav>

        <Form inline className="mx-5">   
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Link to="/cart">
            <Nav.Link href="/Cart"><TiShoppingCart className="shoppingCart text-white" /></Nav.Link>  
        </Link>
        <Link to="/favorits">
            <Nav.Link href="/Favorits"><MdFavorite className="shoppingCart text-danger" /></Nav.Link>  
        </Link>
      </Navbar>
    );
}

export default Navbarcomponent;