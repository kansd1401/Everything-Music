import React from "react";
import classNames from 'classnames';


export default function AgeListItem(props) {
  const classes = classNames("age-list__item", {
    "age-list__item--selected": props.selected === props.name
  });

  return (
    <th onClick={() => props.setAge(props.name)} className={classes}>
      <h3 className="text--regular">{props.name}</h3> 
    </th>
  );
}