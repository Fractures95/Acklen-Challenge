describe("Page", () => {

  it("Title", () => {
    browser.url("https://www.shino.de/parkcalc/");
    expect(browser).toHaveTitle("Parking Cost Calculator");
  });

  it("Select Valet Parking ", () => {
    let selectionInput = $("#ParkingLot option:nth-child(1)");

  });

  it("Valet Parking daily price", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");

    initialDate.clearValue();
    initialDate.addValue("5/2/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("5/3/2021");
    departureTime.clearValue();
    departureTime.addValue("12:00");

    expect(initialDate).toHaveValue("5/2/2021");
    expect(initialTime).toHaveValue("12:00");

    expect(departureDate).toHaveValue("5/3/2021");
    expect(departureTime).toHaveValue("12:00");

    button.click();
    var totalCost = browser.$$("span.subhead");    

    expect($("span.subhead")).toHaveText("$ 18.00");
  });

  it("Valet Parking five hours or less rate", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");

    initialDate.clearValue();
    initialDate.addValue("5/3/2021");
    initialTime.clearValue();
    initialTime.addValue("10:00");

    departureDate.clearValue();
    departureDate.addValue("5/3/2021");
    departureTime.clearValue();
    departureTime.addValue("11:00");

    expect(initialDate).toHaveValue("5/3/2021");
    expect(initialTime).toHaveValue("10:00");
    expect(departureDate).toHaveValue("5/3/2021");
    expect(departureTime).toHaveValue("11:00");

    button.click();
    var totalCost = browser.$$("span.subhead");    

    expect($("span.subhead")).toHaveText("$ 12.00");
  });

  it("Short-Term-Hourly-First-Hour", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Short");
    expect(selectionInput).toHaveValue("Short");


    initialDate.clearValue();
    initialDate.addValue("5/3/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("5/3/2021");
    departureTime.clearValue();
    departureTime.addValue("1:00");

    expect(initialDate).toHaveValue("5/3/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("5/3/2021");
    expect(departureTime).toHaveValue("1:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 2.00");

  });

   it("Short-Term-Hourly-First-Hourly-Half hours", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Short");
    expect(selectionInput).toHaveValue("Short");

    initialDate.clearValue();
    initialDate.addValue("6/2/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("6/2/2021");
    departureTime.clearValue();
    departureTime.addValue("1:30");

    expect(initialDate).toHaveValue("6/2/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("6/2/2021");
    expect(departureTime).toHaveValue("1:30");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 3.00");
  
  });

  it("Short-Term-Hourly-First-Hourly-Full Day", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Short");
    expect(selectionInput).toHaveValue("Short");

    initialDate.clearValue();
    initialDate.addValue("6/2/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("6/3/2021");
    departureTime.clearValue();
    departureTime.addValue("12:00");

    expect(initialDate).toHaveValue("6/2/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("6/3/2021");
    expect(departureTime).toHaveValue("12:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 24.00");

  });

  it("Economy Parking, first hour", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Economy");
    expect(selectionInput).toHaveValue("Economy");
    

    initialDate.clearValue();
    initialDate.addValue("6/2/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("6/2/2021");
    departureTime.clearValue();
    departureTime.addValue("1:00");

    expect(initialDate).toHaveValue("6/2/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("6/2/2021");
    expect(departureTime).toHaveValue("1:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 2.00");

  });

  it("Economy Parking daily price", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Economy");
    expect(selectionInput).toHaveValue("Economy");

    initialDate.clearValue();
    initialDate.addValue("6/4/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("6/5/2021");
    departureTime.clearValue();
    departureTime.addValue("12:00");

    expect(initialDate).toHaveValue("6/4/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("6/5/2021");
    expect(departureTime).toHaveValue("12:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 9.00");
  
  });

  it("Economy 7 day price", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Economy");
    expect(selectionInput).toHaveValue("Economy");

    initialDate.clearValue();
    initialDate.addValue("6/3/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("6/10/2021");
    departureTime.clearValue();
    departureTime.addValue("12:00");

    expect(initialDate).toHaveValue("6/3/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("6/10/2021");
    expect(departureTime).toHaveValue("12:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 54.00");
  });

  it("Long term garage parking hourly price", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Long-Garage");
    expect(selectionInput).toHaveValue("Long-Garage");

    initialDate.clearValue();
    initialDate.addValue("5/3/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("5/3/2021");
    departureTime.clearValue();
    departureTime.addValue("1:00");

    expect(initialDate).toHaveValue("5/3/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("5/3/2021");
    expect(departureTime).toHaveValue("1:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 2.00");
  });

  it("Long term garage parking hourly price", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Long-Garage");
    expect(selectionInput).toHaveValue("Long-Garage");

    initialDate.clearValue();
    initialDate.addValue("5/3/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("5/3/2021");
    departureTime.clearValue();
    departureTime.addValue("1:00");

    expect(initialDate).toHaveValue("5/3/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("5/3/2021");
    expect(departureTime).toHaveValue("1:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 2.00");
  });

  it("Long term garage daily price", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Long-Garage");
    expect(selectionInput).toHaveValue("Long-Garage");

    initialDate.clearValue();
    initialDate.addValue("6/4/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("6/5/2021");
    departureTime.clearValue();
    departureTime.addValue("12:00");

    expect(initialDate).toHaveValue("6/4/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("6/5/2021");
    expect(departureTime).toHaveValue("12:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 12.00");
  });

  it("Long term Parking garage 7 days", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Long-Garage");
    expect(selectionInput).toHaveValue("Long-Garage");

    initialDate.clearValue();
    initialDate.addValue("6/3/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("6/10/2021");
    departureTime.clearValue();
    departureTime.addValue("12:00");

    expect(initialDate).toHaveValue("6/3/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("6/10/2021");
    expect(departureTime).toHaveValue("12:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 72.00");
  });

  it("Long-Term Surface Parking (North Lot) per hour", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Long-Surface");
    expect(selectionInput).toHaveValue("Long-Surface");

    initialDate.clearValue();
    initialDate.addValue("5/3/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("5/3/2021");
    departureTime.clearValue();
    departureTime.addValue("1:00");

    expect(initialDate).toHaveValue("5/3/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("5/3/2021");
    expect(departureTime).toHaveValue("1:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 2.00");
  });

  it("Long-Term Surface Parking (North Lot) per hour", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Long-Surface");
    expect(selectionInput).toHaveValue("Long-Surface");

    initialDate.clearValue();
    initialDate.addValue("5/3/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("5/4/2021");
    departureTime.clearValue();
    departureTime.addValue("12:00");

    expect(initialDate).toHaveValue("5/3/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("5/4/2021");
    expect(departureTime).toHaveValue("12:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 10.00");  
  });

  it("Long-Term Surface Parking (North Lot) per week", () => {
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");
    let selectionInput = $("#ParkingLot");

    selectionInput.selectByAttribute("value", "Long-Surface");
    expect(selectionInput).toHaveValue("Long-Surface");

    initialDate.clearValue();
    initialDate.addValue("6/3/2021");
    initialTime.clearValue();
    initialTime.addValue("12:00");

    departureDate.clearValue();
    departureDate.addValue("6/10/2021");
    departureTime.clearValue();
    departureTime.addValue("12:00");

    expect(initialDate).toHaveValue("6/3/2021");
    expect(initialTime).toHaveValue("12:00");
    expect(departureDate).toHaveValue("6/10/2021");
    expect(departureTime).toHaveValue("12:00");

    button.click();
    var totalCost = browser.$$("span.subhead"); 
    expect($("span.subhead")).toHaveText("$ 60.00");  
  });

  //found bugs 

  it("Date field and time field should only accept dates with MM/DD/YYYY format and time field should only accept 12:00 formats.", () => { 
    const initialDate = $("#StartingDate");
    const initialTime = $("#StartingTime");
    const departureTime = $("#LeavingTime");
    const departureDate = $("#LeavingDate");
    const button = $("input[type=submit]");

    initialDate.clearValue();
    initialDate.addValue("12345");
    initialTime.clearValue();
    initialTime.addValue("12345");

    departureDate.clearValue();
    departureDate.addValue("12345");
    departureTime.clearValue();
    departureTime.addValue("12345");

    expect(initialDate).toHaveValue("12345");
    expect(initialTime).toHaveValue("12345");

    expect(departureDate).toHaveValue("12345");
    expect(departureTime).toHaveValue("12345");

    button.click();
    var totalCost = browser.$$("span.subhead");    

    expect($("span.subhead")).toHaveText("Invalid date and time was used. Please make sure it is formmated MM/DD/YY,  Please enter a correct time using HH:MM. Example: 12:30");

});

it("Should return 0 when starting date and time is the same as leaving date and time. Happens on both valet parking and short term parking", () => {
  const initialDate = $("#StartingDate");
  const initialTime = $("#StartingTime");
  const departureTime = $("#LeavingTime");
  const departureDate = $("#LeavingDate");
  const button = $("input[type=submit]");

  initialDate.clearValue();
  initialDate.addValue("6/3/2021");
  initialTime.clearValue();
  initialTime.addValue("12:00");

  departureDate.clearValue();
  departureDate.addValue("6/3/2021");
  departureTime.clearValue();
  departureTime.addValue("12:00");

  expect(initialDate).toHaveValue("6/3/2021");
  expect(initialTime).toHaveValue("12:00");
  expect(departureDate).toHaveValue("6/3/2021");
  expect(departureTime).toHaveValue("12:00");

  button.click();
  var totalCost = browser.$$("span.subhead");    

  expect($("span.subhead")).toHaveText("Arrival date is same as departure dapte, please select a different departure date ");

});

it("Should provide the same input as it is typed on the page. Value on arrival time changes to 24 hour clock after its processed.  ", () => {
  const initialDate = $("#StartingDate");
  const initialTime = $("#StartingTime");
  const departureTime = $("#LeavingTime");
  const departureDate = $("#LeavingDate");
  const button = $("input[type=submit]");
  let selectionInput = $("#ParkingLot");
  let leavingButton = $("input[value=PM]");


  leavingButton.click();

  initialDate.clearValue();
  initialDate.addValue("6/3/2021");
  initialTime.clearValue();
  initialTime.addValue("1:00");

  departureDate.clearValue();
  departureDate.addValue("6/4/2021");
  departureTime.clearValue();
  departureTime.addValue("12:00");

  expect(initialDate).toHaveValue("6/3/2021");
  expect(departureDate).toHaveValue("6/4/2021");
  expect(departureTime).toHaveValue("12:00");

  button.click();
  expect(initialTime).toHaveValue("1:00");
  var totalCost = browser.$$("span.subhead"); 
  expect($("span.subhead")).toHaveText("$ 18.00");
});

it("Should give error message due to negative calculations.", () => {
  const initialDate = $("#StartingDate");
  const initialTime = $("#StartingTime");
  const departureTime = $("#LeavingTime");
  const departureDate = $("#LeavingDate");
  const button = $("input[type=submit]");
  let selectionInput = $("#ParkingLot");

  selectionInput.selectByAttribute("value", "Short");
  expect(selectionInput).toHaveValue("Short");

  initialDate.clearValue();
  initialDate.addValue("6/2/2021");
  initialTime.clearValue();
  initialTime.addValue("5:00");

  departureDate.clearValue();
  departureDate.addValue("6/2/2021");
  departureTime.clearValue();
  departureTime.addValue("4:00");

  expect(initialDate).toHaveValue("6/2/2021");
  expect(initialTime).toHaveValue("5:00");
  expect(departureDate).toHaveValue("6/2/2021");
  expect(departureTime).toHaveValue("4:00");

  button.click();
  var totalCost = browser.$$("span.subhead"); 
  expect($("span.subhead")).toHaveText("Leaving date is before Arrival date, please make sure that your arrival date is after your arrival date and time. ");

});

// "Choose a parking lot" field resets after every time to "valet parking" even if that option was different. 

})
