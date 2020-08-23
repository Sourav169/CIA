import React from 'react';
import Mainimage from './mainimage.jpeg'
import { BrowserRouter as Router, Route, Link,  } from 'react-router-dom'
import './App.css';
import Home from './component/Home'
import Product from './component/Product'
import course from './component/Course'


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <header className="header">
            <div className="name">
              <Link to='/'>CIA</Link>
            </div>
            <div className="MY-COURSES">
              <a   href="mycourse.html">MY-COURSES</a>
            
            
              <a href="signin.html">Sign In</a>
            </div>


          </header>
          
          <main className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/course/:id" component={course} />
           

            </main>
            
        
          <footer className="footer" >
            ALL RIGHT RESERVED
            </footer>
           
        </div>
      </Router>
    </>
  );

}

export default App;
