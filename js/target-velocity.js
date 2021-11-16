function targetVelocity() {
  let averageVelocity = document.getElementById("average-velocity").value;
  let baselineCapacity = document.getElementById("baseline-capacity").value;
  let adjustedCapacity = document.getElementById("adjusted-capacity").value;
  document.write(averageVelocity * (adjustedCapacity / baselineCapacity));
  document.write("<br/><button onClick='location.reload()'>Refresh</button>");
}