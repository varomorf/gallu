/**
 * Created by Alvaro on 19/03/2017.
 */

var ObjectivesList = React.createClass({
  getInitialState: function () {
    return { objectives: [] };
  },
  render: function () {
    return (
      <ul className="objectivesList">
        <li className="objectivesList-objectiveEntry">Objective one</li>
        <li className="objectivesList-objectiveEntry">Objective two</li>
        <li className="objectivesList-objectiveEntry">Objective three</li>
        <li className="objectivesList-objectiveEntry">Objective four</li>
      </ul>
    );
  }
});
ReactDOM.render(
<ObjectivesList />,
  document.getElementById('objectivesContainer')
);