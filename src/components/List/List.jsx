import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem'

import {
  List,
} from './styles';

function ListComponent({data}) {
  return (
    <List>
      {data && data.map(user => {
        return <ListItem  name={user.name} key={user.id} />
      })}
      
    </List>
  )
}

ListComponent.propTypes = {
  data: PropTypes.array,
}

export default ListComponent

