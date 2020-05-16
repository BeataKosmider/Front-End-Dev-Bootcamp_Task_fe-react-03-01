import React from 'react';

function List({listItems}) {
  return (
    <ul>
      {listItems.map((li, key) => <li key={key}>{li}</li>)}
    </ul>
  );
}

export default List;
