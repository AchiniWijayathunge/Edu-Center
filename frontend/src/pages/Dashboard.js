import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { theme } from "antd";

  


const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const UserHeading = () => {
  const [date, setDate] = useState(new Date());
  const { token } = theme.useToken();
  const user = JSON.parse(localStorage.getItem("user"));
  const a = JSON.parse(localStorage.getItem("user"));
  console.log("tallalalla",user?.user)
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  console.log(a.user) ;

  
  return( <div>
    
    <div class="example">
      <img
        class="background-image"
        src="https://img.freepik.com/free-photo/clever-red-haired-small-girl-with-modern-hairstyle-clear-eyeglasses-white-blouse-wants-answer-raises-her-hand_197531-28409.jpg?size=626&ext=jpg"
      ></img>
      
      
       <h5 className="achini">welcome{user?.user?.firstName}</h5>
      <div class="overlay">
        <center>
          <p>
            <h1 className="header"></h1>
            <card>
              (
              <center>
                <div className="calender" style={wrapperStyle}>
                  <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
              </center>
              );
            </card>
          </p>
        </center>
      </div>
    </div>

    <div id="dashboard" className=" dashboard"></div>
  </div>)
 
};

export default UserHeading;
