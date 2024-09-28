<?php
require 'database_connection.php'; 

// Retrieve POST data
$reminder_title = $_POST['title'];
$description = $_POST['description'];
$reminder_date = date("Y-m-d", strtotime($_POST['date'])); 
$reminder_time = date("H:i:s", strtotime($_POST['time'])); 

// Prepare insert query
$insert_query = "INSERT INTO `event_reminders`(`reminder_title`, `reminder_date`, `reminder_time`, `description`) 
                 VALUES ('$reminder_title', '$reminder_date', '$reminder_time', '$description')";             

// Execute the query and check for success
if(mysqli_query($con, $insert_query)) {
    $data = array(
        'status' => true,
        'msg' => 'Reminder added successfully!'
    );
} else {
    $data = array(
        'status' => false,
        'msg' => 'Sorry, reminder not added: ' . mysqli_error($con) // Include error for debugging
    );
}

// Return response as JSON
echo json_encode($data);  