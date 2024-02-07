import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchSongs, fetchTopAlbums, fetchNewAlbums} from "./api/api";
// import Card from "./components/Card/Card";
import Section from "./components/Section/Section";
import styles from "./App.module.css"

function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [newAlbumsData,setNewAlbumsData] = useState([]);
  const [data, setData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  }

  useEffect(() => {
    console.log(value);
    generateSongsData(value);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const generateTopAlbums = async () => {
    try {
      const data=await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch(err) {
      console.error(err);
    }
  };

  
  const generateNewAlbums = async () => {
    try {
      const data= await fetchNewAlbums();
      setNewAlbumsData(data);
    } catch(err) {
      console.error(err);
    }
  };

  // const generateData = async () => {
  //   try {
  //     const res = await fetchTopAlbums();
  //     setData(res);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const generateAllSongData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredData = (val) => {
    console.log(val);
    setFilteredDataValues(val);
  };

  useEffect(() => {
    // generateData();
    generateTopAlbums();
    generateNewAlbums();
    generateAllSongData();
  }, []);
  
  return (
    <div>
      <Navbar data={data}/>
      <Hero />
      {/* {
        topAlbumsData.map((topAlbum) => (
          <Card data={topAlbum} type="album" key={topAlbum.id}/>
        ))
      } */}
      <div className={styles.sectionWrapper}>
        <Section 
          data={topAlbumsData}  
          type="album"
          title="Top Albums"
          filteredDataValues={topAlbumsData}
        />
        <Section
          data={newAlbumsData}
          type="album"
          title="New Albums"
          filteredDataValues={newAlbumsData}
        />
        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
