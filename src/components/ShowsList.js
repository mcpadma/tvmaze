import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ShowsList() {
const history = useHistory();
 const [showList, setShowList] = useState([]);
 const [urlParams,setUrlParams] = useState('');
const url="http://api.tvmaze.com/search/shows?q="
  useEffect(() => {
    //debugger;
  //  axios.get(`${url}the%20office`).then(res=>{
  //   console.log(res.data);
  // })
  
}, []);

function searchInput(e){
  console.log(e.target.value);
  setUrlParams(e.target.value);
  
}
 function submitSearch(){
     axios.get(`${url}${urlParams}`).then(res=>{
        setShowList(res.data);
        console.log(res.data)
     });
// fetch(`https://api.tvmaze.com/search/shows?q=${urlParams}`).then(response => response.json()).then(data => 
//   {setShowList(data);
//   console.log(data)}
//   );
 }
 function handleEpisodes(e){
   console.log("asfdsfh",e.target.id)
   history.push(`/episodes/${e.target.id}`);
 }

  return(
    <div>
    <input type="text" onChange={searchInput} />
    <button type="submit" onClick={submitSearch}>Search</button>
    
    {showList.map((v,k)=>{
      return (
        <>
        <h1>{v.show.name}</h1>
        {/*<div dangerouslySetInnerHTML={{__html:`{v.show.summary}`}}></div>*/}
        <p>{v.show.summary}</p>
        <button id={v.show.id} onClick={handleEpisodes}>Show Episodes</button>
        </>
      )
    })}
    </div>
  )
}
export default ShowsList;