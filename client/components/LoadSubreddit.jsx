import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      subreddit: ''
    }
  }
  handleChange = (e) => {
     subreddit = e.target.value
    }
  }

  render() {
    let { children, dispatch } = this.props
    return (
      <div>
        <form>
          <p>
            <input type='text' name='subreddit' placeholder='search region' onChange={this.handleChange} />
          </p>


          <button onClick={() => dispatch(fetchPosts('newzealand'))}>
            Fetch Posts
    </button>

        </form>

        {children}
      </div>
    )
  }



// const LoadSubreddit = ({children, dispatch}) => (

//   <div>
//     <button onClick={() => dispatch(fetchPosts('newzealand'))}>
//       Fetch Posts
//     </button>
//     {children}
//   </div>
// )

export default connect()(LoadSubreddit)
