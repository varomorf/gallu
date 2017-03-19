/**
 * Created by Alvaro on 19/03/2017.
 */

var Counter = React.createClass({
  getInitialState: function () {
    return { count: 0 };
  },
  handleClick: function () {
    this.setState({
      count: this.state.count + 1,
    });
  },
  render: function () {
    return (
      <button onClick={this.handleClick}>
    Click me! Number of clicks: {this.state.count}
    </button>
    );
  }
});
ReactDOM.render(
<Counter />,
  document.getElementById('container')
);