var firebaseConfig = {
      apiKey: "AIzaSyAQcYSbbAvlWCXnhxWPjczmZBI8hsKZ3ck",
      authDomain: "kwitter-83383.firebaseapp.com",
      databaseURL: "https://kwitter-83383-default-rtdb.firebaseio.com",
      projectId: "kwitter-83383",
      storageBucket: "kwitter-83383.appspot.com",
      messagingSenderId: "470025914370",
      appId: "1:470025914370:web:fd0d1670f33c7ca47a3f1b"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!!";

function addroom() {
var room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room"
  });
  localStorage.setItem("room_name", room_name);
  window.location= "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}
