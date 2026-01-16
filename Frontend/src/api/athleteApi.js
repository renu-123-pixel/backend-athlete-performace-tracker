//const Athlete_API_URL = process.env.REACT_APP_API_URL;// Backend URL
const Athlete_API_URL = import.meta.env.VITE_API_URL;


export const getAllAthletes = async () => {
  try {
    const res = await fetch(Athlete_API_URL);
    return await res.json();
  } catch (error) {
    console.error("Error fetching athletes:", error);
    return [];
  }
};

export const addAthlete = async (athlete) => {
  try {
    const res = await fetch(Athlete_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(athlete),
    });
    return await res.json();
  } catch (error) {
    console.error("Error adding athlete:", error);
  }
};
