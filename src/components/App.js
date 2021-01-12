import video from "../data/video.js";
import Comments from "./Comments.js"
import Details from "./Details.js"
import CommentCount from "./CommentCount.js"


const App = () => {
  // console.log("Here's your data:", video);

  const countComments = video.comments.length

  const getComments = video.comments.map((comment => <Comments commentCount={countComments} user={comment.user} comment={comment.comment}/>))

  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <Details title={video.title} views={video.views} uploaded={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} />
      <hr></hr>
      <CommentCount count={countComments}/>
      {getComments}
    </div>
  );
}

export default App;
