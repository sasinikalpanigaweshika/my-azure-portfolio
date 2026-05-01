## CI/CD Pipeline
1. Push code to GitHub
2. GitHub Actions triggered automatically
3. SSH into Azure VM
4. Pull latest code
5. PM2 restarts application
6. Zero downtime deployment

## Security Implementation
- Restricted inbound ports via NSG (only 22, 80, 443)
- HTTPS enforced via SSL (Let's Encrypt)
- Nginx blocks direct access to Node.js port
- SSH authentication for server access

## Challenges Faced & Solved
- Nginx config issues → fixed by checking error logs
- SSL certificate setup → solved using Certbot
- Docker port mapping → resolved by checking container logs
- GitHub Actions SSH auth → fixed by configuring sshd_config

## What I Built
- Azure VM (Ubuntu 24.04)
- Virtual Network with 2 Subnets
- Network Security Group rules
- Nginx reverse proxy
- Node.js application
- Docker containerization
- SSL/HTTPS encryption
- Custom domain (DuckDNS)
- Azure Monitor + CPU alerts
- Azure Load Balancer
- GitHub Actions CI/CD

## Skills Used
Azure, Linux, Nginx, Node.js, Docker, SSL, 
Networking, Monitoring, Load Balancing, CI/CD

## Certification
Microsoft Azure Fundamentals (AZ-900)

## Author
Sasini Kalpani | Sri Lanka
