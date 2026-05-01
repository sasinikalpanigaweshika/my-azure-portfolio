# 🚀 Azure DevOps Infrastructure Project

## 📌 About
A production-ready cloud infrastructure built on Microsoft Azure, featuring containerization, CI/CD automation, monitoring, and security best practices.

## 🌐 Live Website
https://sasini-cloud.duckdns.org

## 🏗 Architecture Flow
User traffic flows through:

Azure Load Balancer → Nginx Reverse Proxy → Docker Container (Node.js Application) → Secure HTTPS Response

The system is monitored using Azure Monitor for performance and health tracking.

## 🔄 CI/CD Pipeline
- Code pushed to GitHub repository
- GitHub Actions automatically triggered on each push
- SSH-based deployment to Azure Virtual Machine
- Application updated using git pull and restarted with PM2
- Fully automated deployment with minimal manual intervention
- Rollback supported using previous commit or PM2 restart strategy

## 🔐 Security Implementation
- NSG configured to allow only required ports (22, 80, 443)
- HTTPS enforced using Let's Encrypt SSL certificates
- Nginx configured as reverse proxy to prevent direct access to Node.js backend
- Secure SSH authentication implemented for server access

## ⚠️ Challenges Faced & Solutions
- Nginx configuration issues → Resolved using log analysis and debugging
- SSL certificate setup → Implemented using Certbot with auto-renewal configuration
- Docker port mapping issues → Fixed by inspecting container logs and correcting port bindings
- GitHub Actions SSH authentication → Solved using secure key-based authentication setup

## 🧱 Infrastructure Built
- Azure Virtual Machine (Ubuntu 24.04)
- Virtual Network (VNet) with 2 subnets
- Network Security Group (NSG) configuration
- Nginx reverse proxy setup
- Node.js application deployment
- Docker containerization
- SSL/HTTPS encryption (Let's Encrypt)
- Custom domain
