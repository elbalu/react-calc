var React = require('react');
var EmailField = require('./EmailField.jsx');
var InputField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(e) {

  },
  onClear: function(e){
    this.refs.fieldNum1.clear();
    this.refs.fieldNum2.clear();
    this.refs.fieldResult.clear();
  },
  calculate: function(type) {
    if (!this.refs.fieldNum1.state.valid || !this.refs.fieldNum2.state.valid) {
      alert('not a number');
    } else {
      switch (type) {
        case 'add':
          this.refs.fieldResult.addValue(parseInt(this.refs.fieldNum1.state.value) + parseInt(this.refs.fieldNum2.state.value));
        break;
        case 'sub':
        this.refs.fieldResult.addValue(parseInt(this.refs.fieldNum1.state.value) - parseInt(this.refs.fieldNum2.state.value));
        break;
        case 'mul':
        this.refs.fieldResult.addValue(parseInt(this.refs.fieldNum1.state.value) * parseInt(this.refs.fieldNum2.state.value));
        break;
        case 'div':
        this.refs.fieldResult.addValue(parseInt(this.refs.fieldNum1.state.value) / parseInt(this.refs.fieldNum2.state.value));
        break;
      }

    }
  },
  render: function() {
    var headerStyle = {
      textAlign: 'center'
    };

    return (
      <div className="jumbotron">
        <h2 style={headerStyle}>Calculator</h2>
        <div className="row">
          <div className="col-md-6">
            <InputField placeHolder="Number e.g. 1337" ref="fieldNum1"/>
          </div>
          <div className="col-md-6">
            <InputField placeHolder="Number e.g. 2108" ref="fieldNum2"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <button className="btn btn-primary" onClick={this.calculate.bind(this, 'add')}>+ Add</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary" onClick={this.calculate.bind(this, 'sub')}>- Subtract</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary" onClick={this.calculate.bind(this, 'mul')}>* Multiply</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary" onClick={this.calculate.bind(this, 'div')}>/ Divide</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <InputField placeHolder="Result" disabled="true" ref="fieldResult"/>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary" onClick={this.onClear}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
