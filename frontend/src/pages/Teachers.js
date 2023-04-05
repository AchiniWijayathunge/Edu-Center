import { useEffect, useState } from "react";
import { Divider, Table } from "antd";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Classes_a from "./Addings";
import { Button } from "react-bootstrap";
import { teachers } from "..";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
const Teachers = () => {
  const {user} = useAuthContext()
  const [teacherss, setTeacherss] = useState([]);
  const loadTeacherss = () => {
    axios.get("http://localhost:4000/api/teachers/").then((res) => {
      setTeacherss(res.teachers.reverse());
    });
    console.log(teachers);
  };
  useEffect(() => {
    loadTeacherss();
  }, [teacherss]);
  const navigate = useNavigate();

  function Delete(record) {
    console.log("button click", record);
    axios.delete(`http://localhost:4000/api/teachers/${record._id}`).then(
      (response) => {
        console.log(response.status);
        if (response.status == 200) {
          window.alert("User deleted sucessfully");
          window.location.reload();
        }
      },
      (error) => {
        window.alert(error.response.data.error);
      }
    );
  }
  const { id } = useParams();
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
    },

    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "subject",
      dataIndex: "subject",
    },
    {
      title: "classes",
      dataIndex: "",
      render: (record) => (
        <Link to={`/teachers/${record._id}/classes`}>
          <button>Classes</button>
        </Link>
      ),
    },

    {
      title: "Action",
      dataIndex: "",
      render: (record) => (
        <button className="btn btn-dark" onClick={() => Delete(record)}>
          Delete
        </button>
      ),
    },
  ];

  const [teachers, setTeachers] = useState(null);
  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await fetch("/api/teachers");
      const json = await response.json();
      if (response.ok) {
        setTeachers(json);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <>
      <Divider>Teachers</Divider>
      <Table columns={columns} dataSource={teachers} size="middle " />


      <Link to="/Addings"> 
        <button>Add Teachers</button>
      </Link>
    </>
  );
};

export default Teachers;
