const firebaseConfig = {
  apiKey: "AIzaSyCb7pKV5NvZ2OeN_qVAh6rSuG_qmfp3Vw0",
  authDomain: "corrida-multi-5e00b.firebaseapp.com",
  databaseURL: "https://corrida-multi-5e00b-default-rtdb.firebaseio.com",
  projectId: "corrida-multi-5e00b",
  storageBucket: "corrida-multi-5e00b.appspot.com",
  messagingSenderId: "218197910579",
  appId: "1:218197910579:web:5b6166e260b88878c5af46"
};

firebase.initializeApp(firebaseConfig);
//ADICIONE SEUS LINKS FIREBASE

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location = "index.html";
}
