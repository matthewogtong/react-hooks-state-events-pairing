import React, { useState } from 'react'

const Comments = ( { user, comment }) => {

    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    
    const handleLikes = () => {
        setLikes((likes) => likes + 1)
    }
    
    const handleDislikes = () => {
        setDislikes((dislikes) => dislikes + 1)
    }
    
    return (
        <div>
            <h3>{user}</h3>
            <h5>{comment}</h5>
            <button  onClick={handleLikes}>👍 {likes}</button>
            <button  onClick={handleDislikes}>👎 {dislikes}</button>
        </div>
    )
}

export default Comments