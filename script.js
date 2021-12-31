numBooks = 1;
// Fix header on the page
window.onscroll = function() {scrolling()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function scrolling() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }


//Scroll down button
const scrollButton = document.querySelector(".mouse_scroll");

scrollButton.addEventListener("click", goToCollection );

function goToCollection() {
  document.querySelector(".collection").scrollIntoView();
}

//Add a book
const addButton = document.querySelector(".add");
const cardsWrapper = document.querySelector(".cards-wrapper");
addButton.addEventListener("click", addBook);
const modal = document.querySelector(".data-input");

function addBook() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//handle submit button
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", submitData);
 
function submitData(){
  const card = document.querySelector(".card");
  let newCard = card.cloneNode(true);
  cardsWrapper.appendChild(newCard);
  numBooks++;
  reload(); //reload to add new buttons to arrays and add listeners

  var getTitle = document.getElementById("title").value;
  var getAuthor = document.getElementById("author").value;
  var getNumPages = document.getElementById("numPages").value;

  document.querySelector(".book-title").innerHTML = getTitle;
  document.querySelector(".book-author").innerHTML = getAuthor;
  document.querySelector(".book-numPages").innerHTML = getNumPages;

  newCard.style.display = "block";
  modal.style.display = "none";
}
//handle read Button 
let readButtons = [];

function changeStatus(){
  var t = this.parentNode.children;
  
  for (let i = 0; i < t.length; i++) {
    if(t[i] == this){
      if(this.textContent== "Read"){
        this.classList.remove("read");
        t[i].innerHTML = "Not Read";
      } 
      else {
        this.classList.add("read");
        t[i].innerHTML = "Read";
      }
     
    }
  }
  
}

//handle remove button
let removeButtons =[]
reload();

function reload(){
  removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach(button => {
      button.addEventListener("click", removeCard)
    });
  readButtons = document.querySelectorAll(".change-status");
  readButtons.forEach(button => {
    button.addEventListener("click", changeStatus);
  });
}  

function removeCard() {
  if (numBooks != 1){
    var parentCard = this.parentNode;
    parentCard.remove();
    numBooks--;
  }
}

