// console.log ("my name is mustafa ali mohmand")
// console.log("*****")
// console.log("*****")
// console.log("*****")
// console.log("*****")
// console.log("*****")
// console.log("*****")

// console.log ("my name is mustafa ali mohmand")
// console.log("*")
// console.log("**")
// console.log("***")
// console.log("****")
// console.log("*****")
// console.log("******")

<!DOCTYPE html>
<html>
<head>
  <title>JS Test</title>
</head>
<body>

  <h2>Greet Me</h2>
  <input type="text" id="nameInput" placeholder="Enter your name">
  <button onclick="greetUser()">Greet</button>

  <p id="greetingMessage"></p>

  <script>
    function greetUser() {
      const name = document.getElementById("nameInput").value;
      const message = "Hello, " + name + "! Welcome to JavaScript.";
      document.getElementById("greetingMessage").innerText = message;
    }
  </script>

</body>
</html>


