import { useEffect, useState } from "react";
import { Divider, Table } from 'antd';
//import TimetableDetails from "  ../components/TimetableDetails";
import { Button } from 'antd';

const Timetables = () => {
  
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
      title: "Teacher_id",
      dataIndex: "teacher_id",
    },
    {
        title: "subject",
        dataIndex: "subject",
      },
      {
        title: "time",
        dataIndex: "time",
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
    
  </>
    

  );
};

export default Timetables;
