import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function EpisodesList({ props, match }) {
  const history = useHistory();
  const [seasons,setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  
  useEffect(() => {
    // axios.get(`http://api.tvmaze.com/shows/${match.params.id}/episodes`).then(res=>{
    //     setEpisodes(res.data);
    //     console.log(res.data)
    //  });
    
     axios.get(`http://api.tvmaze.com/shows/${match.params.id}/seasons`).then(res=>{
        setSeasons(res.data);
        console.log(res.data)
     });
    // fetch(`http://api.tvmaze.com/shows/${match.params.id}/episodes`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setEpisodes(data);
    //     console.log(data);
    //   });
  }, []);

  function fetchEpisodes(e){
      console.log(e.target.id);
      axios.get(`http://api.tvmaze.com/seasons/${e.target.id}/episodes`).then(res=>{
        setEpisodes(res.data);
        console.log(res.data)
     });
  }
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
      {seasons.map((v,k)=>{
      return (
        <>
        
        {/*<div dangerouslySetInnerHTML={{__html:`{v.show.summary}`}}></div>*/}
        <button id={v.id} onClick={fetchEpisodes}>Season {v.number}</button>
        <div>
        {
            episodes.map((value,key)=>{
                return (
                    <div>
                        <h4>{value.number}</h4>
                        <span><h5>{value.name}</h5></span>
                    </div>
                )
            })
        }
        </div>
        </>
      )
    })}
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
    </div>
  );
}
export default EpisodesList;
