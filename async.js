// Add code here

function forEach(arr, cb) {
  for (let i = 0; i < arr.length - 1; i++) {
    cb(arr[i], i);
  }
}

let delays = [200, 500, 0, 350];

function delayLog(delayTime, i) {
  setTimeout(() => {
    console.log(`printing element ${i}`);
  }, delayTime);
}
// forEach(delays, delayLog);

function ajaxSimulate(id, callback) {
  const database = ["Aaron", "Barbara", "Chris"];
  // Add code here
  // set a timer that will pass the element of a database whose index match id
  // to the callback function after 0ms
  setTimeout(() => {
    callback(database[id]);
  }, 0);
}
function storeData(data) {
  let dataReceived = data;
  console.log(dataReceived);
  return dataReceived;
}

// Also add code here
// ajaxSimulate(1,storeData)

// Add code here
function limitedInterval(callback, wait, limit) {
  // setTimeout(()=>{callback},wait)
  console.log(callback);
  console.log(wait);
  console.log(limit);
  
}

// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log("repeating"), 100, 550); // should log 'repeating' once per 100 ms, five times.
