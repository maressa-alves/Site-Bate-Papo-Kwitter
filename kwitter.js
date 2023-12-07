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
  
 


function login(){
    userName = document.getElementById("userName").value;

    localStorage.setItem("userName", userName);
    
    window.location = "kwitterRoom.html";
    

}