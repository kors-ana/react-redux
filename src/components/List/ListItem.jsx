import React from 'react';
import PropTypes from 'prop-types';

import {
  Item,
} from './styles';

function ListItem({name}) {
  return (
    <Item>{name}</Item>
  )
}

ListItem.propTypes = {
  name: PropTypes.string,
}

export default ListItem

