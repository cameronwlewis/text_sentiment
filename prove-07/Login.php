<?php
session_start();
if ($_SESSION['user_loggedIn']) {
    echo 'You\'re already logged in!';
}
else {

    echo '<div class="account">Log in here.';
    echo '<form id="login_form">';
    echo '<p>Username: <input type="text" id="returningUser_name"></p>';
    echo '<p>Password: <input type="text" id="returningUser_pass"></p>';
    echo '<p><input type="submit"> </p>';
    echo '</form></div>';
    echo '<div>Don\'t have an account? 
        Create one <a href="javascript:showAccountCreation()">
        here</a>';

    $_SESSION['create_or_login'] = 'login';
}
