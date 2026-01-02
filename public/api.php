<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Authorization, Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Load secret key
$config = require __DIR__ . '/secrets.php';
$SECRET_KEY = $config['secret_key'];

// Token validity period (2 hours in seconds)
$TOKEN_VALIDITY = 2 * 60 * 60;

$dataDir = __DIR__ . '/data/';

// Ensure data directory exists
if (!file_exists($dataDir)) {
    mkdir($dataDir, 0755, true);
}

// Generate a time-bound token
function generateToken($secret, $validity) {
    $timestamp = time();
    $expiresAt = $timestamp + $validity;
    $signature = hash_hmac('sha256', $expiresAt, $secret);
    $tokenData = $expiresAt . ':' . $signature;
    return base64_encode($tokenData);
}

// Verify token is valid and not expired
function verifyToken($token, $secret) {
    $decoded = base64_decode($token);
    if (!$decoded) {
        return false;
    }
    
    $parts = explode(':', $decoded);
    if (count($parts) !== 2) {
        return false;
    }
    
    list($expiresAt, $signature) = $parts;
    
    // Check if expired
    if (time() > $expiresAt) {
        return false;
    }
    
    // Verify signature
    $expectedSignature = hash_hmac('sha256', $expiresAt, $secret);
    return hash_equals($expectedSignature, $signature);
}

// Check if request is asking for a token
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'token') {
    $token = generateToken($SECRET_KEY, $TOKEN_VALIDITY);
    echo json_encode([
        'token' => $token,
        'expiresIn' => $TOKEN_VALIDITY,
        'expiresAt' => date('Y-m-d H:i:s', time() + $TOKEN_VALIDITY)
    ]);
    exit;
}

$file = $_GET['file'] ?? 'default';
$filepath = $dataDir . basename($file) . '.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Public reads - no auth required
    if (file_exists($filepath)) {
        readfile($filepath);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'File not found']);
    }
    
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Auth required for writes
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? '';
    
    // Extract token from "Bearer <token>"
    if (!preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        http_response_code(401);
        echo json_encode(['error' => 'No token provided']);
        exit;
    }
    
    $token = $matches[1];
    
    if (!verifyToken($token, $SECRET_KEY)) {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid or expired token']);
        exit;
    }
    
    // Write data
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if ($data !== null) {
        file_put_contents($filepath, json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode(['success' => true, 'message' => 'Data saved']);
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
    }
}
?>