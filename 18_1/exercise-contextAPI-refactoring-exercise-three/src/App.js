// src/App.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectSubreddit, fetchPostsIfNeeded, refreshSubreddit } from './actions';
import Posts from './components/Posts';
import Selector from './components/Selector';
import MyContext from './context/context';

class App extends Component {
  componentDidMount() {
    const value = this.context;
    //dispatch(fetchPostsIfNeeded(selectedSubreddit));
    console.log(value);
  }

  componentDidUpdate(prevProps) {
    const { props } = this;

    if (prevProps.selectedSubreddit !== props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = props;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  selectSubreddit(nextSubreddit) {
    const { dispatch } = this.props;
    dispatch(selectSubreddit(nextSubreddit));
  }

  handleRefreshClick(event) {
    event.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(refreshSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  renderLastUpdatedAt(lastUpdated) {
    return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
  }

  renderRefreshButton(isFetching) {
    return (
      <button
        type="button"
        onClick={(event) => this.handleRefreshClick(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {
    // const {
    //   availableSubreddits,
    //   selectedSubreddit,
    //   posts = [],
    //   isFetching,
    //   lastUpdated,
    // } = this.props;

    // const isEmpty = posts.length === 0;

    return (
      <div>
        <h1>APP</h1>
        <MyContext.Consumer>
          {({ subreddit, options, [subreddit]: { isFetching, isEmpty, posts, lastUpdated } }) => (
            <div>
              <Selector
                value={subreddit}
                onChange={(nextSubreddit) => this.selectSubreddit(nextSubreddit)}
                options={options}
              />
              <div>
                {lastUpdated && this.renderLastUpdatedAt(lastUpdated)}
                {this.renderRefreshButton(isFetching)}
              </div>
              {isFetching && <h2>Loading...</h2>}
              {!isFetching && isEmpty && <h2>Empty.</h2>}
              {!isFetching && !isEmpty && <Posts posts={posts} />}
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { selectedSubreddit, postsBySubreddit } = state;
//   const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit];

//   return {
//     selectedSubreddit,
//     posts: [],
//     isFetching: false,
//     lastUpdated: null,
//     availableSubreddits: Object.keys(postsBySubreddit),
//   };
// };

// App.propTypes = {
//   availableSubreddits: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   dispatch: PropTypes.func.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     }),
//   ),
//   selectedSubreddit: PropTypes.string.isRequired,
// };

// App.defaultProps = {
//   lastUpdated: null,
//   posts: [],
// };

export default App;
