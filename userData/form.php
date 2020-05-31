<?php

print_r($_POST);



$error = '';
$firstname = '';
$lastname = '';
$email = '';
$username = '';
$password = '';


function clean_text($string){
    //removes white space
    $string = trim($string);
    //removes backslashed
    $string = stripslashes($string);
    //takes html entries and stores it to a string
    $string = htmlspecialchars($string);

    return $string;
}

if($SERVER["REQUEST_METHOD"] == "POST"){


    if(isset($_POST["button-send"])){
        $name = clean_text($_POST["firstname"]);
        if(!preg_match("/^[a-zA-Z]*$/",$firstname)){
            $error .= '<p><label class = "text-danger">Only numbers and letters allowed</label></p>'
        }
    } 

    if(isset($_POST["button-send"])){
        $name = clean_text($_POST["lastname"]);
        if(!preg_match("/^[a-zA-Z]*$/",$lastname)){
            $error .= '<p><label class = "text-danger">Only numbers and letters allowed</label></p>'
        }
    }

    if(isset($_POST["button-send"])){
        $name = clean_text($_POST["email"]);
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error .= '<p><label class = "text-danger">Invalid email format></p>'

        }
    } 

    if(isset($_POST["button-send"])){
        $name = clean_text($_POST["Username"]);
        if(!preg_match("/^[a-zA-Z]*$/",$username)){
            $error .= '<p><label class = "text-danger">Only numbers and letters allowed in username</label></p>'
        }
    }

    if(isset($_POST["button-send"])){
        $name = clean_text($_POST["password"]);
        if(!preg_match("/^[a-zA-Z]*$/",$lastname)){
            $error .= '<p><label class = "text-danger">Only numbers and letters allowed in password</label></p>'
        }
    }

    if($error == ''){
        $file_open = fopen("user_data.csv", "a");
        $no_rows = count(file("user_data.csv"));
        if($no_rows > 1){
            $no_rows = ($no_rows - 1)+1;
        }
        $form_data = array(

            'sr_no' => $no_rows,
            'firstname' => $firstname,
            'lastname' => $lastname,
            'email' => $email,
            'Username' => $firstname,
            'password' => $password
            
        );

        fputcsv($file_open, $form_data);
        $error = '<p><label class = "text-success"> Success! New user created </label></p>'
        
        // Once it submits form you now have to clear the form again:
        $firstname = '';
        $lastname = '';
        $email = '';
        $username = '';
        $password = '';
    }
}


?>


