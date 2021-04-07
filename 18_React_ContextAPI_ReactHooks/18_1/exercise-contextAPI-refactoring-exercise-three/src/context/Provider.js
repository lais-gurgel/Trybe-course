import React from 'react';
import MyContext from './context';
import { getPostsBySubreddit } from '../services/redditAPI';

class Provider extends React.Component {
  constructor() {
    super()
    const INITIAL_POSTS_STATE = {
      shouldRefreshSubreddit: false,
      isFetching: true,
    };

    this.state = {
      subreddit: 'reactjs',
      options: ['fronted', 'reactjs'],
      frontend: { ...INITIAL_POSTS_STATE },
      reactjs: { ...INITIAL_POSTS_STATE },
    }
    this.receivePostsSuccess = this.receivePostsSuccess.bind(this);
    this.receivePostsFailure = this.receivePostsFailure.bind(this);
  }

  componentDidMount() {
    const { subreddit } = this.state;
    this.fetchPosts(subreddit);
  }

  fetchPosts(subreddit) {
    return getPostsBySubreddit(subreddit).then(
      this.receivePostsSuccess,
      this.receivePostsFailure,
    )
  }

  receivePostsSuccess(json) {
    const { subreddit } = this.state;
    this.setState({
      [subreddit]: {
        posts: json.data.children.map((child) => child.data),
        lastUpdated: Date.now(),
        isFetching: false,
        isEmpty: false,
      }
    })
  }

  receivePostsFailure(error) {
    const { subreddit } = this.state;
    this.setState({
      [subreddit]: {
        error: error.message,
        isFetching: false,
      }
    })
  }

  render() {
    const { children } = this.props;
    return (
      <MyContext.Provider value={{...this.state}}>
        {children}
      </MyContext.Provider>
    )
  }
}

export default Provider;