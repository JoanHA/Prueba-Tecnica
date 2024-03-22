//Función para escribir en el panel
const onType = (number) => {
  document.querySelector("#screen-panel").value += number;
};

//Función para borrar un digito del panel
const onDelete = () => {
  const valor = document.querySelector("#screen-panel").value;
  document.querySelector("#screen-panel").value = valor.substring(
    0,
    valor.length - 1
  );
};

//Función para eliminar todos los numeros del panel
const onDeleteAll = () => {
  document.querySelector("#screen-panel").value = "";
  document.querySelector("#preview-panel").value = "";
  window.localStorage.removeItem("n1")
};

//funcion para guardar los numeros a operar
const operate = (operator) => {
  const number = document.querySelector("#screen-panel").value;
  const previewPanel = document.querySelector("#preview-panel");
  if (window.localStorage.getItem("n1")) 
    return alert("Esta calculadora es solo para dos numeros.  \n Por favor dale '=' para ver tu resultado");
  
  window.localStorage.setItem("n1", number);
  document.querySelector("#screen-panel").value = "";
  previewPanel.value = number + " " + operator;
};
