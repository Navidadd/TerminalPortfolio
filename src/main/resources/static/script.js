
const aboutMe = {
  intro: "I'm a self-taught computer science student passionate about programming, computing, and electronics. As a Linux enthusiast i enjoy working with Raspberry Pis, experimenting with different distributions, and building various projects. I also find pleasure in creating practical Arduino projects that enhance my daily life.",
  intro2: "My focus is on learning and experimenting, whether it's with familiar technologies or new tools that expand my skills.",
  skills: {
    "C" : [""],
    "C++" : [""],
    "HTML & CSS" : [""],
    Java: ["Applications", "JDBC", "Maven", "Spring (Core & Boot)", "Thymeleaf", "Threads", "Swing", "JSP"],
    Linux: ["Bash scripting for automation and system administration tasks", "Database Administration on Linux systems,  Java web applications deployment on Apache Tomcat server", "version control with Git for collaborative software development", "Systems Administration, Configuration and Maintenance"],
    Databases: ["SQL (Data & Table Manipulation,Stored Procedures, Functions)", "MySQL/MariaDB", "DB2", "MongoDB", "SQL Server", "NoSQL"],
    Cloud: ["AWS cloud services like EC2, S3, RDS, Lambda, IAM, etc."]
  },
  education: {
    "UTN e-Learning Center": [
      "Java Programming Diploma (Oct 2022 - Feb 2023)",
      "Database Diploma (Feb 2023 - May 2023)",
      "AWS Cloud Computing Course (Nov 2023 - Jan 2024)"
    ],
    "Universidad Nacional de San Martín": "Tecnicatura en Programación Informática (Mar 2021 - Mar 2023)"
  }
};

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
        output = "<span class='current'>About Me</span><p>" + aboutMe.intro + "</p><p>"+aboutMe.intro2+"</p><br><span class='current'>Skills</span><ul>";

        // Loop through skills object
        for (const skill in aboutMe.skills) {
          output += `<li><span class="command">${skill}</span>: ${aboutMe.skills[skill].join(', ')}</li>`;
        }
        
        output += "</ul><span class='current'>Education</span><ul>";
        
        // Loop through education object
        for (const institution in aboutMe.education) {
          if (typeof aboutMe.education[institution] === 'string') {
            output += `<li><span class="command">${institution}</span>: ${aboutMe.education[institution]}</li>`;
          } else {
            output += `<li><b class="command">${institution}:</b><ul>`;
            for (const course of aboutMe.education[institution]) {
              output += `<li>${course}</li>`;
            }
            output += `</ul></li>`;
          }
        }
        
        output += "</ul>";
        break;
      case "projects":
          output = "<span class='current'>Projects</span><br> "
          output += "<br> <span class='command'>Arduino Watch: </span><a class='link' href='https://github.com/Navidadd/PrototypeWatch' target='_blank'>github.com/Navidadd/PrototypeWatch</a><p>I've crafted a  functional watch using various components including an OLED display, Real-Time Clock (RTC), and a 3.7V battery. Powered by an Arduino Pro Mini, this watch shows the time, date, and battery status. This is my daily watch since i've crafted it in 2020</p><br>";
          output += "<br> <span class='command'>Arduino MacroPad: </span><a class='link' href='https://github.com/Navidadd/Arduino-MacroPad' target='_blank'>github.com/Navidadd/Arduino-MacroPad</a><p>I've also created a custom macro pad for my PC, with a range of features designed to suit my needs, using an Arduino Pro Micro, 11 keyswitches, a rotary encoder and a 3D printed case. This macro pad enhances my daily tasks, especially when programming and working with text. It's become an invaluable tool, significantly improving my efficiency and productivity.</p><br>";
          output += "<br> <span class='command'>RaspberryPi Cyberdeck: </span><a class='link' href='' target='_blank'>github.com/Navidadd/Arduino-MacroPad</a><p>I've created a cyberdeck for mi RaspberryPi's utilizing 20x20 aluminum Bosch profiles, a 7-inch HDMI LCD screen, a wireless keyboard, and 3D printing parts. Its primary function is to serve as a versatile device for easy interaction with any Raspberry Pi. Simply connect the Raspberry Pi to the cyberdeck, and you have a convenient platform for various tasks.</p><br>";
          break;
      case "contact":
        var output = "<span class='command';'>Email:</span> <a class='link' href='mailto:ian-orts@hotmail.com' target='_blank'>ian-orts@hotmail.com</a><br><span class='command' target='_blank'>LinkedIn:</span> <a class='link' href='https://www.linkedin.com/in/ian-orts' target='_blank'>linkedin.com/in/ian-orts</a><br><span class='command'>GitHub:</span> <a class='link' href='https://github.com/Navidadd'>github.com/Navidadd</a>";
        break;
      default:
          output = "Comando no reconocido. Escribe 'help' para obtener ayuda.";
  }
 
  // Eliminar la última línea
  var content = document.querySelector(".content");
  content.removeChild(content.lastElementChild);

  // Añadir la nueva línea con el comando y la salida
  content.innerHTML += "<p class'command_space'><span class='highlight'>user</span><span>@</span><span>portfolio</span>:~$ " + input + "</p><br><br><p>" + output + "</p>";
  content.innerHTML += "<br><br><p class'command_space'><span class='highlight'>user</span><span>@</span><span>portfolio</span>:~$ <span id='input' contenteditable='true' autofocus></span><span id='cursor'>_</span></p>";

   content.scrollTop = content.scrollHeight;
}


  