// process.pid returns the process id of the current node process
console.log('process id: ', process.pid)

// process.argv is an array of command line arguments arguments 
process.argv.forEach((val, index, array) => {
  console.log('process arguments: ',`${index}: ${val}`);
});

// process.execPath gets the absolute path of the executable for the current process
console.log('path to executbale: ', process.execPath)

// when a process is about to exit it fires the exit event in this case
// the event is being fired implicitly by the event loop drain
process.on('exit', (code) => {
  console.log('process was exited')
})
