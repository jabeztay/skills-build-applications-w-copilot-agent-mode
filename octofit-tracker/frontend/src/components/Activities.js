import React, { useEffect, useState } from 'react';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setActivities(results);
      });
  }, []);

  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Activities</h3>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{activity.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
