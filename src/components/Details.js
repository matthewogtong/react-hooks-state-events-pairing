import React, { useState } from 'react'

const Details = ( {title, views, uploaded, upvotes, downvotes} ) => {

    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)

    const handleUpVote = () => {
        setLikes((likes) => likes + 1)
    }

    const handleDownVotes = () => {
        setDislikes((dislikes) => dislikes + 1)
    }

    return (
        <div>
            <h1>{title}</h1>
            <h4>{views} Views | Uploaded {uploaded} </h4>
            <button onClick={handleUpVote}>{likes}👍</button><button onClick={handleDownVotes}>{dislikes}👎</button>
        </div>
    )
}

export default Details