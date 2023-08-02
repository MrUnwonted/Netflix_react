import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import {imageUrl,API_KEY} from "../../constants/constants"
import axios from "../../axios"

function RowPost(props) {

  const [movies, setmovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setmovies(response.data.results)
    }).catch(err=>{
      // alert("network error")
    })
  }, [])

  const opts = {
    height: "390",
    width: '100%',
    playerVars:{
      autoplay:'0',
    },
  }

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
      if (res.data.results.length !== 0) {
        setUrlId(res.data.results[0])
      } else {
        console.log('array is empty');
      }
    })
  }
  

  return (
    <div className='row'>
      <h2>{props.title }</h2>
      <div className='posters'>
        {movies.map((obj) =>
           <img  onClick={() => handleMovie(obj.id)}
           className={props.isSmall? 'smallPoster' : 'poster'} src={`${ imageUrl + obj.backdrop_path }`} alt="" />
        )}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
