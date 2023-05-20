import React,{useEffect,useState} from 'react';
import './App.css';
import TableRow from './components/TableRow';

function App() {
  const [data,setData]=useState([]);
  const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const response=await fetch(url);
        const result=await response.json();
        setData(result);
      }
      catch(error){
        console.error('Error fetching data:',error);
      }
    };
    fetchData();
  },[url])

  return (
    <div className="App">
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
          
        </thead>
        <tbody>
            {data.map((item)=>(
              <TableRow key={item.id} data={item}/>
            ))}
          </tbody>
      </table>
      
    </div>
  );
}

export default App;
