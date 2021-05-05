let connection;


const setupInput = (conn) => {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = (key) => {
    if(key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      conn.write('Move: up');
    } else if (key === 's') {
      conn.write('Move: down');
    } else if (key === 'a') {
      conn.write('Move: left');
    } else if (key === 'd') {
      conn.write('Move: right');
    } else if (key === 'q') {
      conn.write('Say: MOOOOOOVE');
    } else if (key === 'e') {
      conn.write('Say: Gotcha')
    }
  };
  stdin.on('data', handleUserInput)
  
  return stdin;
};

module.exports = {
  setupInput
};