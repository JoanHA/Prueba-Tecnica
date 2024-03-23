import { Operation } from "../models/Operation.js";

window.addEventListener("load", (e) => {
  document.querySelector("#equal-button").addEventListener("click", () => {
    //declarar constantes de numeros y operador
    const n1 = window.localStorage.getItem("n1");
    const n2 = document.querySelector("#screen-panel").value;
    const operator = window.localStorage.getItem("operator");
    //Validar si hay numeros para realizar la operación
    if (!n1) return alert("Solo hay un valor, por favor escribe un numero");
    if (!n2)
      return alert("Solo hay un valor, por favor escribe otro un numero");

    //llamar el modelo segun la operacion
    const operation = new Operation(
      n1,
      n2,
      "http://localhost:8012/Prueba-Tecnica/api/"
    );

    //Verificar cual es el operador
    switch (operator) {
      case "+":
        operation
          .ejecutarOperacion("sumar")
          .then((converted) => {
            document.querySelector("#preview-panel").value += ` ${
              document.querySelector("#screen-panel").value
            }`;
            document.querySelector("#screen-panel").value = converted.data;
          })
          .catch(() => {
            document.querySelector("#screen-panel").value = "Error";
          })
          .finally(() => {
            window.localStorage.removeItem("n1");
            window.localStorage.removeItem("operator");
          });

        break;
      case "-":
        operation.ejecutarOperacion("restar") .then((converted) => {
            document.querySelector("#preview-panel").value += ` ${
              document.querySelector("#screen-panel").value
            }`;
            document.querySelector("#screen-panel").value = converted.data;
          })
          .catch(() => {
            document.querySelector("#screen-panel").value = "Error";
          })
          .finally(() => {
            window.localStorage.removeItem("n1");
            window.localStorage.removeItem("operator");
          });


        break;
      case "/":
        operation.ejecutarOperacion("dividir") .then((converted) => {
            document.querySelector("#preview-panel").value += ` ${
              document.querySelector("#screen-panel").value
            }`;
            document.querySelector("#screen-panel").value = converted.data;
          })
          .catch(() => {
            document.querySelector("#screen-panel").value = "Error";
          })
          .finally(() => {
            window.localStorage.removeItem("n1");
            window.localStorage.removeItem("operator");
          });


        break;
      case "*":
        operation.ejecutarOperacion("multiplicar") .then((converted) => {
            document.querySelector("#preview-panel").value += ` ${
              document.querySelector("#screen-panel").value
            }`;
            document.querySelector("#screen-panel").value = converted.data;
          })
          .catch(() => {
            document.querySelector("#screen-panel").value = "Error";
          })
          .finally(() => {
            window.localStorage.removeItem("n1");
            window.localStorage.removeItem("operator");
          });


        break;
      default:
        alert("No hay un operador");
        break;
    }
  });
});
