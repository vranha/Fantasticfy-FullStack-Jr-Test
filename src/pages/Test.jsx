import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Race from '../components/Race';
import Spinner from '../components/Spinner';
import { v4 as uuidv4 } from 'uuid';
import "./Test.scss";

function Test() {

    const [races, setRaces] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [bigImage, setBigImage] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [search, setSearch] = useState('');
    const [isSorted, setIsSorted] = useState(false);

    useEffect(() => {
        getRaces()

    }, []);

    const getRaces = async (sort) => {
        setIsLoading(true)
        const response = await axios.get('https://dog.ceo/api/breeds/list/all')
        if (isSorted) {
            setRaces(Object.keys(response.data.message).reverse())       
        } else {
            setRaces(Object.keys(response.data.message))
        }
         setIsLoading(false)
         setIsSorted(!isSorted)
    }

    const reorder = (up) => {
        getRaces(up)
    }

    if (isLoading) {
        return (<Spinner/>)
    }

  return (
    <div className="test_container">
        
            <button className="reorder" onClick={() => reorder('up')}>
                ⬆ Reorder ⬇
            </button>
        
    <div className="General">
        <input type="text" onChange={(e) => setSearch(e.target.value)} autoFocus placeholder="Search a dog" />
        {races.filter((race) => {
            if (search === '') {
            return race    
            }
            return race.includes(search)

        }).map((race) =>(<Race key={uuidv4()} race={race} setIsLoading={setIsLoading} setBigImage={setBigImage} setIsClicked={setIsClicked} />))}
    </div>
    <div className="segunda_columna">
        {!isClicked ? 
        <h2>Click an Image</h2>
        :
        <div>
        <img src={bigImage} alt="bigImage" />
        </div>
        }
    </div>
    </div>
  )
}

export default Test