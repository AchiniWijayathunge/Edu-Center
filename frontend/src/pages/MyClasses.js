import React, { useState, useEffect } from "react";
import axios from "axios";
import { Divider, Table } from "antd";
import { theme } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Classes from '../pages/Classes';
import {
  BrowserRouter,
  Link,
  NavLink,
  Switch,
  Route,
  Redirect,
  Alert,
} from "react-router-dom";
const MyClasses = () => {
  const [isDataChanged, setDataChanged] = useState(false);
  const [enrolls, setEnrolls] = useState([]);
  const {user} = useAuthContext()
  const loadEnrolls = () => {
    axios
      .get(
        "http://localhost:4000/api/enroll/${user.user._id}/${id}/${classes._id}",{headers: {'Authorization': `Bearer ${user.token}`}}
      )
      .then((res) => {
        setEnrolls(res.enrolls.reverse());
      });
    console.log("my enrolls are", enrolls);
  };
  useEffect(() => {
    loadEnrolls();
  }, [enrolls]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEnrolls = async () => {
      const response = await fetch("/api/enroll/{id}/:teacher_id/:class_id", {headers: {'Authorization': `Bearer ${user.token}`}});
      const json = await response.json();
      if (response.ok) {
        setEnrolls(json);
      }
    };
    if(user){
    fetchEnrolls();}
  }, []);
 
  const columns = [

    {
      title: "Sub_Class_Id",
      dataIndex: "sub_class_id",
    },

    {
      title: "Id",
      dataIndex: "id",
    },

    {
      title: "Teacher ID",
      dataIndex: "teacher_id",
    },
    {
      
      title: "Class ID",
      dataIndex: "class_id",
    },
    {
      title: "Subject",
      dataIndex: "subject",
    },
    {
      title: "Enroll Status",
      dataIndex: "enroll_status",
    },
  ];

  // const user = JSON.parse(localStorage.getItem("user"));
  const id = user.user._id;
  console.log("BABA Blacksheep", user.user.firstName);
  const { token } = theme.useToken();

  const a = JSON.parse(localStorage.getItem("user"));
  console.log("tallalalla", user?.user);
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  console.log(a.user);

  return (
    <div>
      <div class="example">
        <img
          class="background-image"
          src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?size=626&ext=jpg"
        ></img>

        <h5 className="achini">welcome {user?.user?.firstName}</h5>
      </div>
      <Divider>My Classes</Divider>
      <Table columns={columns} dataSource={enrolls} size="middle " />
      <div id="dashboard" className=" dashboard"></div>
    </div>
  );
};

export default MyClasses;
