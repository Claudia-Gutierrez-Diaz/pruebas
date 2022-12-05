<?php
    include 'db_connection.php';
    $conexion = OpenCon();
    $action = $_POST['action'];
 
    $name = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = $_POST['contraseña'];
 
    
    if($_POST['action'] == 'register'){
        $sql = "Insert into alumnos (nombre, email,contraseña)
         values ('$name ',  '$email','$contraseña');";

        $result = $conexion->query($sql);
        if($result == 1){
            $sql2 = "Insert into users (rol) values ( 1);";
            $result2 = $conexion->query($sql2);
                
                CloseCon($conexion);
                echo json_encode(array('rol' => '1'));
            
        }
    }



?>