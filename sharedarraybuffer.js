var ia;
onmessage = function (ev) {
  ia = ev.data;
  console.log("Worker received: " + ev.data);
  Atomics.add(ia, 0, 1000);
  Atomics.add(ia, 1, 1000);
  postMessage("Your turn.");
}
