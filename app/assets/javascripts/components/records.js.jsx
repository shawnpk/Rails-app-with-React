var Records = React.createClass({
  getInitialState() {
    return { records: this.props.data}
  },

  getDefaultProps() {
    return { records: [] }
  },

  addRecord(record) {
    var records = React.addons.update(this.state.records, { $push: [record] })
    this.setState({ records: records })
  },

  credits() {
    var credits = this.state.records.filter(function(val) {
      return val.amount >= 0;
    });

    return credits.reduce(function(prev, curr) {
      return prev + parseFloat(curr.amount);
    }, 0)
  },

  debits() {
    var debits = this.state.records.filter(function(val) {
      return val.amount < 0
    });

    return debits.reduce(function(prev, curr) {
      return prev + parseFloat(curr.amount)
    }, 0)
  },

  balance() {
    return this.debits() + this.credits();
  },

  render() {
    return (
      <div className='records row'>
        <div className='col-xs-10 col-xs-offset-1'>
          <h2 className='title'>Records</h2>
          <div className='row'>
            <AmountBox type='success' amount={this.credits()} text='Credit' />
            <AmountBox type='danger' amount={this.debits()} text='Debits' />
            <AmountBox type='info' amount={this.balance()} text='Balance' />
          </div>
          <RecordForm handleNewRecord={this.addRecord} />
          <hr />
          <table className='table table-bordered table-hover'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.records.map(function(record) {
                return <Record key={record.id} record={record} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
});
