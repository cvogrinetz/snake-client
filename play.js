const { connect, net } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
// connect();

setupInput(connect());