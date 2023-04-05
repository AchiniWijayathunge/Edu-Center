import { useEffect, useState } from "react";
import axios from "axios";
import { Divider, Table } from 'antd';
import { Link } from 'react-router-dom';
//import TimetableDetails from "  ../components/TimetableDetails";
import { Button } from 'antd';
import TimetableDetails from './../components/TimetableDetails';



 
  
  const Timetables = () => {
    // const [timetables, setTimetables] = useState([]);
    // const loadTimetables = () => {
    //   axios.get("http://localhost:4000/api/timetables/").then((res) => {
    //     setTimetables(res.timetables.reverse());
    //   });
    //   console.log(timetables);
    // };
    // useEffect(() => {
    //   loadTimetables();
    // }, [timetables]);

  
  
  function Delete(record) {
    console.log("button click", record);
    axios
      .delete(`http://localhost:4000/api/timetables/${record._id}`)
      .then(
        (response) => {
          console.log(response.status);
          if (response.status == 200) {
            window.alert("Event deleted sucessfully");
            window.location.reload();
           
          }
        },
        (error) => {
          window.alert(error.response.data.error);
        }
      );
     
     
  }
 
  
    const columns = [
      {
        title: "Name",
        dataIndex: "title",
  
      },
      {
        title: "Day",
        dataIndex: "day",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
          title: "Subject",
          dataIndex: "subject",
        },
        {
          title: "Time",
          dataIndex: "time",
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
    const [timetables, setTimetables] = useState(null);
    useEffect(() => {
      const fetchTimetables = async () => {
        const response = await fetch("/api/timetables");
        const json = await response.json();
        if (response.ok) {
          setTimetables(json);
        }
      };
      
      fetchTimetables();
    }, []);

  return (
    
        <>
    <Divider>Full Time Table</Divider>
    <Table columns={columns} dataSource={timetables} 

     
    size="middle " />
   
    <Link to="/Addevent">
        <button>Add Event </button>
      </Link>
  </>
    

  );
};

export default Timetables;
