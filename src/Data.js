import React, { useEffect, useState } from 'react';

function Data() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/data-api/rest/Person');
      const jsonData = await response.json();
      setData(jsonData.value);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <h2>Person List</h2>
      <button onClick={fetchData}>Fetch Data</button>
      {data === null ? (
        // Data is null, so show a message or nothing
        null
      ) : isLoading ? (
        <p>Loading data...</p>
      ) : data.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.Id}>
                  <td>{item.Name}</td>
                  {/* Add more cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default Data;
