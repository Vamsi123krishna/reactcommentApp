// Write your code here
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachItemDetails, onLikeToggle, onDelete} = props
  const {id, name, comment, isLike} = eachItemDetails

  const likeImg = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClicking = () => {
    onLikeToggle(id)
  }

  const onClickingDelete = () => {
    onDelete(id)
  }

  return (
    <li>
      <div>
        <div>
          <h1>{name}</h1>
          <p> {formatDistanceToNow(new Date())}</p>
          <p>{comment}</p>
          <button type="button" onClick={onClicking}>
            <img src={likeImg} />
          </button>
        </div>
        <button type="button" onClick={onClickingDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
