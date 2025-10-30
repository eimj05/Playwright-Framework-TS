<h1>🎭 Playwright Test Automation Framework</h1>

<h2>🚀 Getting Started</h2>

<ol>
  <li><strong>Install dependencies</strong><br/>
    <code>npm install</code>
  </li>
  <li><strong>Install Playwright browsers</strong><br/>
    <code>npx playwright install</code>
  </li>
</ol>

<h2>🧪 Running Tests</h2>

<ul>
  <li><strong>Run all tests:</strong><br/><code>npx playwright test</code></li>
  <li><strong>Run a specific test:</strong><br/><code>npx playwright test tests/search.spec.ts</code></li>
  <li><strong>Run in headed mode:</strong><br/><code>npx playwright test --headed</code></li>
  <li><strong>Debug mode:</strong><br/><code>npx playwright test --debug</code></li>
</ul>

<h2>📁 Project Structure</h2>

<pre><code>.

├── src/                 
│   ├── pages/                        # Page Object Models
│   │   ├── mainPage.ts
│   │   ├── navigationPage.ts
│   │   └── searchResultsPage.ts
│   └── tests                         # Spec files
│        └── search.spec.ts
├── playwright.config.ts              # Global config
└── README.md
</code></pre>

<h2>✅ Features</h2>

<ul>
  <li>Modular Page Object Model</li>
  <li>Supports Chromium, Firefox, and WebKit</li>
</ul>

<h2>🧰 Useful Commands</h2>

<pre><code>npx playwright show-report
npx playwright test --project=firefox
</code></pre>
