class Comment {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.email = "test@test.ro";
    this.image = "profil-63.png";
  }
}

var addButton = document.querySelector("#add");
var counter = 0;
var comments = [];
addButton.addEventListener("click", mainFunction);

function displayComments(commentArray) {
  var divComments = document.querySelector("#comments");
  divComments.innerHTML = "";

  for (var i = 0; i < commentArray.length; i++) {
    var card = document.createElement("div");
    card.innerHTML =
      "<img src='" +
      commentArray[i].image +
      "'>" +
      "Id: " +
      commentArray[i].id +
      "<button data-value='" +
      commentArray[i].id +
      "' class='x' onclick='remove(" +
      commentArray[i].id +
      ")'>X</button>" +
      "<hr><br>Email: " +
      commentArray[i].email +
      "<br>Comment:" +
      commentArray[i].text;

    document.querySelector("#comments").appendChild(card);
  }
}

function remove(x) {
  for (var i = 0; i < comments.length; i++) {
    if (comments[i].id == x) {
      comments.splice(i, 1);
    }
  }

  displayComments(comments);
}

function mainFunction() {
  counter++;
  var commentValue = document.querySelector("#comment").value;
  document.querySelector("#comment").value = "";
  comments.push(new Comment(counter, commentValue));
  displayComments(comments);
}
