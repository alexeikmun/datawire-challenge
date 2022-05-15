import './App.scss';
import Service from './components/Service/Service.js';
import Select from 'react-select'
import { useEffect, useState } from 'react';
import svcIcon from './svc.svg';

const options = [
  { value: null, label: 'All' },
  { value: 'ClusterIP', label: 'ClusterIP' },
  { value: 'LoadBalancer', label: 'LoadBalancer' },
]

function App() {
  const [data, setData] = useState({});
  const [type, setType] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(({ data }) => {
        setData(data)
      });
  }, []);

  return (
    <div className="Conatainer">
      <div className="header">
        <div className="title-group">
          <img src={svcIcon} alt="svc" />
          <span>Services</span>
        </div>
        <div className="filter-control">
          <label htmlFor="filter" className="label">Filter by Type</label>
          <Select id="filter" options={options} defaultValue={options[0]} onChange={({ value }) => setType(value)} />
        </div>
      </div>
      <div className="services">
        {
          data.Kubernetes ? data.Kubernetes?.service.filter(s => s.spec.type === type || !type).map((service, i) =>
            <Service service={service} key={i} ind={i} />
          ) : <h2>Not Found Data</h2>
        }
      </div>
    </div>
  );
}

export default App;
