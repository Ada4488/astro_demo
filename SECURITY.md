# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.0.1   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please send an email to [ndiayeadrame@gmail.com] 
> All security vulnerabilities will be promptly addressed.

Please include the following information in your report:

- Type of vulnerability
- Full paths of source file(s) related to the vulnerability
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the vulnerability

## Security Measures Implemented

This project implements several security measures:

1. **Dependency Scanning**: Regular automated checks for vulnerable dependencies
2. **Content Security Policy**: Restricting resource loading to trusted sources
3. **Security Headers**: Implementation of recommended web security headers
4. **Environment Variable Management**: Secure handling of sensitive configuration
5. **Code Quality**: Linting and formatting to prevent common security issues
6. **Continuous Integration**: Automated security checks on code changes

## Development Practices

When contributing to this project, please ensure you follow these security practices:

1. Never commit sensitive information (API keys, passwords, etc.)
2. Keep dependencies updated to their latest secure versions
3. Follow the principle of least privilege when implementing features
4. Validate and sanitize all user inputs
5. Use content security policies to prevent XSS attacks
6. Implement proper error handling that doesn't expose sensitive information