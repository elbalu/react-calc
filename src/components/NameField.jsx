var React = require('react');

var InputField = React.createClass({
  getInitialState: function() {
    return {valid: true, value: ''};
  },
  isNumber: function(n) {
    return n.length > 0 && !isNaN(parseFloat(n)) && isFinite(n);
  },
  addValue: function(val) {
    this.setState({valid: true, value: val});
  },
  onChange: function(e) {
    var val = e.target.value;
    if (!this.isNumber(e.target.value)) {
      this.setState({valid: false, value: e.target.value});
    } else {
      this.setState({valid: true, value: e.target.value});
    }
  },
  clear: function() {
    this.setState({valid: true, 'value': ''});
  },
  render: function() {
    var formClass = this.state.valid
      ? "form-group"
      : "form-group has-error";
    var opts = {};
    if(this.props.disabled) {
      opts['disabled'] = 'disabled';
    }
    return (
      <div className={formClass}>
        <input {...opts} className="form-control" onChange={this.onChange} placeholder={this.props.placeHolder} value={this.state.value} />
      </div>
    );
  }
});

module.exports = InputField;
