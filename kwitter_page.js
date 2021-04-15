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
//YOUR FIREBASE LINKS
var user_name= localStorage.getItem("user_name");
var room_name= localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function  logout() {
      window.location= "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}

function send() {
var message= document.getElementById("msg").value;

firebase.database().ref(room_name).push({
      name: user_name, 
      message : message,
      like : 0
});
document.getElementById("msg").value= "";
}