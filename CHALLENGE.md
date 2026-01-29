# Email Notification System

## Overview

Build an email notification system that allows users to send themselves a summary of their current credit health scores. Users click a button in the dashboard to receive an email with their score information.

---

## User Story

**As a** user of the Credit Health Dashboard
**I want to** click a button to email myself a summary of my current scores
**So that** I can easily save or share my credit health information

---

## Acceptance Criteria

### Dashboard Button

- [ ] A "Send Email Summary" button is visible on the dashboard
- [ ] Clicking the button triggers an email to be sent to the user's registered email address
- [ ] The button shows a loading state while the email is being sent
- [ ] The user receives feedback (success or error message) after clicking

### Email Content

- [ ] Email has a clear subject line (e.g., "Your Credit Health Score Summary")
- [ ] Email body includes the user's current scores
- [ ] Email includes a call-to-action link to view the dashboard
- [ ] Email has a professional, informative tone depending on the score

### Integration

- [ ] The system connects to the email provider via HTTP API
- [ ] Email provider failures are handled gracefully (logged, not crashing the app)
