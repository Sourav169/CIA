import React ,{useEffect,useState} from 'react';
import { BroserRouter as router, Route, Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import iitjee from '../images/iitjee.jpeg'
import './product.css'

import '../App'
import axios from 'axios'


function Product(props) {
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        const fetch= async ()=>{
            const {data}=await axios.get("api/product")
            setProduct(data)
        }
        fetch()
    },[]);
    return (
        <>
            <div className="content">

                <ul className="all-product">
                    {
                        products.map((product) =>

                            <li key={product.id}>
                                <Link to={"/course/" + product.id}>
                                    <div className="product">
                                        <img className="image-product" src={product.image} />
                                        <div className="name">{product.name}</div>
                                        <div className="desc">{product.desc}</div>
                                        <div className="star">{product.rating}</div>
                                    </div>
                                </Link>
                            </li>)

                    }

                </ul>

            </div>

        </>
    );
}
export default Product