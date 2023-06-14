import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
function App() {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const empData = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const result = await empData.json();
      setData(result);
      console.log(result);
    }
    document.title = `(${state}) Employees`;
    getData();
  }, [state])

  // jsx
  return (
    <div className="App">
      <Header />
      <button onClick={() => setState(state + 2)}> Click Me {state}</button>
      {
        data.map((element, index) => {
          return (
            <div className='data' key={index}>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;
