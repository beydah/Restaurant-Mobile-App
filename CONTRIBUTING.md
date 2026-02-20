# 👷 Contributing to Coffee Mobile App

Thank you for your interest in contributing! This project follows strict enterprise governance to ensure long-term sustainability and scalability.

---

## 🏗 Regional Governance

We use a "Regional Register" model. Never cross boundaries directly:

- **`app/`**: Next.js Routing & Layouts.
- **`frontend/`**: Atomic UI Components (`atoms`, `organisms`).
- **`backend/`**: Pure Business Logic & Modular Services.
- **`core/`**: Bridges (Contexts), Constants, and Utilities.
- **`configs/`**: Environment and System Settings.

---

## 📏 Standards & Conventions

### 1. Naming Standards
| Prefix   | Usage                        | Example            |
| :------- | :--------------------------- | :----------------- |
| `F_`     | Functional Components        | `F_Login_Form.tsx` |
| `I_`     | Interfaces & Types           | `I_User_Profile`   |
| `C_`     | Classes & Service Singletons | `C_AUTH_SERVICE`   |
| `p_`     | Component Props              | `p_title_text`     |
| `_state` | State Variables              | `is_valid_state`   |
| `_flag`  | Boolean Flags                | `is_loading_flag`  |

### 2. Files & Folders
All file and directory names must use `snake_case`.
- **Bad**: `loginForm.tsx`, `TopNav.tsx`
- **Good**: `login_form.tsx`, `top_nav.tsx`

---

## 🛠 Development Workflow

1. **Setup**:
   ```bash
   npm install
   cp .env.example .env
   ```

2. **Branching**:
   Use descriptive branch names: `feat/feature-name`, `fix/bug-name`, `refactor/change-name`.

3. **Verification**:
   Always run a production build test before submitting a PR:
   ```bash
   npm run build
   ```

4. **Commits**:
   We follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat: ...`
   - `fix: ...`
   - `docs: ...`
   - `refactor: ...`

---

## 🧬 Atomic Design Rules

1. **Atoms**: Stateless, single-tag wrappers. No business logic.
2. **Organisms**: Complex sections composed of atoms. They can handle local UI state but should receive business data via props.

---

## 🚀 Pull Requests

- Ensure all imports use the `@/` absolute alias.
- Do not include temporary or backup files.
- Update documentation in `README.md` if the PR introduces architectural changes.
