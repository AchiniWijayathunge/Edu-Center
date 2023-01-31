import React from "react";
import { Carousel, Button } from "antd";
import Navbar from './../components/Navbar';

const items = [
    
 
  {
    key: "1",
    title: 'Edu Center',
    content:
      "An investment in knowledge pays the best interest. – Benjamin Franklin",
  }
];

function AppHome() {
  return (
    <div id = "home" className=" cabral">
    
      <Carousel>
        
        {items.map(item => {
          return (
            <div className="nesha" key={item.key}>
              <div className="content">
                <h1>{item.title}</h1>
               < p className="achini">{item.content}</p> 
               <div className="btnHolder">
              
            
               </div>
                </div>
            </div>
          );
        })}

      </Carousel>
      
    </div>
  );
}

export default AppHome;