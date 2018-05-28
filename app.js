const btn = document.getElementById("button") 

    btn.addEventListener("click", function () {

        let orden = prompt("¿qué deseas pedir hoy?")
        switch (orden){
            case "ceviche":
            alert("lo sinto se a acabado por hoy")
            prompt("ordenar algo mas")
            case "tacos al pastor":
            alert("lo sinto se a acabado por hoy")
            prompt("ordenar algo mas")
            case "empanada":
            alert("lo sinto se a acabado por hoy")
            prompt("ordenar algo mas")
            break;
            case "hamburguesa":
            alert("perfecto en unos minutos tu pedido esta listo")
            break;
            default:
            alert("Lo siento,No esta en el menu de hoy")
            break;
        }
      
      });





