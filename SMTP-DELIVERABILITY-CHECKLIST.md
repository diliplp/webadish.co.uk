# SMTP Deliverability Checklist (WebAdish)

Use this checklist to improve inbox placement and trust.

## 1) SPF
- Add/verify SPF TXT record on your sending domain.
- Include only approved mail senders.
- Keep a single SPF record (merge if multiple exist).
- End with `~all` (or `-all` when fully confident).

## 2) DKIM
- Enable DKIM signing in your mail provider.
- Publish provider DKIM CNAME/TXT records in DNS.
- Verify DKIM passes in provider dashboard.

## 3) DMARC
- Add DMARC TXT record at `_dmarc.yourdomain.com`.
- Start with monitoring policy first:
  - `v=DMARC1; p=none; rua=mailto:postmaster@yourdomain.com`
- After stable alignment, move to `p=quarantine` then `p=reject`.

## 4) Alignment checks
- `From:` domain should match your authenticated domain.
- Prefer same domain for SMTP user and `SMTP_FROM_EMAIL`.
- Keep `reply-to` for customer address only.

## 5) Content hygiene
- Avoid spammy subject lines and all-caps copy.
- Include clear business identity and contact details.
- Keep HTML simple and include plain-text version.

## 6) Monitoring
- Test using Gmail + Outlook inboxes.
- Check spam folder placement after each DNS/provider change.
- Review provider logs for bounces/deferrals.

## Current app env variables
- RESEND_API_KEY
- CONTACT_FROM_NAME
- CONTACT_FROM_EMAIL
- CONTACT_TO_EMAIL
