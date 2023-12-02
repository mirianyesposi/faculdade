<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "pokemon";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Erro de conexão: " . $conn->connect_error);
    }

    $sql = "SELECT id, nome, senha FROM usuarios WHERE email = ? AND senha = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $senha);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user) {
        $_SESSION["username"] = $user["nome"];
        echo "Login bem-sucedido. Bem-vindo, " . $_SESSION["username"] . "!";
        header("Location: home.php");
    } else {
        echo "Credenciais incorretas. Por favor, tente novamente.";
    }

    $stmt->close();
    $conn->close();
}
?>