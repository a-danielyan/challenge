var React = require('react')
var ReactPivot = require('react-pivot')
var createReactClass = require('create-react-class')

var rows = require('./data.json')

var dimensions = [
  {value: 'host', title: 'host'},
  {value: 'hostname', title: 'Host'},
  {value: 'href', title: 'href'},
  {value: 'origin', title: 'origin'},
  {value: 'pathname', title: 'pathname'},
  {value: 'protocol', title: 'protocol'},
  {value: 'loadId', title: 'loadId'},
  {value: 'subid', title: 'subid'},
  {value: 'ua', title: 'ua'},
  {value: 'version', title: 'version'},
  {value: 'script', title: 'script'},
  {value: 'pid', title: 'pid'},
  {value: 'ads', title: 'ads'},
  {value: 'ip', title: 'ip'},
  {value: 'city', title: 'city'},
  {value: 'region', title: 'region'},
  {value: 'date', title: 'date'},
  {value: 'type', title: 'type'}
]

var reduce = function(row, memo) {
  memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction)
  return memo
}

var calculations = [
  {
    title: 'Amount', value: 'amountTotal',
    template: function(val, row) {
      return '$' + 12
    }
  }
]

var component = createReactClass({
  render: function() {
    return (
		  <ReactPivot rows={rows}
		              dimensions={dimensions}
		              reduce = {reduce}
		              calculations={calculations} 
		              activeDimensions={['date', 'Host']}
		              nPaginateRows={25}/>
    )
  }
})

module.exports = component
