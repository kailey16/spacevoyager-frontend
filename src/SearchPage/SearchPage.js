import React from "react";
import MediaContainer from './MediaContainer'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingMedia, searchKeywordChange, fetchingWithKeyword } from '../redux/actions'
import '../style/SearchPage.css'


class SearchPage extends React.Component {

  componentDidMount() {
    this.props.fetchingMedia()
  }

  handleFormSubmitted = (e) => { 
    e.preventDefault();
    this.props.fetchingWithKeyword(this.props.searchKeyword)
    this.props.searchKeywordChange("")
  }

  handleKeywordOnchange = (e) => {
    this.props.searchKeywordChange(e.target.value)
  }

  render() {
    return (
      <div className="SearchPage">
        <div className="searchFormContinaer">
          <p>Search anything you want to see from the NASA library</p>
          <form id="searchForm" className="ui form searchForm" onSubmit={this.handleFormSubmitted}>
            <div id="searchBar" className="field">
              <input type="text" name="searchInput" placeholder="Type your search keyword..." value={this.props.searchKeyword} onChange={this.handleKeywordOnchange} />
            </div>
            <input id="searchSubmitButton" className="ui inverted red button" type="submit" value="search"/>
          </form>
        </div>
        <MediaContainer media={this.props.media}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    media: state.searchMedia,
    searchKeyword: state.searchKeyword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingMedia: () => dispatch(fetchingMedia()),
    searchKeywordChange: (searchTerm) => dispatch(searchKeywordChange(searchTerm)),
    fetchingWithKeyword: (keyword) => dispatch(fetchingWithKeyword(keyword))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage))