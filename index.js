const addFriend = document.querySelector("#addFriend_btn");
// const removeFriend = document.querySelector('#removeFriend_btn')

const addedConfirmation = document.querySelector("#msgConfirm");

let value = 0;

addFriend.addEventListener("click", function () {
  if (value == 0) {
    addedConfirmation.innerHTML = "Friends";
    addedConfirmation.style.color = "green";
    addFriend.innerHTML = "Removed Friend"
    value = 1;
  }else{
    addedConfirmation.innerHTML = "Stranger";
    addedConfirmation.style.color = "red";
    value = 0;
    addFriend.innerHTML = "Add Friend"
  }

});

//   removeFriend.addEventListener('click',function(){
//     addedConfirmation.innerHTML = "Stranger"
//     addedConfirmation.style.color = "red"
//   })
