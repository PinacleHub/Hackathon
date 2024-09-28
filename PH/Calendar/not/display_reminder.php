<?php
require 'database_connection.php'; 

// Query to fetch reminders from the database
$display_query = "SELECT reminder_id, reminder_title, reminder_date, reminder_time, description FROM event_reminders";             
$results = mysqli_query($con, $display_query);

// Check for query execution errors
if (!$results) {
    die(json_encode([
        'status' => false,
        'msg' => 'Error in query execution: ' . mysqli_error($con)
    ]));
}

$count = mysqli_num_rows($results);

if ($count > 0) {
    $data_arr = array();
    while ($data_row = mysqli_fetch_assoc($results)) {    
        // Fill the data array with reminders
        $data_arr[] = [
            'reminder_id' => $data_row['reminder_id'],
            'title' => $data_row['reminder_title'],
            'date' => date("Y-m-d", strtotime($data_row['reminder_date'])),
            'time' => date("H:i:s", strtotime($data_row['reminder_time'])),
            'description' => $data_row['description'],
            'color' => '#' . substr(uniqid(), -6) // Generate a random color
        ];
    }
    
    // Response structure for success
    $data = [
        'status' => true,
        'msg' => 'Reminders fetched successfully!',
        'data' => $data_arr
    ];
} else {
    // Response structure for no reminders
    $data = [
        'status' => false,
        'msg' => 'No reminders found!'
    ];
}

// Return the response as JSON
echo json_encode($data, JSON_PRETTY_PRINT);