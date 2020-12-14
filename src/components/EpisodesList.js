import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function EpisodesList({ props, match }) {
  const history = useHistory();
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // axios.get(`http://api.tvmaze.com/shows/${match.params.id}/episodes`).then(res=>{
    //     setEpisodes(res.data);
    //     console.log(res.data)
    //  });

    axios
      .get(`http://api.tvmaze.com/shows/${match.params.id}/seasons`)
      .then(res => {
        setSeasons(res.data);
        console.log(res.data);
      });
    // fetch(`http://api.tvmaze.com/shows/${match.params.id}/episodes`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setEpisodes(data);
    //     console.log(data);
    //   });
  }, []);

  function fetchEpisodes(e) {
    console.log(e.target.id);
    axios
      .get(`http://api.tvmaze.com/seasons/${e.target.id}/episodes`)
      .then(res => {
        setEpisodes(res.data);
        console.log(res.data);
      });
  }
  return (
    <div>
      {/* accordion has to be implemented for seasons */}
      {/* <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
      {/* <h3>ID: {match.params.id}</h3> */}
      {seasons.map((v, k) => {
        return (
          <>
            {/*<div dangerouslySetInnerHTML={{__html:`{v.show.summary}`}}></div>*/}
            <button
              id={v.id}
              onClick={fetchEpisodes}
              type="button"
              className="btn btnStyle alignBtn"
            >
              Season {v.number}
            </button>
            <div>
              {episodes.map((value, key) => {
                return (
                  <div>
                    <h4>{value.number}</h4>
                    <span>
                      <h5>{value.name}</h5>
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
      <button
        type="button"
        className="btn btnStyle alignBtn"
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
