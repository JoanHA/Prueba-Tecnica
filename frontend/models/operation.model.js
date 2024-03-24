export class Operation {
  constructor(n1, n2, endpoint) {
      this.n1 = n1;
      this.n2 = n2;
      this.endpoint = endpoint;
  }

  //Funcion para validar los datos de entrada
  validarDatos() {
      const numero1 = Math.abs(this.n1);
      const numero2 = Math.abs(this.n2);
      if (isNaN(numero1) || isNaN(numero2)) {
          console.error("No se puede realizar la operación. Asegúrate de ingresar solo números.");
        
          return false;
      }
      if (this.n2 === 0 ) {
          console.error("No se puede dividir entre 0.");
          return false;
          
      }
      return true;
  }

  //Funcion para llamar el api dependiendo de la operacion
  async ejecutarOperacion(operacion) {
      if (!this.validarDatos()) return;
      const formdata = { number1: Math.abs(this.n1), number2: Math.abs(this.n2) };
      return  await this.ajax(operacion, formdata);
  }

  //Funcion ajax para consumir el API
  ajax(operacion, formdata) {
    return new Promise((resolve, reject) => {
        $.ajax({
            // la URL para la petición
            url: this.endpoint + operacion,
            // la información a enviar
            data: formdata,
            // especificar el tipo de petición
            type: 'POST',
            // éxito de la petición
            success: function(response) {
                const converted = JSON.parse(response);
                if (converted.status != 200) {
                    reject("Tuvimos un error: " + converted.data);
                } else {
                    resolve(converted);
                }
            },
            // error en la petición
            error: function(xhr, status) {
                reject('Disculpe, existió un problema');
            },
         
        });
    });
}

}


