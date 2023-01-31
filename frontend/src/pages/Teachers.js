import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Classes_a = () => {
  const [classes, setClasses] = useState(null);
  useEffect(() => {
    const fetchClassses = async () => {
      const response = await fetch("/api/teachers");
      const json = await response.json();

      if (response.ok) {
        setClasses(json);
      }
    };

    fetchClassses();
  }, []);
  return (
    <div className="class">
      <div className="classes">
        {classes &&
          classes.map((classes) => (
            <p key={classes._id}>
              {classes.title}= {classes.subject}
              <Link to="/classes">
                <button>Classes</button>
              </Link>
            </p>
          ))}
      </div>
      <Link to="/Addings">
        <button>Add Teachers</button>
      </Link>
    </div>
  );
};
export default Classes_a;
