//console.log("It's work");

const marsCost=5000;
const moonCost=3000;



function handleQuantity(planet,operator){


  //Take quantity input dynamically
  console.log(planet,operator);
  const quantityInput=document.getElementById(`${planet}-quantity`).value;
  console.log(quantityInput);
  
  //convert to umber
  let quantity=parseInt(quantityInput);

  //Increment quantity
  if(operator=="plus"){
  quantity++;
  }
  //Error handling
  else{
    if(quantity<1){
      return;
    }
    
      quantity--;
    
  }

  //update input value
  document.getElementById(`${planet}-quantity`).value=quantity;

  calculateJourney(planet);
  updateTotal();

}

function  calculateJourney(planet){
  console.log(planet);
  const quantityInput=document.getElementById(`${planet}-quantity`).value;
  let quantity=parseInt(quantityInput)

  
  if(planet=='mars'){
    let marsTotal= quantity*marsCost;
    console.log(marsTotal);
    updateUI(planet, marsTotal );
  }
  else{
    let moonTotal=quantity*moonCost;
    console.log(moonTotal);
    updateUI(planet, moonTotal );
  }
}

function updateUI(planet,total){
  console.log(planet);
  const planetTotal=document.getElementById(planet+'-total');
  planetTotal.innerText=total;
}

function updateTotal(){
  //Take quantity input statically
  const marsQuantityInput=document.getElementById(`mars-quantity`).value;
  const moonQuantityInput=document.getElementById(`moon-quantity`).value;
  //convert to umber
  let marsQuantity=parseInt(marsQuantityInput);
  let moonQuantity=parseInt(moonQuantityInput);

  //console.log( marsQuantity,moonQuantity);
  let total=marsQuantity* marsCost + moonQuantity*moonCost;
  //console.log(total);
  document.getElementById('total').innerText=total;
}