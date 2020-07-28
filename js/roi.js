function resultsGenerate() {
  let projectedRevenue = document.getElementById("projected-revenue").value;
  let likelihoodSuccess = (document.getElementById("likelihood-success").value) / 100;
  let productLifespan = document.getElementById("product-lifespan").value;
  let developmentCost = document.getElementById("development-cost").value;
  let ongoingCost = document.getElementById("ongoing-cost").value;
  document.write((projectedRevenue * likelihoodSuccess * productLifespan) - (developmentCost) - (ongoingCost * productLifespan));
  document.write("<br/><button onClick='location.reload()'>Refresh</button>");
}

function resultsSupport() {
  let attributedRevenue = document.getElementById("attributed-revenue").value;
  let likelihoodSuccess = (document.getElementById("likelihood-success").value) / 100;
  let productLifespan = document.getElementById("product-lifespan").value;
  let developmentCost = document.getElementById("development-cost").value;
  let ongoingCost = document.getElementById("ongoing-cost").value;
  document.write((attributedRevenue * likelihoodSuccess * productLifespan) - (developmentCost) - (ongoingCost * productLifespan));
  document.write("<br/><button onClick='location.reload()'>Refresh</button>");
}

function resultsCreate() {
  let savedExpenditures = document.getElementById("saved-expenditures").value;
  let likelihoodSuccess = (document.getElementById("likelihood-success").value) / 100;
  let productLifespan = document.getElementById("product-lifespan").value;
  let developmentCost = document.getElementById("development-cost").value;
  let ongoingCost = document.getElementById("ongoing-cost").value;
  document.write((savedExpenditures * likelihoodSuccess * productLifespan) - (developmentCost) - (ongoingCost * productLifespan));
  document.write("<br/><button onClick='location.reload()'>Refresh</button>");
}