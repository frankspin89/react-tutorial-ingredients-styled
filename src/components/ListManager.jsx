var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      nextItemText: ''
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({
      items: currentItems,
      newItemText: ''
    });
  },
  onChange: function(e) {
    this.setState({
      newItemText: e.target.value
    });
  },
  render : function() {

    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {

    };

    if(this.props.headingColor) {
      headingStyle.background = this.props.headingColor;
    };

    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-default panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-sm-9">
                  <input className="form-control" type="text" onChange={this.onChange} value={this.state.newItemText} />
                </div>
                <div className="col-sm-2">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
});

module.exports = ListManager;
