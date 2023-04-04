import { useEffect, useState } from 'react';

const Stats = () => {
  const [statuses, setStatuses] = useState({
    receiver: '',
    storage: '',
    processing: ''
  });

  useEffect(() => {
    fetch('http://localhost:8110/check')
      .then(res => res.json())
      .then(data => setStatuses(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = () => {
    fetch('http://localhost:8110/check')
      .then(res => res.json())
      .then(data => setStatuses(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="stats">
      <h2>Latest Statistics</h2>
      <div>
        <p>Receiver: {statuses.receiver}</p>
        <p>Storage: {statuses.storage}</p>
        <p>Processing: {statuses.processing}</p>
      </div>
      <button onClick={handleClick}>Check Statuses</button>
    </div>
  );
};

export default Stats;
