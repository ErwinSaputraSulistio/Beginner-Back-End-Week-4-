exports.statRes = (res, status, result) => {
  const output = {}
  output.callResult = 'Success'
  output.statusCode = status
  output.outputData = result
  res.status(status).json(output)
}

exports.invalidQuery = (res) => { res.status(400).json({ callResult: 'ERROR', statusCode: 400, errSource: 'Invalid query' }) }
exports.queryNaN = (res) => { res.status(400).json({ callResult: 'ERROR', statusCode: 400, errSource: 'Query input is not a number' }) }
