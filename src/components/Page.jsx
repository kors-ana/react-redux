import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import List from './List/List';

function Page(props) {
  return (
    <div>
      <Header />
      <List />
    </div>
  )
}

Page.propTypes = {

}

export default Page

