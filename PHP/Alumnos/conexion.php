
<?php
$host = "localhost";
$usuario = "root";
$password = "";
$base_de_datos = "escuela";
$mysqli = new mysqli($host, $usuario, $password , $base_de_datos);
if ($mysqli->connect_errno) {
    echo "Falló la conexión a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}