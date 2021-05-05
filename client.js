const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data)
  });

  conn.on('connect', () => {
    console.log('Connection successfully established to game server');
    conn.write('Name: 357');
    // conn.write('Move: up');
    // setTimeout(() => {
    //   conn.write('Move: up');   // MOVE SNEK AUTOMATICALLY UPON CONNECT
    // }, 1000);
    // setInterval(() => {
    //   conn.write('Move: left');
    // }, 2000);
  })


  return conn;
};


module.exports = {
  connect,
  net
};


// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)