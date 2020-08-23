import React from 'react'
import iitjee from '../images/iitjee.jpg'
import { Link } from 'react-router-dom'
import data from "./productlist"
import './Course.css'
function Course(props) {
    const product = data.product.find((value) => {
        
        return value.id == props.match.params.id;
        
    }
    
    );
    return (

        <>
           
            <div className="details">
                <div className="product-image">
                    <img className="img" src={product.image}></img>
                </div>
                <div className="product-info">
                    <ul>
                        <li>
                            <h2>{product.name}</h2>
                        </li>
                        <li>
                            DESCRIPTION:
                           <h2>{product.desc}</h2>
                        </li>
                        <li>
                            <h2>{product.rating}</h2>
                        </li>
                    </ul>

                </div>
                <div className="previouYear">
                    <ul>
                        <li>
                            PREVIOUS YEAR QUESTION
                        </li>
                        <li>
                            SAMPLE VIDEO
                        </li>
                        <li>
                           <button>ADD TO MY COURSES</button>
                        </li>
                    </ul>

                </div>

            </div>
        </>


    );
}
export default Course;