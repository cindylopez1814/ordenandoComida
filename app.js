const btn = document.getElementById("button") 

  btn.addEventListener("click", function () {

      let orden = prompt("¿qué deseas pedir hoy?")
      switch (orden){
          case "ceviche":
          prompt("lo sinto se a acabado por hoy ¿deseas ordenar algo mas?")
          case "tacos al pastor":
          prompt("lo sinto se a acabado por hoy ¿deseas ordenar algo mas?")
          case "empanada":
          prompt("lo sinto se a acabado por hoy ¿deseas ordenar algo mas?")
          break;
          case "hamburguesa":
          alert("perfecto en unos minutos tu pedido estara listo en unos minutos")
          break;
          default:
          alert("Lo siento,No esta en el menu de hoy")
        };
      
      });





