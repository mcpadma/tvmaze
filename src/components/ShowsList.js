import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import ReactHtmlParser from 'react-html-parser';

function ShowsList() {
  const history = useHistory();
  const [showList, setShowList] = useState([]);
  const [urlParams, setUrlParams] = useState("");
  const url = "http://api.tvmaze.com/search/shows?q=";
  useEffect(() => {
    //debugger;
    //  axios.get(`${url}the%20office`).then(res=>{
    //   console.log(res.data);
    // })
  }, []);

  function searchInput(e) {
    console.log(e.target.value);
    setUrlParams(e.target.value);
  }
  function submitSearch() {
    axios.get(`${url}${urlParams}`).then(res => {
      
      setShowList(res.data);
      console.log(res.data);
    });
    // fetch(`https://api.tvmaze.com/search/shows?q=${urlParams}`).then(response => response.json()).then(data =>
    //   {setShowList(data);
    //   console.log(data)}
    //   );
  }
  function handleEpisodes(e) {
    console.log("asfdsfh", e.target.id);
    history.push(`/episodes/${e.target.id}`);
  }

  return (
    <div className="container mainContent">
      <div className="row">
        <div className="col-md-2 col-lg-2"></div>
        <div className="col-md-8 col-lg-8 ">
          <div className="row">
            <div className="col-md-9 col-lg-9 ">
              <div className="input-group">
                <span className="input-group-append">
                  <div className="input-group-text bg-transparent">
                    <i className="fa fa-search"></i>
                  </div>
                </span>
                <input
                  className="form-control py-2 border-left-0 "
                  type="text"
                  onChange={searchInput}
                ></input>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 ">
              <button
                type="button"
                className="btn btnStyle"
                onClick={submitSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-lg-2"></div>
      </div>

      {showList.map((v, k) => {
        return (
          <div key={k} className="row listStyle">
            <div className="container ">
              <div className="row ">
                <div className="col-md-3 col-lg-3  imgDiv">
                  <img src={v.show.image != null ? v.show.image.medium : 'No Banner'} className="imgStyles" alt={v.show.image != null ? v.show.image.medium : 'No Banner'}/>
                </div>
                <div className="col-md-9 col-lg-9  detailsDiv">
                  <h4 className="titleStyle">{v.show.name}</h4>
                  <div>{ReactHtmlParser(`${v.show.summary}`)}</div>
                  <button type="button"
                className="btn btnStyle" id={v.show.id} onClick={handleEpisodes}>
                    Show Episodes
                  </button>
                </div>
              </div>
            </div>
            {/* <h1>{v.show.name}</h1> */}
            {/*<div dangerouslySetInnerHTML={{__html:`{v.show.summary}`}}></div>*/}
            {/* <p>{v.show.summary}</p> */}
            {/* <button id={v.show.id} onClick={handleEpisodes}>
              Show Episodes
            </button> */}
          </div>
        );
      })}
    </div>
  );
}
export default ShowsList;
