document.addEventListener("DOMContentLoaded",function() {
    var selectElement = document.getElementById("subscriptionMultiselect");
    var showSelectedButton = document.getElementById("showSelected"); 
    
    showSelectedButton.addEventListener("click",function() {
      var selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value); 
      console.log("Selected subscriptions: ", selectedOptions);
// You can perform further actions with the selected options here
      }); });