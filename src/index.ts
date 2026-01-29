import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Store sent emails in memory for inspection
const sentEmails: Array<{
  id: string;
  from: string;
  to: string;
  template: string;
  params: Record<string, unknown>;
  sentAt: string;
}> = [];

// POST /send - Send an email
app.post('/send', (req: Request, res: Response) => {
  const { from, to, template, params } = req.body;

  // Validate required fields
  if (!from || !to || !template) {
    res.status(400).json({
      success: false,
      error: 'Missing required fields: from, to, template',
    });
    return;
  }

  const email = {
    id: `email_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    from,
    to,
    template,
    params: params || {},
    sentAt: new Date().toISOString(),
  };

  // Log the email
  console.log('\n' + '='.repeat(60));
  console.log('EMAIL RECEIVED');
  console.log('='.repeat(60));
  console.log(`ID:       ${email.id}`);
  console.log(`From:     ${from}`);
  console.log(`To:       ${to}`);
  console.log(`Template: ${template}`);
  console.log(`Params:   ${JSON.stringify(params, null, 2)}`);
  console.log(`Sent At:  ${email.sentAt}`);
  console.log('='.repeat(60) + '\n');

  // Store in memory
  sentEmails.push(email);

  res.status(200).json({
    success: true,
    message: 'Email sent successfully',
    emailId: email.id,
  });
});

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'mock-email-service' });
});

app.listen(PORT, () => {
  console.log('\n' + '='.repeat(60));
  console.log('MOCK EMAIL SERVICE');
  console.log('='.repeat(60));
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('');
  console.log('Endpoints:');
  console.log(`  POST   /send          - Send an email`);
  console.log(`  GET    /health        - Health check`);
  console.log('='.repeat(60) + '\n');
});
