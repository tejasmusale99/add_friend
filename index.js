const addFriend = document.querySelector('#addFriend_btn')
const removeFriend = document.querySelector('#removeFriend_btn')

const addedConfirmation = document.querySelector('#msgConfirm')

addFriend.addEventListener("click", function() {
    addedConfirmation.innerHTML = "Friends";
  });