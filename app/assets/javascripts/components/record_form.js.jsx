var RecordForm = React.createClass({
  getInitialState() {
    return (
      title: '',
      date: '',
      amount: ''
    )
  },

  handleChange(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
  },

  render() {
    return (
      <form className='form-inline'>
        <div className='form-group'>
          <input className='form-control' type='text' placeholder='Date' name='date' value={this.state.date} onChange={this.handleChange}></input>
        </div>
        <div className='form-group'>
          <input className='form-control' type='text' placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange}></input>
        </div>
        <div className='form-group'>
          <input className='form-control' type='number' placeholder='Amount' name='amount' value={this.state.amount} onChange={this.handleChange}></input>
        </div>
        <button className='btn btn-primary' type='submit' disabled={!this.valid()}>Create Record</button>
      </form>
    )
  }
});