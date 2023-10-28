<?php
//Purpose: PHP code for Lab 7 Practice 4

//Google font
echo "<link rel = 'preconnect' href = 'https://fonts.googleapis.com>";
echo "<link rel = 'preconnect' href = 'https://fonts.gstatic.com' crossorigin>";
echo "<link href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap' rel = 'stylesheet'>";

//Button Icon found on W3Schools
echo "<link rel = 'stylesheet' href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>";

//Imports CSS from practice4.css
echo "<link rel = 'stylesheet' href = 'practice4.css'>";

//Home button with icon that opens browser to index.html
echo "<button class = 'btn' onclick = 'window.location.href = \"index.html\";'><i class = 'fa fa-home'></i> Home</button>";

$size = $_POST["size"]; #user input is set to a variable

echo "<h1>$size x $size Multiplication Table</h1>";
echo "<button onclick='window.location.href=\"practice4.html\";'>Back</button>"; #button to go back to practice4.html
echo "<br><br>";

//Creates a Multiplication Table
echo "<table>";
echo "<table border = 1>";
echo "<tr>";
echo "<td>"; #empty row
echo "</td>";

for ($i = 1; $i <= $size; $i++) {
    echo "<td>$i</td>"; #adds the row of numbers from 1 to size to table
}
echo "</tr>";

for ($i = 1; $i <= $size; $i++) {
    echo "<tr>";
    echo "<td>$i</td>"; #adds the col of numbers from 1 to size to table

    for ($j = 1; $j <= $size; $j++) {
        $product = $i * $j;
        echo "<td>$product</td>"; #adds the product of the row and col to table
    }

    echo "</tr>";
}

echo "<table>";

?>