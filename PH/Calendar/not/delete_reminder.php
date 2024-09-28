<?php
require 'database_connection.php';

$reminder_id = $_POST['reminder_id'];  // Change this to 'reminder_id'

// Validate reminder ID
if (empty($reminder_id)) {
    echo json_encode(['status' => false, 'msg' => 'Reminder ID not provided.']);
    exit;
}

// Prepare the delete query
$delete_query = "DELETE FROM `event_reminders` WHERE reminder_id = '".$reminder_id."'";

// Execute the query
if (mysqli_query($con, $delete_query)) {
    $data = array(
        'status' => true,
        'msg' => 'Reminder deleted successfully!'
    );
} else {
    $data = array(
        'status' => false,
        'msg' => 'Error deleting reminder: ' . mysqli_error($con)
    );
}

echo json_encode($data);