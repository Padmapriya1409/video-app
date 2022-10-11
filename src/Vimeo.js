import React, { useState } from 'react'

function Vimeo() {

    const[VimeoUrl,setVimeoUrl]=useState("")
    const[vimeoData,setVimeoData]=useState("")

    const handleChange=(e)=>{
        setVimeoUrl(e.target.value)
    }

    const handleClick = (e) =>{
        e.preventDefault()
        let vimeoId=VimeoUrl.substring(VimeoUrl.lastIndexOf('/')+1)
        setVimeoData(vimeoId)
        setVimeoUrl('')
    }

  return (
    <div>
        <form>
            <input type="text" placeholder='Paste Video URL' onChange={handleChange} value={VimeoUrl} ></input>
            <button onClick={handleClick} >ADD</button>

        </form>
        <iframe src={`https://player.vimeo.com/video/${vimeoData}`} width="640" height="234" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Vimeo