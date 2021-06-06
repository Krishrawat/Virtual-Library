let myLibrary = [];

function myBook(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// change later -- start
const div = document.querySelector(".add-book");
div.addEventListener("click", () => {
  const div = document.querySelector(".outer-form");
  if(div.id==="myform-before"){
    div.id="myform";
  }
  else{
    div.id="myform-before";
  }
});
//change later -- end

const displayBook = () => {
  const div = document.querySelector(".books");
  div.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    obj = myLibrary[i];
    const content = document.createElement("div");

    //title
    const title = document.createElement("h2");
    title.innerHTML = `${obj.title}`;
    content.appendChild(title);

    //author
    const author = document.createElement("h2");
    author.innerHTML = `${obj.author}`;
    content.appendChild(author);

    //pages
    const pages = document.createElement("h2");
    pages.innerHTML = `${obj.pages}`;
    content.appendChild(pages);
    /*----button----*/

    const buttonDiv = document.createElement("div");
    buttonDiv.className += "button-div";

    //read-button
    const read = document.createElement("button");
    read.setAttribute("id", `read-button-${i}`);
    console.log(obj);
    read.className += obj.read ? "read" : "unread";
    read.innerHTML = obj.read ? "Read" : "Unread";
    buttonDiv.appendChild(read);

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `delete-button-${i}`);
    deleteButton.className += "delete-div";
    deleteButton.innerHTML = "Delete";
    buttonDiv.appendChild(deleteButton);

    content.appendChild(buttonDiv);
    console.log(pages); //checker
    console.log(myLibrary); //checker

    /*-----setting class here------------*/
    content.className += "content";
    content.id = `#content-${i}`;
    div.appendChild(content);
  }
};

const addBooktoLibrary = (Book) => {
  let myObj = {};
  for (let i = 0; i < Book.length; i++) {
    console.log(Book.elements[i].value);
    if (Book.elements[i].name.length > 1) {
      if (Book.elements[i].name === "read") {
        myObj[Book.elements[i].name] = Book.elements[i].checked ? true : false;
      } else {
        myObj[Book.elements[i].name] = Book.elements[i].value;
      }
    }
  }
  myLibrary.push(myObj);
  console.log(myObj, myLibrary);
  displayBook();
};

const formSubmit = document.querySelector(".form-container");
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  addBooktoLibrary(formSubmit);
});

const deleteCard = (id) => {
  myLibrary.splice(parseInt(id[id.length - 1]), 1);
  displayBook();
};

window.addEventListener("click", (e) => {
  console.log(e.target.type, e);
  if (e.target.nodeName === "BUTTON") {
    console.log(e.target.id);
    if (e.target.className === "read") {
      console.log(e.target.className);
      const div = document.querySelector(`#${e.target.id}`);
      div.className = "unread";
      div.innerHTML = "Unread";
    } else if (e.target.className === "unread") {
      const div = document.querySelector(`#${e.target.id}`);
      div.className = "read";
      div.innerHTML = "Read";
    } else if (e.target.className === "delete-div") {
      console.log(e.target.className);
      deleteCard(e.target.id);
    }
  }
});
