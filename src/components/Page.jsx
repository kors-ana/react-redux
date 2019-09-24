import React, { useEffect } from 'react';
import {  connect } from 'react-redux';

import Header from './Header/Header';
import List from './List/List';

import {
  fetchData
} from '../redux/modules/getData';

function Page(props) {
  const { getData, listData } = props; 

  useEffect(() => {
    getData()
  }, [getData])
  
  console.log("TCL: Page -> data", listData)
  return (
    <div>
      <Header />
      <List data={listData.data} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    listData: state.usersReducer.data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(fetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)


