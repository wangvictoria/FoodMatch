<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace orderPage@example.com with your real receiving email address
  $receiving_email_address = 'orderPage@example.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $orderPage = new PHP_Email_Form;
  $orderPage->ajax = true;
  
  $orderPage->to = $receiving_email_address;
  $orderPage->from_name = $_POST['name'];
  $orderPage->from_email = $_POST['email'];
  $orderPage->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $orderPage->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $orderPage->add_message( $_POST['name'], 'From');
  $orderPage->add_message( $_POST['email'], 'Email');
  $orderPage->add_message( $_POST['message'], 'Message', 10);

  echo $orderPage->send();
?>
