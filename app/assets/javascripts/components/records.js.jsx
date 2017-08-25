var Records = React.createClass({
  getInitialState() {
    return { records: this.props.data}
  },

  getDefaultProps() {
    return { records: [] }
  },

  render() {
    return (
      <div className='records row'>
        <div className='col-xs-10 col-xs-offset-1'>
          <h2 className='title'>Records</h2>
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
