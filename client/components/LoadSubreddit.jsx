import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subreddit: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      subreddit: e.target.value
    })
  }


  render() {
   return (
      <div>
     
          <p>
            <input type='text' name='subreddit' placeholder='search region' onChange={this.handleChange}></input>
          </p>

          <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
            Fetch Posts
    </button>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(LoadSubreddit)
