import { useState, useEffect } from 'react'
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Footer from './components/Footer'

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function fetchAPIData() {
      //Caching the data
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cached data..');
        return
      }
      localStorage.clear()

      try {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
          .then(res => res.json())
          .then(apiData => {
            localStorage.setItem(localKey, JSON.stringify(apiData));
            setData(apiData); 
            console.log('Fetched data from the API..');
          })
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchAPIData();
  }, []); 

  function handleModal(){
    setShowModal(!showModal)
  }

  return (
    <>
      {data ? (
        <>
          <Main data={data}/>
          {showModal && <Sidebar data={data} handleModal={handleModal} />}
          <Footer data={data} showModal={showModal} handleModal={handleModal} />
        </>
      ) : (
        <div className="loadingState">
          <div className="loader">
            <span className="loader-text">Loading</span>
            <span className="load"></span>
          </div>
        </div>
      )}
    </>
  );
  
}

export default App
