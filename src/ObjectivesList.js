/**
 * Created by Alvaro on 19/03/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class ObjectivesList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      objectives: ['Objective one', 'Objective two', 'Objective three', 'Objective four']
    };
  }
  getObjectives() {
    return this.state.objectives.map((objective) =>
      <li className="objectivesList-objectiveEntry">{objective}</li>
    );
  }
  render() {
    return (
      <ul className="objectivesList">
        {this.getObjectives()}
      </ul>
    );
  }
}

ReactDOM.render(
<ObjectivesList />,
  document.getElementById('objectivesContainer')
);