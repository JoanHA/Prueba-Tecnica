# Prueba-Tecnica

Documentación de la prueba técnica
Índice
•	Objetivo y descripción del proyecto
•	Requerimientos para ejecutar entorno local
•	Como ejecutar en entorno local
•	Estructura y diseño del proyecto

Objetivo:
El objetivo de esta prueba es evaluar mis habilidades en el desarrollo full stack
utilizando PHP nativo, JavaScript (puede incluir jQuery), y CSS (con Bootstrap).
Debo crear un proyecto MVC que consista en una calculadora básica que
realice operaciones aritméticas utilizando una API externa.

Descripción del Proyecto:
Desarrollar un sistema de calculadora que permita al usuario ingresar dos
números y seleccionar una de las cuatro operaciones básicas: suma, resta,
multiplicación o división. Los datos ingresados por el usuario serán enviados a
través de peticiones AJAX a un controlador PHP, el cual se encargará de llamar a
un servicio que consumirá una API externa para realizar las operaciones
aritméticas.

Requisitos para ejecutar en entorno local
Para poder ejecutar este proyecto es necesario contar con:
•	Un computador con internet 
•	XAMPP instalado en el equipo
•	GIT instalado en el equipo
•	Link del repositorio del proyecto

Como ejecutar en ambiente local.
Paso 1. 
Para ejecutar el proyecto primeramente deberás instalar XAMPP en el equipo ingresando a la plataforma https://www.apachefriends.org/es/index.html descargarlo e instalarlo 
Paso 2.
También debemos instalar Git para poder clonar el repositorio de GitHub, para descargarlo vamos a la pagina https://git-scm.com/download/win y descargamos la versión para nuestro sistema operativo 

Paso 3.
Después de tener nuestro servidor funcionando vamos a ir la carpeta htdocs que en Linux normalmente se encuentra en “/opt/lampp/htdocs” y en Windows en “C:\xampp\htdocs”.
Dentro de esta carpeta vamos a abrir una terminal y clonar el repositorio con “git clone https://github.com/JoanHA/Prueba-Tecnica.git”
Estructura del proyecto y diseño 
Esta calculadora que utiliza el patrón Modelo-Vista-Controlador (MVC) y sigue los principios SOLID se organizaría de la siguiente manera:
1. Modelo (Model):
El modelo representa la lógica de negocio y los datos de la aplicación. En este caso el modelo contiene la validación de los números a operar y la llamada al API que realiza las operaciones
Responsabilidades:
  •	Validación de los datos.
  •	Llamar al API que realice los cálculos y devolver los resultados.
2. Vista (View):
La vista es la interfaz de usuario (UI) que muestra los datos al usuario y recibe las interacciones del mismo.  En este caso la interfaz es un panel donde se muestran los numero a operar y resultados y los botones de 1-9 y los de cálculos básicos.
Responsabilidades:
  •	Mostrar la interfaz de usuario.
  •	Recibir entradas del usuario.
  •	Mostrar resultados.
3. Controlador (Controller):
El controlador actúa como intermediario entre el modelo y la vista. Se encarga de gestionar las interacciones del usuario y llamar el modelo y la vista en consecuencia. Este recibe los datos a operar la valida y elige a que método del modelo llamar para realizar la operación correspondiente para luego al recibir los datos actualizar la vista con los resultados.
Responsabilidades:
  •	Interpretar las acciones del usuario.
  •	Llamar el modelo según las acciones del usuario.
  •	Actualizar la vista con los resultados o cambios.
Principios SOLID:
Los principios SOLID son un conjunto de reglas de diseño que facilitan la creación de sistemas más mantenibles, escalables y robustos. Trate de utilizarlos de la mejor manera combinándolos con el MVC para que así el proyecto fuera mucho más mantenible y escalable
 Principio de Responsabilidad Única (SRP)- S 
Cada parte de la calculadora tiene su razón especifica de ser y solo se verán obligados a un cambio si cambia la lógica de negocio o los requisitos de interfaz de usuario.
Principio de Abierto/Cerrado (OCP)- O:
En los modelos las clases están prestas para su extensión, pero no para la modificaron del código existente, en caso tal de agregar una nueva operación simplemente se extiende la clase y se agrega la nueva operación sin cambiar el código existente 
Principio de Sustitución de Liskov (LSP) – l:
Significa que cualquier clase que implemente una operación matemática específica (suma, resta, etc.) puede ser utilizada indistintamente en cualquier lugar donde se requiera esa operación.
Principio de Segregación de Interfaces (ISP) - I:
El usuario solo ve la interfaz necesaria para realizar las operaciones y no tiene ninguna interfaz innecesaria 
Principio de Inversión de Dependencia (DIP)- D:
Significa que las clases de alto nivel (como el controlador) depende de abstracciones (como interfaces) en lugar de clases concretas (como implementaciones específicas de operaciones matemáticas). Esto facilita la sustitución de implementaciones sin cambiar el código de alto nivel.
Estructura del Proyecto:
	/Api: Contiene los controladores y los archivos relacionados con el backend del proyecto
  -  /controllers: Contiene las clases relacionadas a la lógica de las operaciones matemáticas
  -  /routes:  Contiene las rutas POST de las diferentes operaciones
	/Frontend: Contiene las carpetas de toda la lógica de negocio e interacciones de usuario 
    - /controllers: contiene la clase relacionada con la gestión de las interacciones del usuario y la comunicación entre el modelo y la vista.
    - /fonts: contiene los estilos de fuente de la aplicación 
    - /css: contiene las hojas de estilos para la calculadora
    - /js: contiene los archivos de manejo de la interacción de la interfaz de usuario
    - /models: contiene las clases relacionadas con la lógica de negocio y las operaciones matemáticas
    - index.html: contiene el archivo principal que inicializa la interfaz de usuario
Al seguir esta estructura y los principios SOLID, se facilita la comprensión, mantenimiento y escalabilidad del proyecto de la calculadora.

Decisiones de diseño 
Al saber que debía desarrollar una calculadora lo primero que se me vino a la mente fue un panel horizontal y rectangular arriba de múltiples botones con numero de 0-9 y los signos de operaciones básicas. Es Por eso que pensé en algo sencillo que fuera fácil de utilizar e intuitivo para que el usuario pudiera sus operaciones sin mucha complejidad. En los colores quería algo neutro y no muy llamativo.

