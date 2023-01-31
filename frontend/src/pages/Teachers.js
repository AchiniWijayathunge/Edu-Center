import { useEffect, useState } from "react";
import { Divider, Table } from 'antd';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Classes_a from './Addings';
import { Button } from "react-bootstrap";



const Teachers = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "title",

    },
    
    {
      title: "Teacher_id",
      dataIndex: "teacher_id",
    },
    {
        title: "subject",
        dataIndex: "subject",
      },
      {
        title: "classes",
        
      }

     
      
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
    <Table columns={columns} dataSource={teachers}
    size="middle " />

   <Link to="/Addings">
        <button>Add Teachers</button>
      </Link>
    
    
  </>
    

  );
};

export default Teachers;
