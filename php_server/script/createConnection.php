<?php

    function startConnection(){
        // nome di host
        $host = "localhost";
        // username dell'utente in connessione
        $user = "root";
        // password dell'utente
        $password = "";

        // nome db
        $dbname = "stage";

        // stringa di connessione al DBMS
        $connection =mysqli_connect($host, $user, $password,$dbname);

        // verifica su eventuali errori di connessione
        if (mysqli_connect_errno($connection)) {
            die("Connection failed: " . $connection->connect_error);
            }
        return $connection;
    }

?>