
if (document.redayState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}


// Cart //
function ready() {
  var removeItemButtons = document.getElementsByClassName('remove-btn')
  	for (var i = 0; i < removeMenuButtons.length; i++) {
    var button = removeItemButtons[i]
    button.addEventListener('click', removeItem)
}

  var quantityInputs = document.getElementsByClassName('item-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
    }

	var addToCartButtons = document.getElementsByClassName('add-btn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
      }

      document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you! Your order will be done shortly!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateMenuTotal()
}

function removeMenuItem() {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateMenuTotal()
}


function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateMenuTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('item-title')[0].innerText
  var price = shopItem.getElementsByClassName('item-price')[0].innerText
	var image = shopItem.getElementsByClassName('product-img')[0].src
  addItemToCart(title, price, image)
  updateMenuTotal()
}

function addItemToCart(title, price, image) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
}

  var cartRowContents = `
    <div class="cart-item cart-column">
		<img class="cart-item-image" src="${imageSrc}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-item-price cart-column">${price}</span>
    <div class="cart-quantity cart-item-quantity cart-column">
	 	<span class="fa fa-minus-circle"></span> 
      <input class="item-quantity-input" type="number" value="1">
		<span class="fa fa-plus-circle"></span>
      <button class="btn btn-remove-item" type="button">REMOVE</button>
    </div>`

  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-remove-item')[0].addEventListener('click', removeMenuItem)
  cartRow.getElementsByClassName('item-quantity-input')[0].addEventListener('change', quantityChanged)

}
  
function updateMenuTotal() {
  var CartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = CartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var cartPrice = cartRow.getElementsByClassName('cart-price')[0]
    var cartQuantity = cartRow.getElementsByClassName('item-quantity-input')[0]
    var price = parseFloat(cartPrice.innerText.replace('$', ''))
    var quantity = cartQuantity.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('item-total')[0].innerText = '$' + total
}



/*



    






function addItemToCart(title, price, image) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
}

  var cartRowContents = `
    <div class="cart-item cart-column">
      <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-item-price cart-column">${price}</span>
    <div class="cart-quantity cart-item-quantity cart-column">
      <input class="item-quantity-input" type="number" value="1">
      <button class="btn btn-remove-item" type="button">REMOVE</button>
    </div>`

  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-remove-item')[0].addEventListener('click', removeMenuItem)
  cartRow.getElementsByClassName('item-quantity-input')[0].addEventListener('change', quantityChanged)

}
  
function updateMenuTotal() {
  var CartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = CartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var cartPrice = cartRow.getElementsByClassName('cart-price')[0]
    var cartQuantity = cartRow.getElementsByClassName('item-quantity-input')[0]
    var price = parseFloat(cartPrice.innerText.replace('$', ''))
    var quantity = cartQuantity.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('item-total')[0].innerText = '$' + total
}

*/

