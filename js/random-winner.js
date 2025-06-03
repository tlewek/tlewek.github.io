// add arrays here

let selectedCategory = "default";

function handleDropdownChange() {
  selectedCategory = document.getElementById("dropdown").value;
  console.log("Selected Category:", selectedCategory);
}

function pickWinner() {
  let selectedArray = [];

  switch (selectedCategory) {
    case "mlb":
      selectedArray = mlbEntries;
      break;
    case "life":
      selectedArray = lifeEntries;
      break;
    case "yoga":
      selectedArray = yogaEntries;
      break;
    case "3d":
      selectedArray = threeDEntries;
      break;
    case "table-wine":
      selectedArray = tableWineEntries;
      break;
    case "tote":
      selectedArray = toteEntries;
      break;
    case "deliciousness":
      selectedArray = deliciousnessEntries;
      break;
    case "cookbook":
      selectedArray = cookbookEntries;
      break;
    case "entertainment":
      selectedArray = entertainmentEntries;
      break;
    case "guggenheim":
      selectedArray = guggenheimEntries;
      break;
    case "hazel-village":
      selectedArray = hazelVillageEntries;
      break;
    case "bakery":
      selectedArray = bakeryEntries;
      break;
    case "mls":
      selectedArray = mlsEntries;
      break;
    case "goldfish":
      selectedArray = goldfishEntries;
      break;
    case "soccer":
      selectedArray = soccerEntries;
      break;
    default:
      document.getElementById("choice").innerText = "Please select a category.";
      return;
  }

  const randomWinner = selectedArray[Math.floor(Math.random() * selectedArray.length)];
  const message = `Congratulations, ${randomWinner.firstName} (ticket # ${randomWinner.ticketNumber})! You won ${randomWinner.ticketType}`;

  document.getElementById("choice").innerText = message;
}