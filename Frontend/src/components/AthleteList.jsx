import React from "react";

function AthleteList({ athletes }) {
  return (
    <div className="athlete-list">
      {athletes.length === 0 ? (
        <p>No athletes found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sport</th>
              <th>Heart Rate</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            {athletes.map((athlete) => (
              <tr key={athlete._id}>
                <td>{athlete.name}</td>
                <td>{athlete.age}</td>
                <td>{athlete.sport}</td>
                <td>{athlete.heartRate}</td>
                <td>{athlete.performanceScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AthleteList;
