import React from "react";
import MediaContainer from './MediaContainer'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchingMedia } from '../redux/actions'
import '../style/SearchPage.css'


class SearchPage extends React.Component {

  componentDidMount() {
    this.props.fetchingMedia()
  }

  render() {
    return (
      <div>
        <MediaContainer media={this.props.media}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {media: state.searchMedia}
}

const mapDispatchToProps = (dispatch) => {
  return {fetchingMedia: () => dispatch(fetchingMedia())}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage))