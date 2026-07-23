# Security Policy

## Reporting a vulnerability

Email **security@rothandroth.net**. Please do not open a public issue.

We aim to acknowledge within 2 business days.

## Scope

This repository is the **public marketing site** for FitClinicMD (`fitclinicmd.com`). It is intentionally PHI-free: it holds no patient data, no authentication, and no database.

**If you believe you have found a way to submit or expose health information through this site, treat it as high severity and report it immediately** — that would breach the two-zone architecture this site is built around.

The patient-facing application (`app.fitclinicmd.com`) is a separate, access-restricted repository.

## Out of scope

- Findings on third-party services we link to
- Missing headers on non-production preview deployments
- Automated scanner output without a demonstrated impact
