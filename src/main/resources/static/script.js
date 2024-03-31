
var about = `
           _,met$$$$$gg.           user@debian
        ,g$$$$$$$$$$$$$$$P.        ----------
      ,g$$P""       """Y$$.".      OS: Debian GNU/Linux 11 (bullseye)
     ,$$P'              '$$$.      Kernel: x86_64 Linux 5.10.0-12-amd64
   ',$$P       ,ggs.     '$$b:    Uptime: 2h 13m
   'd$$'     ,$P"'   .    $$$     Packages: 2309
    $$P      d$'     ,    $$P     Shell: bash 5.1.8
    $$:      $$.   -    ,d$$'     Resolution: 1920x1080
    $$;      Y$b._   _,d$P'       DE: GNOME 3.38.6
    Y$$.    '.'"Y$$$$P"'          WM: Mutter
    '$$b      "-.__               GTK Theme: Adwaita-dark [GTK2/3]
     'Y$$                         Icon Theme: Adwaita
      'Y$$.                       Disk: 14G / 59G (25%)
        '$$b.                     CPU: Intel i5-8250U (8) @ 3.400GHz
           'Y$$b.                 GPU: Intel UHD Graphics 620
              '"Y$b._             Memory: 2814MiB / 7849MiB
                  '""""`;

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
          output = "<span class='output-command'>Available commands:</span><br> - <span class='command'>about</span><br> - <span class='command'>projects</span><br> - <span class='command'>contact</span>";          
          break;
      case "about":
          output = about;
          break;
      case "projects":
          output = "Proyecto 1: [Nombre del proyecto 1]<br>Proyecto 2: [Nombre del proyecto 2]<br>Proyecto 3: [Nombre del proyecto 3]";
          break;
      case "contact":
        var output = "<span class='command';'>Correo electrónico:</span> <a href='mailto:ian-orts@hotmail.com' target='_blank'>ian-orts@hotmail.com</a><br><span class='command' target='_blank'>LinkedIn:</span> <a href='https://www.linkedin.com/in/ian-orts' target='_blank'>linkedin.com/in/ian-orts</a><br><span class='command'>GitHub:</span> <a href='https://github.com/Navidadd'>github.com/Navidadd</a>";
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


  