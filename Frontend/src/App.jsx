import React, { useState, useEffect } from "react";
import AthleteList from "./components/AthleteList";
import AddAthleteForm from "./components/AddAthleteForm";
import { getAllAthletes, addAthlete } from "./api/athleteApi";

function App() {
  const [athletes, setAthletes] = useState([]);

  // Fetch athletes from backend
  const fetchAthletes = async () => {
    const data = await getAllAthletes();
    setAthletes(data);
  };

  useEffect(() => {
    fetchAthletes();
  }, []);

  // Add athlete
  const handleAddAthlete = async (athlete) => {
    await addAthlete(athlete);
    fetchAthletes(); // Refresh list
  };

  return (
    <div className="container">
      <h1>Athlete Performance Tracker</h1>
      <AddAthleteForm onAdd={handleAddAthlete} />
      <AthleteList athletes={athletes} />
    </div>
  );
}

export default App;
