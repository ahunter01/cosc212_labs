<?php
session_start();
$_SESSION['deliveryName'] = $_POST['deliveryName'];
$_SESSION['deliveryEmail'] = $_POST['deliveryEmail'];
$_SESSION['deliveryAddress1'] = $_POST['deliveryAddress1'];
$_SESSION['deliveryCity'] = $_POST['deliveryCity'];
$_SESSION['deliveryPostcode'] = $_POST['deliveryPostcode'];
$_SESSION['cardNumber'] = $_POST['cardNumber'];
$_SESSION['cardValidation'] = $_POST['cardValidation'];
$_SESSION['cardType'] = $_POST['cardType'];
 ?>
<!DOCTYPE html>
<html lang="en">
    <?php
    $scriptList = array('jquery-3.6.0.min.js', 'Cookie.js');
    include("htaccess/header.php");
    include("htaccess/validateFunctions.php");
    ?>
  <div id="main">
      <?php
      $formOk = false;
      if (isset($_POST['submit'])) {
          $formOk = true;

          //To check delivery name
          if (isEmpty($_POST['deliveryName'])) {
              $formOk = false;
              echo "<p>You must enter a name to deliver to</p>";
          }
          //To check email address
          if (isEmpty($_POST['deliveryEmail'])) {
              $formOk = false;
              echo "<p>You must enter an email address</p>";
          }elseif (!isEmail($_POST['deliveryEmail'])) {
              $formOk = false;
              echo "<p>That doesn't look like a valid email address</p>";
          }

          //To check delivery address
          if (isEmpty($_POST['deliveryAddress1'])) {
              $formOk = false;
              echo "<p>You must enter a delivery address</p>";
          }

          //To check delivery city
          if (isEmpty($_POST['deliveryCity'])) {
              $formOk = false;
              echo "<p>You must enter a city to deliver to</p>";
          }

          //To checking postcode
          if (isEmpty($_POST['deliveryPostcode'])) {
              $formOk = false;
              echo "<p>You must enter a postcode</p>";
          }elseif (!isDigits($_POST['deliveryPostcode']) || !checkLength($_POST['deliveryPostcode'], 4)) {
              $formOk = false;
              echo "<p>Postcodes must be exactly 4 digits long</p>";
          }

          //To check card
          if (isEmpty($_POST['cardNumber'])) {
              $formOk = false;
              echo "<p>You must enter a credit card number</p>";
          }elseif (!checkCardNumber($_POST['cardType'], $_POST['cardNumber'])){
              $formOk = false;
              echo "<p>You must enter a credit card number</p>";
          }

          if (!checkCardDate($_POST['cardMonth'], $_POST['cardYear'])) {
              $formOk = false;
              echo "<p>Enter a valid credit card date</p>";
          }
          if (!checkCardVerification($_POST['cardType'], $_POST['cardValidation'])) {
              $formOk = false;
              echo "<p>Please enter a vaild CVC</p>";
          }
      if($formOk == true){
          $cart = json_decode($_COOKIE['cart']);
          echo "<style>table, th, td
          {border: 1px solid black;}</style>";
          echo "<table><tr><th>Title</th><th>Price</th></tr>";
            foreach ($cart as $element) {
                echo "<tr><td>$element->title</td> <td>$element->price</td></tr>";
            }
             echo "</table>";
          $_SESSION = array();
          session_destroy();
    }
  }
      ?>
  </div>
    <?php include("htaccess/footer.php"); ?>
  </body>
</html>