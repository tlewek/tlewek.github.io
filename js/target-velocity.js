function calcTargetVelocity() {
  let averageVelocity = document.getElementById("average-velocity").value;
  let baselineCapacity = document.getElementById("baseline-capacity").value;
  let adjustedCapacity = document.getElementById("adjusted-capacity").value;
  let targetVelocity = (averageVelocity * (adjustedCapacity / baselineCapacity));
  document.getElementById('target-velocity-calc').innerHTML = "Your target velocity: "+targetVelocity;
}