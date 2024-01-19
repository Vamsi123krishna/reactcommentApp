import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

// Write your code here
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    count: 0,
    commentList: [],
    name: '',
    comment: '',
  }

  onCommentSubmit = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }

    this.setState(prevState => ({
      count: prevState.count + 1,
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onLikeToggle = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id !== eachComment.id) {
          return {...eachComment}
        }
        return eachComment
      }),
    }))
  }

  onChangeTextInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeTextAreaInput = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  render() {
    const {commentList, name, comment, count} = this.state
    return (
      <div>
        <div className="maincomment-container">
          <div>
            <h1>Comments</h1>
            <p>Say Something About 4.0 Technologies</p>
            <form
              className="form-control comment-container"
              onSubmit={this.onCommentSubmit}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeTextInput}
                className="input-type"
              />
              <textArea
                rows="7"
                cols="10"
                value={comment}
                placeholder="Your Comment"
                onChange={this.onChangeTextAreaInput}
                className="text-area"
              >
                -
              </textArea>

              <button type="submit" className="btn-element">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <div>
          <p>{count}</p>
          <p>Comments</p>
        </div>

        <ul>
          <div>
            {commentList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                eachIteamDetails={eachItem}
                onLikeToggle={this.onLikeToggle}
                onDelete={this.onDelete}
              />
            ))}
          </div>
        </ul>
      </div>
    )
  }
}

export default Comments
