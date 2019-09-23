import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem'

import {
  List,
} from './styles';

function ListComponent(props) {
  return (
    <List>
      <ListItem />
    </List>
  )
}

ListComponent.propTypes = {

}

export default ListComponent

