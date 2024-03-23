<?php

//Obtener la url 
$arrayRoutes = explode("/", $_SERVER["REQUEST_URI"]);

//Ya que toda las rutas son del metodo POST verificar si el metodo entrante es POST
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === "POST") {

  //Obtener los datos del Request y crear la instancia del controlador
  $number1  = $_POST["number1"];
  $number2  = $_POST["number2"];
  $calculator = new Operators($number1,$number2);
  //Veriificar la url del API con el endpoint correcto
  switch ((array_filter($arrayRoutes)[3])) {
    case 'sumar':
      return  $calculator->sumar();
      break;
    case 'restar':
      return  $calculator->restar();
      break;
    case 'dividir':
      return  $calculator->dividir();
      break;
    case 'multiplicar':
      return  $calculator->multiplicar();
      break;
    default:
      $json = array(
        "status"=>404,
        "data" => "Ruta No encontrada"
      );
      echo json_encode($json, true);

      break;
  }
}
