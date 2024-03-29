import React, { useState } from 'react'

function Video() {

    const[videoUrl,setVideoUrl]=useState("")
    const[videoData,setVideoData]=useState("")

    const handleChange=(e)=>{
        setVideoUrl(e.target.value)
    }

    const handleClick = (e) =>{
        e.preventDefault()
        let videoId=videoUrl.substring(videoUrl.indexOf('=')+1)
        setVideoData(videoId)
        setVideoUrl('')
    }

  return (
    <div>
        <form>
            <input type="text" placeholder='Paste Video URL' onChange={handleChange} value={videoUrl} ></input>
            <button onClick={handleClick} >ADD</button>

        </form>
         <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoData}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Video