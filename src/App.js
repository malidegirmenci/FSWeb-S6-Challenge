import React, { useEffect, useState } from 'react';
import Karakterler from './components/Karakterler'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://swapi.dev/api/people/").then((res) => {
      console.log(res)
      setData(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div className='App'>
      <h1 className='Header'>KARAKTERLER</h1>
      <Karakterler data={data}></Karakterler>
    </div>
  )
}

export default App;
