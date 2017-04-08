/**
 * Created by Alvaro on 19/03/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';

class ObjectivesList extends React.Component{
  constructor(props) {
    super(props);

    // Get a reference to the database service
    var database = firebase.database();

    database.ref('objectives').once('value').then(function (snapshot) {
      this.state = {
        objectives: snapshot.val().objectives
      };
    });

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