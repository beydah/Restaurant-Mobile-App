# ☕ Coffee Mobile App - Enterprise Mobile Experience

[![Production Build](https://img.shields.io/badge/Production%20Build-Passing-brightgreen)](file:///c:/Users/BEYDAH/Desktop/Code/Restaurant-Mobile-App/walkthrough.md)
[![Architecture](https://img.shields.io/badge/Architecture-Regional%20Governance-blue)](#-architectural-overview)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An enterprise-grade, high-performance boutique coffee mobile application built with **Next.js 15**, **Capacitor 7**, and **Atomic Design** principles.

---

## 🏗 Architectural Overview

This project follows a **Modular Monolithic** structure with **Regional Governance** to ensure extreme scalability and maintainability.

### Regional Registers
| Region      | Purpose          | Governance                                        |
| :---------- | :--------------- | :------------------------------------------------ |
| `app/`      | Routing & Layout | Next.js App Router                                |
| `frontend/` | UI Components    | Atomic Design (`atoms`, `molecules`, `organisms`) |
| `backend/`  | Business Logic   | Modular Services (`auth`, `product`, `order`)     |
| `core/`     | Cross-Cutting    | Shared Contexts, Constants, & Utilities           |
| `configs/`  | System Level     | Env Validation & Project Settings                 |

---

## 🏷 Naming & Governance

We follow a strict, searchable, and professional naming convention to ensure code clarity.

### Prefixes & Conventions
| Category             | Convention        | Example                 |
| :------------------- | :---------------- | :---------------------- |
| **Files**            | `snake_case`      | `auth_service.ts`       |
| **Components**       | `F_Pascal_Snake`  | `F_Login_Form`          |
| **Props**            | `p_snake_case`    | `p_on_click_handler`    |
| **Types/Interfaces** | `I_Pascal_Snake`  | `I_User_Profile`        |
| **Services/Classes** | `C_UPPER_SNAKE`   | `C_AUTH_SERVICE`        |
| **Variables/Flags**  | `snake_case_flag` | `is_authenticated_flag` |

> [!IMPORTANT]
> All imports must use the `@/` absolute alias. Files in `frontend/` cannot import directly from `backend/`; they must use `core/` bridges.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Mobile Runtime**: [Capacitor 7](https://capacitorjs.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: React Context + Modular Services
- **Icons**: [Remix Icon](https://remixicon.com/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+
- Android Studio (for Android builds)

### Installation & Setup
```bash
# 1. Clone the repository
git clone [repository-url]

# 2. Install dependencies
npm install

# 3. Environment setup
cp .env.example .env

# 4. Run development server
npm run dev
```

---

## 👷 Contribution Standards

1. **Regional Governance**: Never cross boundaries. UI logic stays in `frontend/`, Business in `backend/`.
2. **Atomic Design**: 
    - **Atoms**: Stateless single-tag units (`F_Button`).
    - **Organisms**: Complex sections composed of atoms (`F_Top_Nav`).
3. **Commit Messages**: Follow [Conventional Commits](https://www.conventionalcommits.org/).

See the full [Contribution Guide](CONTRIBUTING.md) for detailed standards.

---

## 📦 Roadmap

### 🟢 Quick Wins
- [ ] Zod Env Validation
- [ ] React Error Boundaries for specific content regions
- [ ] Native Splash Synchronization

### 🟡 Mid-Term
- [ ] Real API Integration (Axios/Fetch)
- [ ] TanStack Query Migration
- [ ] Centralized UI Tokens

### 🔴 Major Refactors
- [ ] Monorepo Migration (Turborepo)
- [ ] MSW Integration for offline dev
- [ ] Storybook Deployment

---

## ⚖️ License
Distributed under the **MIT License**. See `LICENSE` for more information.
