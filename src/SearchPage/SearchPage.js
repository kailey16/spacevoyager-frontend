import React from "react";
import MediaContainer from './MediaContainer'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingMedia, searchKeywordOnchange } from '../redux/actions'
import '../style/SearchPage.css'


class SearchPage extends React.Component {

  componentDidMount() {
    this.props.fetchingMedia()
  }

  render() {
    return (
      <div>
        <div>
          <form id="searchForm">
            <input type="text" name="searchInput" placeholder="Type your search keyword..." value={this.props.searchKeyword} onChange={this.props.searchKeywordOnchange} />
            <input type="submit" />
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
    searchKeywordOnchange: (e) => dispatch(searchKeywordOnchange(e.target.value))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage))