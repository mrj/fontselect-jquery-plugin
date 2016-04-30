<?php
/*
 * jQuery.fontselect - A font selector for the Google Web Fonts api
 * Tom Moor, http://tommoor.com
 * Copyright (c) 2011 Tom Moor
 * MIT Licensed
 * @version 0.1
 *
 * Update by Migli - http://codecanyon.net/user/migli
 *
 * This Update will get all latest Google fonts with all variants (font-weights + font-styles)
 * And generate a list you can copy/paste in jquery.fontselect.min.js
 *
 * To change query, ie filter styles, change sorting, use built-in Google tool at https://developers.google.com/apis-explorer/?hl=fr#p/webfonts/v1/webfonts.webfonts.list
*/

// USE YOUR OWN GOOGLE API KEY, THIS ONE WILL NOT BE ALLOWED
// Get your free own key at https://console.developers.google.com/projectselector/apis/credentials
$google_api_key = 'AIzaSyD8D9iru_TSvGkjTbC_lEE5cl_rXmPeWnE';
?>
<!DOCTYPE html>
<html>
<head>
    <title>Get Google Latest Fonts</title>
</head>
<body>
<h1>Get Google Latest Fonts</h1>
<p>This ugly page should get &amp; display all latest available Google fonts in the textarea below.</p>
<p>Once done, copy/paste this list into your jquery.fontselect.min.js.</p>
<p>You have first to get an API key from Google at https://console.developers.google.com/projectselector/apis/credentials</p>
<textarea id="font-list" cols="120" rows="30"></textarea>
</body>
</html>
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript">
    $.ajax({
        url: 'https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&fields=items(family%2Cvariants)&key=<?php echo $google_api_key; ?>',
        type: 'GET'
    }).done(function (data) {
        $.ajax({
            url: 'register-fonts.php',
            type: 'POST',
            data: data
        }).done(function (data) {
            $('#font-list').html(data);
        }).fail(function (data, statut, error) {
            console.log(error);
        });
    }).fail(function (data, statut, error) {
        console.log(error);
    });
</script>
