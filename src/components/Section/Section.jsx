import React,{useState} from "react";
import styles from "./Section.module.css"
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({ title, data, type, filteredData=null, filteredDataValues=[], value=0, handleChange=null}) => {
    const [toggle,setToggle] = useState(true);
    
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return(
        <div>
            <div className={styles.header}>
                 <h3>{title}</h3>
                 <h4 className={styles.toggleText} onClick={handleToggle}>
                     {!toggle?"Show All":"Collapse"}
                 </h4>
            </div>
            {type==="song"? (
            <BasicTabs value={value} handleChange={handleChange}/>
            ):null}
            {data.length === 0 ? (
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <CircularProgress />
                </Box> 
                ) :<div className={styles.cardsWrapper}>
                    {toggle?<div className={styles.wrapper}>
                        {
                           filteredDataValues.map(item => {
                            return(
                                <Card data={item} type={type}/>
                            )
                           })
                        }
                     </div> :(<Carousel data={filteredDataValues} component={(data) =><Card data={data} type={type}/>}/>)}
                </div>
            }
         </div>
     );
};

 export default Section;