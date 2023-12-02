<?php


session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $token = $_POST['token'];
    $newPassword = $_POST['new_password'];
    $confirmPassword = $_POST['confirm_password'];

    if ($newPassword === $confirmPassword) {

        $_SESSION['message'] = 'Senha redefinida com sucesso.';
    } else {
        $_SESSION['message'] = 'As senhas não coincidem. Tente novamente.';
    }

    header('Location: reset.php');
} else {
    header('Location: reset.php');
}