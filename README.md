# Mock Email Service

A simple mock email provider service for testing email notifications.

## Setup

```bash
cd mock-email-service
npm install
```

## Running

```bash
# Development (with auto-reload)
npm run dev

# Production
npm run build
npm start
```

The server runs on `http://localhost:3001` by default.

Set `PORT` environment variable to change the port:

```bash
PORT=4000 npm run dev
```

## API Endpoints

### Send Email

```
POST /send
```

**Request Body:**

```json
{
  "from": "noreply@credithealth.com",
  "to": "user@example.com",
  "template": "score_improvement",
  "params": {
    "userName": "Maria",
    "scoreType": "Credit Health",
    "previousScore": 62,
    "newScore": 70,
    "change": 8
  }
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email sent successfully",
  "emailId": "email_1234567890_abc123"
}
```

### Health Check

```
GET /health
```

## Example Usage

```bash
# Send a test email
curl -X POST http://localhost:3001/send \
  -H "Content-Type: application/json" \
  -d '{
    "from": "noreply@credithealth.com",
    "to": "user@example.com",
    "template": "score_improvement",
    "params": {
      "userName": "Maria",
      "previousScore": 62,
      "newScore": 70
    }
  }'
```
