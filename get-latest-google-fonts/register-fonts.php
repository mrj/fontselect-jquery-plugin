<?php

/* Example of data returned by Google :
items": [
    {
    "family": "Alegreya",
    "variants": [
        "regular",
        "italic",
        "700",
        "700italic",
        "900",
        "900italic"
        ]
    }
]
*/

// var_dump($_POST);

$output = '';
foreach ($_POST['items'] as $font) {
    $family_name = $font['family'];
    foreach ($font['variants'] as $variant) {
        $output .= '"' . $family_name . ':' . str_replace('regular', '', $variant) . '",';
    }
}
$output = rtrim($output, ',');
$output = str_replace(' ', '+', $output);
echo $output;
