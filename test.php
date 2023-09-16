<?php
// Kết nối tới cơ sở dữ liệu
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "busmap";

$conn = mysqli_connect($servername, $username, $password, $dbname);
mysqli_query($conn, "SET NAMES 'utf8'");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Truy vấn cơ sở dữ liệu
$sql1 = "SELECT * FROM tuyenxebuyt";
$result1 = mysqli_query($conn, $sql1);

// Đưa dữ liệu vào một mảng
$tuyenxebuyt = array();
while ($row1 = mysqli_fetch_assoc($result1)) {
    $tuyenxebuyt[] = $row1;
}

// Trả về dữ liệu dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($tuyenxebuyt);

// Đóng kết nối
mysqli_close($conn);
?>