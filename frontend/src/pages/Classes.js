import { useEffect, useState, Text } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Card } from "antd";
import { Col, Row } from "antd";
import { useSearchParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Classes_a = () => {
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const { user } = useAuthContext(); 
  const [counter, setCounter] = useState(0);

  const { sub_class_id } = useParams();
  console.log(useParams());
  const handleClick1 = async (e, classes) => {
    e.preventDefault();
    let data = {
      sub_class_id: classes.sub_class_id,
      id: user.user._id,
      teacher_id: id,
      class_id: classes._id,
      subject: classes.subject,
      enroll_status: "yes",
    };
    // axios
    //   .get(`http://localhost:4000/api/classes/${id}/${class_id}`,

    //   )

    console.log("My class id is", classes._id);
    {user?.user?.role==="student" && (
    axios
      .post(
        `http://localhost:4000/api/enroll/${user.user._id}/${id}/${classes._id}`,
        data,{headers: {'Authorization': `Bearer ${user.token}`}}
      )
      .then((response) => {
        
      })
    )}
    setCounter(counter + 1);
    console.log("My Sub Class id", classes.sub_class_id);
    console.log("My Class id", classes._id);
    console.log("My id",user.user._id);
    console.log("My token is ",user.token);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  const [classes, setClasses] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchClassses = async () => {
      const response = await fetch(`http://localhost:4000/api/classes/${id}`);

      const json = await response.json();
      console.log("teacher id ", id);

      if (response.ok) {
        setClasses(json);
      }
    };
    fetchClassses();
  }, []);

  // const Classes = ()=>{
  //     const{id} = useParams();

  return (
    //  <div className="Class">

    //   <h2>Classes {id}</h2>

    <div className="Classes_a">
      {classes &&
        classes.map((classes) => (
          <div>
            <center>
              <Col span={8}>
                <Card
                  hoverable
                  bordered={false}
                  style={{
                    width: 350,
                    margin: 60,
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://pbs.twimg.com/profile_images/1365554113186910209/9iWMvV2l_400x400.jpg"
                    />
                  }
                >
                  {" "}
                  <p>{}</p>
                  <p>{classes.sub_class_id}</p>
                  <p>{classes.title}</p>
                  <p>{classes.email}</p>
                  <p> {classes.batch}</p>
                  <p> {classes.subject}</p>
                  <p> {classes.date_and_time}</p>
                  {user && (
                    <div>
                      <p>
                        {" "}
                        <div className="buttons">
                          <button
                            style={{
                              fontSize: "80%",
                              position: "relative",
                              top: "15vh",
                              marginRight: "5px",
                              backgroundColor: "green",
                              borderRadius: "8%",
                              color: "white",
                            }}
                            onClick={(e) => handleClick1(e, classes)}
                          >
                            Enroll
                          </button>
                          <button
                            style={{
                              fontSize: "80%",
                              position: "relative",
                              top: "15vh",
                              marginLeft: "5px",
                              backgroundColor: "red",
                              borderRadius: "8%",
                              color: "white",
                            }}
                            onClick={handleClick2}
                          >
                            UnEnroll
                          </button>
                        </div>
                      </p>
                      <p>
                        {" "}
                        Enrolled students in class
                        <div
                          style={{
                            fontSize: "120%",
                            position: "",
                            top: "10vh",
                          }}
                        >
                          {counter}
                        </div>
                        <p></p>
                      </p>
                    </div>
                  )}
                  {/* <Link to="/Enroll">
        <button className="btn btn-dark">Enroll Class</button>
      </Link> */}
                </Card>
              </Col>
            </center>
          </div>
        ))}
      <Link to="/AddClasses">
        <button className="btn btn-dark">Add Classes</button>
      </Link>
    </div>
  );
};

export default Classes_a;
