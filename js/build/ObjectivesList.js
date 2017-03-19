/**
 * Created by Alvaro on 19/03/2017.
 */

class ObjectivesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objectives: ['Objective one', 'Objective two', 'Objective three', 'Objective four']
    };
  }
  getObjectives() {
    return this.state.objectives.map(objective => React.createElement(
      'li',
      { className: 'objectivesList-objectiveEntry' },
      objective
    ));
  }
  render() {
    return React.createElement(
      'ul',
      { className: 'objectivesList' },
      this.getObjectives()
    );
  }
}

ReactDOM.render(React.createElement(ObjectivesList, null), document.getElementById('objectivesContainer'));