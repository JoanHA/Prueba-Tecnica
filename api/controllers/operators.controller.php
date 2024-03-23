<?php

class Operators{

  public $num1;
  public $num2;

  function __construct($number1, $number2) {
   $this->num1 = $number1;
   $this->num2 = $number2;
 
  }
  public function sumar(){
    $result = abs($this->num1)  + abs ($this->num2);

    return $this->createResponse(200, $result);
  }
  public function restar(){
    $result = abs($this->num1)  - abs ($this->num2);
    return $this->createResponse(200, $result);
  }
  public function dividir(){
    if ($this->num2 == 0 ) {
      return $this->createResponse(400, "Error: No se puede dividir por cero.");
  }
    $result = abs($this->num1)  / abs ($this->num2);
    return $this->createResponse(200, $result);
  }
  public function multiplicar(){
    $result = abs($this->num1)  * abs ($this->num2);
    return $this->createResponse(200, $result);
  }

  //Funcion para devolver los datos
  private function createResponse($status, $data) {
    $response = array(
        "status" => $status,
        "data" => $data
    );
    echo json_encode($response);
}
}
?>