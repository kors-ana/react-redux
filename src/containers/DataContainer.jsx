import { connect } from 'react-redux';
import Page from '../components/Page';
import {
  fetchData
} from '../redux/modules/getData';

function mapStateToProps(state) {
  return {
    listData: state.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(fetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)