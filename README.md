# Decentralized Social Network

Welcome to the **Decentralized Social Network** project! This initiative aims to build a decentralized platform for social interactions, ensuring user privacy, data ownership, and resistance to censorship.

## 🚀 Project Overview

The project leverages blockchain technology to create a peer-to-peer social media network. By utilizing smart contracts, it enables users to post content, interact with others, and manage their profiles without relying on centralized servers.

## 🔧 Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express
- **Blockchain**: Ethereum, Truffle
- **Smart Contracts**: Solidity
- **Database**: IPFS (InterPlanetary File System) for decentralized file storage

## 📂 Project Structure

- `src/`: Contains the source code for the frontend and backend.
- `migrations/`: Houses migration files for deploying smart contracts.
- `public/`: Stores static assets like images and stylesheets.
- `test/`: Includes test scripts for smart contracts and backend APIs.
- `.babelrc`: Configuration file for Babel.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `package.json`: Manages project dependencies and scripts.
- `package-lock.json`: Locks the versions of project dependencies.
- `truffle-config.js`: Configuration file for Truffle framework.

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Truffle Suite**
- **Ganache** (for local Ethereum blockchain)

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/talhazubairasim/Decentralized-Social-Network.git
cd Decentralized-Social-Network
```

2. **Install dependencies:**
```bash
npm install
```

3. **Compile and migrate smart contracts:**

```bash
truffle compile
truffle migrate
```

4. **Start the development server:**
```bash
npm start
```

5. **Access the application at http://localhost:3000.**

## 🤝 Contributing

We welcome contributions! Here’s how you can help:

Fork the repository.

Create a new branch for your feature or bug fix:
```bash
git checkout -b feature/your-feature-name
```

Make your changes and commit them:
```bash
git commit -m "Add new feature"
```

Push your branch to your fork:
```bash
git push origin feature/your-feature-name
```

Open a Pull Request to the main repository.

Ensure your code follows the existing coding standards and pass all tests.

## 🛤️ Roadmap

Planned Features & Improvements:

User authentication and profile management.

Real-time notifications and messaging.

Advanced content moderation and reporting tools.

Mobile responsiveness and PWA support.

Integration with additional decentralized storage solutions.

Contributions and feedback are welcome to help shape this roadmap!

## 🧪 Testing

**To run tests for smart contracts:**
```bash
truffle test
```

**To run backend API tests:**
```bash
npm test
```

## 📄 License

This project is licensed under the MIT License.
