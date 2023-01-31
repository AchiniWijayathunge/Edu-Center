const TimetableDetails = ({ timetables }) => {
  return (
    <div className="Timetable-Detils">
      <h4>{timetables.title}</h4>
      <p>
        <strong>Name: </strong>
        {timetables.title}
      </p>
      <p>
        <strong>day: </strong>
        {timetables.day}
      </p>
      <p>
        <strong>teacher_id: </strong>
        {timetables.teacher_id}
      </p>
      <p>
        <strong>class_id: </strong>
        {timetables.class_id}
      </p>
      <p>
        <strong>time: </strong>
        {timetables.time}
      </p>
      <table class="center">
  
</table>
    </div>
  );
};

export default TimetableDetails;
