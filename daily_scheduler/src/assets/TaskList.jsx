
function TaskList() {
  const tasklist = [
    { title: "dsa", date: "asdf", time: "asdf", description: "" },
    { title: "asdf", date: "asdfasd", time: "sdf", description: "asd" },
  ];
  return (
    <div className="bg-[#E7EFC7] text-[#8A784E] p-3 m-1 rounded-xl h-80 ">
      <h3 className="font-bold">Task List</h3>
      {tasklist.map((t) => (
        <ul className="m-1">
          <li>
            {t.title} {t.date} {t.description}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default TaskList;
