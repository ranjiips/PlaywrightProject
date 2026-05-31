# 📘 Warehouse Automation Framework (Playwright + TypeScript)

## 🚀 Overview
This project is a **UI automation framework** built with **Playwright + TypeScript**.  
It validates **end‑to‑end flows** of a Warehouse Management System (inbound & outbound) with **database checks** and **test data from Excel/CSV**.  
The framework is **scalable**: future support for REST API testing, CI/CD pipelines, and cross‑browser execution.

---

## 🛠 Prerequisites
- **VS Code** (already installed)
- **Node.js (LTS)** → [Download here](https://nodejs.org)
- **Database** (MySQL/Postgres/etc.) with access credentials
- **Extensions for VS Code**:
  - Playwright Test
  - TypeScript
  - Prettier (optional, for formatting)

---

## 📂 Project Structure
```
warehouse-automation/
 ├── src/
 │    ├── tests/                # Test cases
 │    ├── pages/                # Page Object Models
 │    ├── utils/                # Helpers (DB, Excel, CSV)
 │    ├── config/               # Config files
 │    └── data/                 # Test data
 ├── playwright.config.ts       # Playwright settings
 ├── tsconfig.json
 └── package.json
```

---

## ⚙️ Setup Instructions

### 1. Initialize Project
```bash
mkdir warehouse-automation
cd warehouse-automation
npm init -y
npm install -D playwright @playwright/test typescript ts-node
npx playwright install
```

### 2. Configure TypeScript
Create `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
```

### 3. Playwright Config
`playwright.config.ts`:
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  use: {
    browserName: 'chromium', // default Chrome
    screenshot: 'on',
    video: 'retain-on-failure'
  },
  reporter: [
    ['html', { outputFolder: 'reports' }]
  ]
});
```

---

## 🧩 Page Object Model (POM)
Example: `src/pages/LoginPage.ts`
```ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://your-app-url/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#loginBtn');
  }
}
```

---

## 🗄 Database Utility
Install MySQL client:
```bash
npm install mysql2
```

`src/utils/db.ts`:
```ts
import mysql from 'mysql2/promise';

export async function queryDB(sql: string, params: any[] = []) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'warehouse'
  });

  const [rows] = await connection.execute(sql, params);
  await connection.end();
  return rows as any[];
}
```

---

## 📊 Test Data Loader
Install:
```bash
npm install xlsx csv-parse
```

`src/utils/dataLoader.ts`:
```ts
import * as XLSX from 'xlsx';
import { parse } from 'csv-parse/sync';
import fs from 'fs';

export function loadExcel(filePath: string) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
}

export function loadCSV(filePath: string) {
  const content = fs.readFileSync(filePath);
  return parse(content, { columns: true });
}
```

---

## 🧪 Sample Test Case
`src/tests/inboundFlow.spec.ts`
```ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { queryDB } from '../utils/db';

test('Inbound flow validation', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('admin', 'password');

  // UI validation
  await expect(page.locator('#dashboard')).toBeVisible();

  // DB validation
  const rows = await queryDB(
    "SELECT * FROM inbound_orders WHERE status=?",
    ['processed']
  );
  expect(rows.length).toBeGreaterThan(0);
});
```

---

## ▶️ Running Tests
```bash
npx playwright test
npx playwright test --headed --browser=chromium
```

- Reports → `reports/index.html`  
- Default browser → Chrome (Chromium)  
- To run in Firefox/WebKit:
```bash
npx playwright test --browser=firefox
```

---

## 📈 Scalability Features
- **Cross‑browser support** (Chromium, Firefox, WebKit)
- **CI/CD ready** (GitHub Actions, Azure DevOps, Jenkins)
- **Future REST API testing** → add `axios` or `supertest`
- **Beginner‑friendly docs** → this README + sample tests

---

## 📝 Next Steps
- Add more **Page Objects** for inbound/outbound flows.
- Expand **test data** with Excel/CSV.
- Integrate with **CI/CD pipelines**.
- Add **API utilities** for REST validation.

