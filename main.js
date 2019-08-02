var yes = $('.yes');
var button = $('.submit');
var groceryList = [];

button.on("click", bucket);

$('.yes').on("click",".delete-btn", deleteItem)

function bucket() {
  var bucketList = $('.next').val();
  newBucket(bucketList);
  storeItem(bucketList);
  clearInputs();
}

function newBucket(bucketList) {
  yes.append(`
    <div class="um">
      <p>${bucketList}</p>
    <button class="delete-btn">Got it!</button>
    </div>
    `);
}

function clearInputs() {
  $('.next').val("");
}

function deleteItem(event) {
  event.target.parentNode.remove();
}

function storeItem(bucketList) {
  groceryList.push(bucketList);
  var groceryListString = JSON.stringify(groceryList);
  localStorage.setItem("Stuff", groceryListString);
}



var newGroceryItem = JSON.parse(localStorage.getItem("Stuff"));

for (var i = 0; i<newGroceryItem.length; i++) {
  yes.append(`
    <div class="um">
      <p>${newGroceryItem[i]}</p>
    <button class="delete-btn">Got it!</button>
    </div>
    `);
}
