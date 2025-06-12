
function TaskList() {
  const tasklist = [
    { title: "dsa", date: "asdf", time: "asdf", description: "" },
    { title: "asdf", date: "asdfasd", time: "sdf", description: "asd" },
  ];
  return (
    <div>
      {tasklist.map((t) => (
        <ul>
          <li>
            {t.title} {t.date} {t.description}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default TaskList;
