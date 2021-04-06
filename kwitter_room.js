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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
