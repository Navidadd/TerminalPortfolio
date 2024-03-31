document.addEventListener("DOMContentLoaded", function() {
  var inputField = document.getElementById("input");
  var cursor = document.getElementById("cursor");
  inputField.focus();

  // Función para alternar la visibilidad del cursor
  function toggleCursor() {
      cursor.style.visibility = (cursor.style.visibility === "visible") ? "hidden" : "visible";
  }

  // Hacer que el cursor titile
  var cursorInterval = setInterval(toggleCursor, 800);
  
});

// Función para enfocar el input
function focusInput() {
  var inputField = document.getElementById("input");
  inputField.focus();
}

// Enfocar el input cuando se carga la página
document.addEventListener("DOMContentLoaded", focusInput);

// Enfocar el input cuando se presiona una tecla
document.addEventListener("keypress", function(event) {
  focusInput();
  if (event.keyCode === 13) {
      var input = document.getElementById("input").innerText.trim();
      executeCommand(input);
      document.getElementById("input").innerText = "";
  }
});

function scrollToBottom() {
  var content = document.querySelector(".content");
  content.scrollTop = content.scrollHeight;
}

function executeCommand(input) {
  var output;
  switch (input) {
      case "":
          output = "";
          break;
      case "help":
          output = "<span class='output-command'>Available commands:</span><br> - <span class='command'>About</span><br> - <span class='command'>Projects</span><br> - <span class='command'>Contact</span>";          
          break;
      case "about":
          output = "Ian, Desarrollador web apasionado por la tecnología y la programación.";
          break;
      case "projects":
          output = "Proyecto 1: [Nombre del proyecto 1]<br>Proyecto 2: [Nombre del proyecto 2]<br>Proyecto 3: [Nombre del proyecto 3]";
          break;
      case "contact":
          output = "Correo electrónico: ejemplo@example.com<br>LinkedIn: linkedin.com/in/ejemplo<br>GitHub: github.com/ejemplo";
          break;
      default:
          output = "Comando no reconocido. Escribe 'help' para obtener ayuda.";
  }

  // Eliminar la última línea
  var content = document.querySelector(".content");
  content.removeChild(content.lastElementChild);

  // Añadir la nueva línea con el comando y la salida
  content.innerHTML += "<p class'command_space'><span class='highlight'>user</span><span>@</span><span>portfolio</span>:~$ " + input + "</p><p>" + output + "</p>";
  content.innerHTML += "<br><br><p class'command_space'><span class='highlight'>user</span><span>@</span><span>portfolio</span>:~$ <span id='input' contenteditable='true' autofocus></span><span id='cursor'>_</span></p>";


   content.scrollTop = content.scrollHeight;
}


  