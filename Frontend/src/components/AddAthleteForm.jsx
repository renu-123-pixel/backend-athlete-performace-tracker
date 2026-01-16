import React, { useState } from "react";

function AddAthleteForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sport: "",
    heartRate: "",
    performanceScore: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      age: Number(formData.age),
      heartRate: Number(formData.heartRate),
      performanceScore: Number(formData.performanceScore),
    });
    setFormData({ name: "", age: "", sport: "", heartRate: "", performanceScore: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="add-athlete-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="sport"
        placeholder="Sport"
        value={formData.sport}
        onChange={handleChange}
      />
      <input
        type="number"
        name="heartRate"
        placeholder="Heart Rate"
        value={formData.heartRate}
        onChange={handleChange}
      />
      <input
        type="number"
        name="performanceScore"
        placeholder="Performance Score"
        value={formData.performanceScore}
        onChange={handleChange}
      />
      <button type="submit">Add Athlete</button>
    </form>
  );
}

export default AddAthleteForm;
