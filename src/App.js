import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/Card/Card";
import styles from "./App.module.css"
import { useEffect, useState } from "react";
import { fetchNewAlbums, fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [newAlbumsData,setNewAlbumsData] = useState([]);

  const generateTopAlbums = async () => {
    try {
      const data=await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch(err) {
      console.error(err);
    }
  }

  
  const generateNewAlbums = async () => {
    try {
      const data= await fetchNewAlbums();
      setNewAlbumsData(data);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
  },[])
  
  return (
    <div>
      <Navbar />
      <Hero />
      {/* {
        topAlbumsData.map((topAlbum) => (
          <Card data={topAlbum} type="album" key={topAlbum.id}/>
        ))
      } */}
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumsData} title="Top Albums" type="album" />
        <Section data={newAlbumsData} title="New Albums" type="album" />
      </div>
    </div>
  );
}

export default App;
