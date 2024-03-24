import { Operation } from "../models/operation.model.js";

  document.querySelector("#equal-button").addEventListener("click", () => {
    //declarar constantes de numeros y operador
    const n1 = window.localStorage.getItem("n1");
    const n2 = document.querySelector("#screen-panel").value;
    const operator = window.localStorage.getItem("operator");
    //Validar si hay numeros para realizar la operación
    if (!n1) return console.error("Solo hay un valor, por favor escribe un numero");
    if (!n2) return console.error("Solo hay un valor, por favor escribe otro un numero");


    const path = window.location.href.split("/")
    //llamar el modelo segun la operacion
    const operation = new Operation(
      n1,
      n2,
      `http://${path[2]}/${path[3]}/api/`,
    );

    //Funcion para llamar el modelo 
    async function callModel(operacion){
      try {
        const converted = await operation.ejecutarOperacion(operacion)
        document.querySelector("#preview-panel").value += ` ${
          document.querySelector("#screen-panel").value
        }`;
        document.querySelector("#screen-panel").value = converted.data;
      } catch (error) {
        console.error(error)
        document.querySelector("#screen-panel").value = "Error"
      }finally{
        window.localStorage.removeItem("n1");
        window.localStorage.removeItem("operator");
      }
    }
    //Verificar cual es el operador
    switch (operator) {
      case "+":
        callModel("sumar")
        break;
      case "-":
        callModel("restar")
        break;
      case "/":
        callModel("dividir")
        break;
      case "*":
        callModel("multiplicar")
        break;
      default:
        alert("No hay un operador");
        break;
    }
  });

