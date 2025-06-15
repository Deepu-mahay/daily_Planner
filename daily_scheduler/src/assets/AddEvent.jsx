import { useState } from "react";

export default function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="color1 p-5 m-1 rounded-xl text-[#8A784E]">
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
          className="border w-50 p-2 m-1 rounded bg-white "
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border m-1 w-50 p-2 rounded"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="border w-50 m-1 p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="write a description for the event"
          onChange={handleChange}
          value={formData.description}
          className="border m-1 w-50 p-2 my-3 rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          submit
        </button>
      </form>
    </div>
  );
}
