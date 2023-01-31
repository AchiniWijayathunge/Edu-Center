import React from "react";
import { Row, Col } from "antd";
const items = [
  
]
function AppAbout() {
  return (
    <div id="about" className="shala">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Hello and welcome to Achi shopping ...</p>
        </div>
        <div className="contentHolder">
          <p>
         We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.

We at Achi shopping place believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.

About Us Pag</p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col md ={{ span: 8}} key={item.key}>
                <div className="content">
                <div className="icon">
                {item.icon}
                </div>
                <h3>{item.title}</h3>
               <p>{item.content}</p> 
                </div>
                
              </Col>
            );
          })}
          </Row>
      </div>
    </div>
  );
}
export default AppAbout;