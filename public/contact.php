<?php
declare(strict_types=1);

function clean_input(string $value): string {
    $value = trim($value);
    $value = stripslashes($value);
    $value = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
    return $value;
}

function redirect_to(string $path): void {
    header("Location: {$path}");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    redirect_to("/contact/?status=error");
}

$honeypot = $_POST["company_website_confirm"] ?? "";

if (!empty($honeypot)) {
    redirect_to("/contact/thank-you/");
}

$name = clean_input($_POST["name"] ?? "");
$email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
$company = clean_input($_POST["company"] ?? "");
$website = clean_input($_POST["website"] ?? "");
$projectType = clean_input($_POST["project_type"] ?? "");
$budget = clean_input($_POST["budget"] ?? "");
$goal = clean_input($_POST["goal"] ?? "");
$message = clean_input($_POST["message"] ?? "");
$formName = clean_input($_POST["form_name"] ?? "Inoviqa Contact Form");
$submittedFrom = clean_input($_POST["submitted_from"] ?? "https://inoviqa.com/contact/");

if (
    empty($name) ||
    empty($email) ||
    empty($projectType) ||
    empty($goal) ||
    empty($message) ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    redirect_to("/contact/?status=error");
}

if (!empty($website) && !filter_var($website, FILTER_VALIDATE_URL)) {
    redirect_to("/contact/?status=error");
}

$to = "hello@inoviqa.com";
$subject = "New Inoviqa Project Inquiry — " . $projectType;

$emailBody = "New project inquiry from Inoviqa website\n\n";
$emailBody .= "Form: {$formName}\n";
$emailBody .= "Submitted from: {$submittedFrom}\n\n";
$emailBody .= "Name: {$name}\n";
$emailBody .= "Email: {$email}\n";
$emailBody .= "Company: " . ($company ?: "Not provided") . "\n";
$emailBody .= "Website: " . ($website ?: "Not provided") . "\n";
$emailBody .= "Project Type: {$projectType}\n";
$emailBody .= "Budget: " . ($budget ?: "Not provided") . "\n";
$emailBody .= "Main Goal: {$goal}\n\n";
$emailBody .= "Project Details:\n{$message}\n\n";
$emailBody .= "----\n";
$emailBody .= "Sent from inoviqa.com contact form.";

$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: Inoviqa Website <hello@inoviqa.com>";
$headers[] = "Reply-To: {$name} <{$email}>";
$headers[] = "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($sent) {
    redirect_to("/contact/thank-you/");
}

redirect_to("/contact/?status=error");
