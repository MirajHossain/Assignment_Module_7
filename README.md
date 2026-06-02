📦 Assignment Module 7 - Full Stack Deployment & Monitoring
📌 Project Title
Deployment of Backend Application with Monitoring & CI/CD Pipeline on AWS EC2

📖 Project Description
This project demonstrates the deployment of a backend application with a database on AWS EC2 and the automation of deployment using GitHub Actions (CI/CD pipeline).
Additionally, a minimalist observability stack is implemented using:

Prometheus
Grafana
Node Exporter

These tools monitor system performance, including CPU, memory, disk usage, and network activity.
An optional SMTP-based email alert system is also configured to notify critical system issues.

🎯 Objectives

Deploy backend application on AWS EC2
Integrate database with backend
Automate deployment using GitHub Actions
Implement monitoring and observability
Configure alerting system


🏗 Architecture Overview
User → Backend App (Node.js) → Database
                ↓
          EC2 Instance
                ↓
   ┌───────────────────────────┐
   │ Monitoring Stack          │
   │ - Prometheus              │
   │ - Grafana                 │
   │ - Node Exporter           │
   └───────────────────────────┘
                ↓
          Email Alert (SMTP)


🛠 Technologies Used
🔹 Backend

Node.js
Express.js

🔹 Database

PostgreSQL / MySQL

🔹 Infrastructure

AWS EC2 (Ubuntu)

🔹 Monitoring Tools

Prometheus
Grafana
Node Exporter

🔹 CI/CD

GitHub Actions

🔹 Alerting

SMTP (Gmail / Mail server)


📂 Project Structure
Assignment_Module_7/
│── app.js
│── package.json
│── .gitignore
│── README.md
│
├── .github/workflows/
│     └── deploy.yml
│
├── prometheus/
│     └── prometheus.yml
│
├── grafana/
│     └── dashboards/
│
└── scripts/
      └── deploy.sh


🚀 Deployment Steps
✅ 1. Launch EC2 Instance

Ubuntu Server
Open ports:

22 (SSH)
3000 (App)
9090 (Prometheus)
3000/3001 (Grafana)




✅ 2. Install Dependencies on EC2
Shellsudo apt updatesudo apt install nodejs npm git -yShow more lines

✅ 3. Clone Repository
Shellgit clone https://github.com/MirajHossain/Assignment_Module_7.gitcd Assignment_Module_7npm installShow more lines

✅ 4. Run Backend Application
Shellnode app.js``Show more lines

⚙️ CI/CD Pipeline (GitHub Actions)
📁 .github/workflows/deploy.yml
YAMLname: Deploy to EC2on:  push:    branches:      - mainjobs:  deploy:    runs-on: ubuntu-latest    steps:      - name: Checkout Code        uses: actions/checkout@v3      - name: Deploy to EC2        run: |          ssh -o StrictHostKeyChecking=no ubuntu@your-ec2-ip << 'EOF'          cd Assignment_Module_7          git pull origin main          npm install          pm2 restart app || pm2 start app.js --name app          EOF
