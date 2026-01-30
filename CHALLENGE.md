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

### Email API Integration

- [ ] Request payload includes all required parameters: to, templateId, dynamicData
- [ ]  dynamicData object contains all values needed by the template (score, dashboard URL)
- [ ] Correct templateId is selected based on score range (e.g., low/medium/high)
- [ ] Email provider failures are handled gracefully (logged, not crashing the app)

### Nice to have
- [ ] Transient failures trigger retry with backoff
- [ ] Request includes idempotency key to prevent duplicate sends
