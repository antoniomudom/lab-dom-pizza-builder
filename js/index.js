// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mushroom)=>{
    if(state.mushrooms){
      mushroom.style.visibility = 'visible';
    }else{
      mushroom.style.visibility = 'hidden';
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}
//Hasta aquí era sencillo porque había que copiar el modelo de Pepperoni.


  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  function renderWhiteSauce() {
    const sauce = document.querySelector('.sauce');
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white');
    } else {
      sauce.classList.remove('sauce-white');
    }
}


  //Creo que podría haberlo hecho con ClassName pero me resulta más sencillo el .add y .remove

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  function renderGlutenFreeCrust() {
    const crust = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free');
    } else {
      crust.classList.remove('crust-gluten-free');
    }
}


  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  function renderButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
      const ingredient = button.getAttribute('data-ingredient');
      if (state[ingredient]) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
}

function renderPrice() {
  const pricePanel = document.querySelector('.panel.price');
  let totalPrice = basePrice;
  let ingredientList = '';

  if (state.pepperoni) {
    const pepperoniPrice = ingredients.pepperoni.price;
    totalPrice += pepperoniPrice;
    ingredientList += `<li>$${pepperoniPrice} ${ingredients.pepperoni.name}</li>`;
  }

  if (state.mushrooms) {
    const mushroomsPrice = ingredients.mushrooms.price;
    totalPrice += mushroomsPrice;
    ingredientList += `<li>$${mushroomsPrice} ${ingredients.mushrooms.name}</li>`;
  }

  if (state.greenPeppers) {
    const greenPeppersPrice = ingredients.greenPeppers.price;
    totalPrice += greenPeppersPrice;
    ingredientList += `<li>$${greenPeppersPrice} ${ingredients.greenPeppers.name}</li>`;
  }

  if (state.whiteSauce) {
    const whiteSaucePrice = ingredients.whiteSauce.price;
    totalPrice += whiteSaucePrice;
    ingredientList += `<li>$${whiteSaucePrice} ${ingredients.whiteSauce.name}</li>`;
  }

  if (state.glutenFreeCrust) {
    const glutenFreeCrustPrice = ingredients.glutenFreeCrust.price;
    totalPrice += glutenFreeCrustPrice;
    ingredientList += `<li>$${glutenFreeCrustPrice} ${ingredients.glutenFreeCrust.name}</li>`;
  }

  pricePanel.innerHTML = `
    <h2>Precio de tu Pizza</h2>
    <b>$${totalPrice}</b>
    <ul>${ingredientList}</ul>
  `;
}// Esta parte ha sido larga, me ha costado y he necesitado ayuda de Google la verdad pero comprendo lo que hago.

  // Iteration 4: change the HTML of `<aside class="panel price">`


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

//Esta parte de la iteration 1 también era fácil teniendo en cuenta al pepperoni



// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});