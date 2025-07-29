# NestJS Development Guide: Code Quality & IDE Setup

This comprehensive guide covers everything you need to know about code quality, formatting, linting, and IDE setup for this NestJS TypeScript project.

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Code Quality Pipeline](#code-quality-pipeline)
3. [Prettier Configuration](#prettier-configuration)
4. [IDE Setup Guide](#ide-setup-guide)
5. [Scripts & Commands](#scripts--commands)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Project Overview

This NestJS project is configured with a complete code quality pipeline that ensures consistent formatting, linting, and validation both locally and in CI/CD.

### Tools Configured

- **Prettier**: Code formatting with NestJS-optimized rules (2025 best practices)
- **ESLint**: Code linting with TypeScript support and Prettier integration
- **Husky**: Git hooks for pre-commit validation
- **lint-staged**: Run formatters and linters on staged files only
- **GitHub Actions**: Automated CI/CD pipeline for code quality checks

### Multi-Layer Protection System

1. **Pre-commit Hooks** (Immediate Local Feedback):
   - ✅ Runs `prettier --write` (auto-formats)
   - ✅ Runs `eslint --fix` (auto-fixes simple issues)
   - ❌ **Blocks commit** if unfixable errors exist
   - 🎯 **Purpose**: Catch issues before they reach remote

2. **GitHub Actions - Code Quality** (CI/CD Enforcement):
   - ✅ Prettier formatting check
   - ✅ ESLint validation with annotations
   - ✅ Unit tests
   - ✅ Build verification

3. **GitHub Actions - Code Scanning** (Advanced Reporting):
   - ✅ SARIF format output
   - ✅ Integrates with GitHub Security tab
   - ✅ Shows issues directly in file diffs

---

## 🎨 Prettier Configuration

### Configuration File: `.prettierrc.json`

```json
{
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "all",
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "proseWrap": "preserve",
  "bracketSpacing": true,
  "bracketSameLine": true,
  "arrowParens": "avoid",
  "jsxSingleQuote": true,
  "htmlWhitespaceSensitivity": "css",
  "embeddedLanguageFormatting": "auto",
  "vueIndentScriptAndStyle": false,
  "endOfLine": "lf",
  "insertPragma": false,
  "requirePragma": false
}
```

### Configuration Options Explained

#### **Core Formatting Rules**
- **`semi: true`** - Always add semicolons (TypeScript best practice)
- **`singleQuote: true`** - Use single quotes instead of double quotes
- **`quoteProps: "as-needed"`** - Only quote object properties when necessary
- **`trailingComma: "all"`** - Add trailing commas wherever possible (ES5+)

#### **Indentation Settings**
- **`tabWidth: 2`** - Use 2 spaces per indentation level (standard for TypeScript)
- **`useTabs: false`** - Use spaces instead of tabs for consistency

#### **Line Length and Wrapping**
- **`printWidth: 100`** - Wrap lines at 100 characters (modern wide-screen optimized)
- **`proseWrap: "preserve"`** - Preserve existing line breaks in markdown/text

#### **Bracket and Spacing Rules**
- **`bracketSpacing: true`** - Add spaces inside object brackets `{ foo: bar }`
- **`bracketSameLine: true`** - Put closing brackets on the same line as the last element
- **`arrowParens: "avoid"`** - Omit parentheses when possible `x => x`

#### **Language-Specific Formatting**
- **`jsxSingleQuote: true`** - Use single quotes in JSX attributes
- **`htmlWhitespaceSensitivity: "css"`** - Honor CSS whitespace rules in HTML
- **`embeddedLanguageFormatting: "auto"`** - Format embedded languages automatically
- **`vueIndentScriptAndStyle: false`** - Don't indent Vue script/style blocks

#### **Miscellaneous Settings**
- **`endOfLine: "lf"`** - Use Unix line endings (LF) for cross-platform compatibility
- **`insertPragma: false`** - Don't insert Prettier pragma comments
- **`requirePragma: false`** - Format all files, regardless of pragma comments

### Benefits of This Configuration

1. **Modern Line Length**: 100 characters optimized for wide screens and modern development
2. **TypeScript Optimized**: Single quotes and semicolons align with TypeScript conventions  
3. **Team Consistency**: Standardized formatting reduces diff noise and merge conflicts
4. **Cross-Platform**: LF line endings work consistently across Windows, Mac, and Linux
5. **Framework Agnostic**: Works well with NestJS, Angular, React, and Vue if needed

---

## 💻 IDE Setup Guide

Configure your IDE for automatic formatting and live error detection.

### 🚀 Visual Studio Code Setup

#### Required Extensions

Install these essential extensions:

```bash
# Install via VS Code Extensions marketplace or command palette
ext install esbenp.prettier-vscode
ext install dbaeumer.vscode-eslint
ext install bradlc.vscode-tailwindcss  # Optional: for CSS intellisense
```

**Essential Extensions:**
- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)

#### VS Code Settings Configuration

The project includes `.vscode/settings.json` with optimal configuration:

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.run": "onType",
  "eslint.autoFixOnSave": true,
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "editor.rulers": [100],
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true
}
```

#### VS Code User Settings (Global)

Add to your global VS Code settings (`Cmd/Ctrl + ,` → Open Settings JSON):

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.alwaysShowStatus": true,
  "prettier.requireConfig": true,
  "prettier.useEditorConfig": false
}
```

#### VS Code Keybindings (Optional)

Add to `keybindings.json` for quick formatting:

```json
[
  {
    "key": "cmd+shift+p",
    "command": "editor.action.formatDocument",
    "when": "editorTextFocus"
  },
  {
    "key": "cmd+k cmd+f",
    "command": "eslint.executeAutofix",
    "when": "editorTextFocus"
  }
]
```

### 🧠 WebStorm / IntelliJ IDEA Setup

WebStorm has excellent built-in support for ESLint and Prettier:

#### 1. **Prettier Configuration**

1. Go to **Preferences** → **Languages & Frameworks** → **JavaScript** → **Prettier**
2. Check **"On 'Reformat Code' action"**
3. Check **"On save"**
4. Set **Prettier package** to: `./node_modules/prettier`
5. Set **Run for files** to: `{**/*,*}.{js,ts,jsx,tsx,vue,scss,less,css,json,md}`

#### 2. **ESLint Configuration**

1. Go to **Preferences** → **Languages & Frameworks** → **JavaScript** → **Code Quality Tools** → **ESLint**
2. Select **"Automatic ESLint configuration"**
3. Check **"Run eslint --fix on save"**
4. Set **ESLint package** to: `./node_modules/eslint`
5. Set **Configuration file** to: `./eslint.config.mjs`

#### 3. **File Watchers (Alternative Method)**

For more advanced automation, set up File Watchers:

1. Go to **Preferences** → **Tools** → **File Watchers**
2. Click **+** → **Custom**

**Prettier File Watcher:**
```
Name: Prettier
File type: TypeScript
Scope: Project Files
Program: ./node_modules/.bin/prettier
Arguments: --write $FilePathRelativeToProjectRoot$
Output paths to refresh: $FilePathRelativeToProjectRoot$
Working directory: $ProjectFileDir$
```

**ESLint File Watcher:**
```
Name: ESLint
File type: TypeScript  
Scope: Project Files
Program: ./node_modules/.bin/eslint
Arguments: --fix $FilePathRelativeToProjectRoot$
Output paths to refresh: $FilePathRelativeToProjectRoot$
Working directory: $ProjectFileDir$
```

#### 4. **Code Style Settings**

1. Go to **Preferences** → **Editor** → **Code Style** → **TypeScript**
2. Set **Tab size**: `2`
3. Set **Indent**: `2`  
4. Check **"Use tab character"**: `false`
5. Go to **Punctuation** tab:
   - Set **"Use single quotes always"**: `true`
   - Set **"Force semicolon"**: `true`
   - Set **"Add trailing comma"**: `true`

#### 5. **Live Error Detection**

1. Go to **Preferences** → **Editor** → **Inspections**
2. Enable **JavaScript and TypeScript** → **Code quality tools** → **ESLint**
3. Enable **JavaScript and TypeScript** → **General** → **Prettier**

---

## 📜 Scripts & Commands

### Available npm Scripts

```bash
# Format all TypeScript files
npm run format

# Check formatting without making changes
npm run format:check

# Run ESLint with auto-fix
npm run lint

# Initialize Husky (already done)
npm run prepare

# Run tests
npm test

# Build project
npm run build

# Start development server
npm run start:dev
```

### Local Development Workflow

The following npm scripts are available:

```bash
# Format all TypeScript files
$ npm run format

# Check formatting without making changes
$ npm run format:check

# Run ESLint with auto-fix
$ npm run lint
```

### Pre-commit Hooks

Husky is configured to run lint-staged on every commit, which will:
1. Format staged files with Prettier
2. Run ESLint with auto-fix on staged files
3. Prevent commits if there are unfixable linting errors

### CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/code-quality.yml`) runs on:
- Push to `main` and `develop` branches  
- Pull requests to `main` and `develop` branches

The pipeline performs:
- Prettier formatting checks
- ESLint validation
- Unit tests
- Build verification

---

## 🔧 Verification Steps

### Test Your Setup

1. **Open any `.ts` file** in your project
2. **Add some formatting violations:**
   ```typescript
   // Bad formatting - test your setup
   import {Injectable,Get} from '@nestjs/common'

   @Injectable( )
   export class TestService{
     private items:string[ ]=[  "item1"  ,  "item2"  ]

     getItems( ):string[ ]{
   return this.items
     }
   }
   ```

3. **Save the file** (`Cmd/Ctrl + S`)
4. **Expected Results:**
   - ✅ Code should auto-format with proper spacing
   - ✅ ESLint errors should show red underlines
   - ✅ Imports should be organized
   - ✅ Semicolons and quotes should be corrected

### Live Error Indicators

You should see:
- **Red squiggly lines** for ESLint errors
- **Yellow/orange lines** for warnings  
- **Blue/gray lines** for info/suggestions
- **Lightbulb icons** for quick fixes
- **Problems panel** showing all issues

### Success Indicators

When properly configured, you should experience:

- ✅ **Instant formatting** on save (Prettier)
- ✅ **Live error highlighting** as you type (ESLint)
- ✅ **Auto-import organization** on save
- ✅ **Quick fixes** via lightbulb/Alt+Enter
- ✅ **Consistent code style** across team members
- ✅ **Zero configuration conflicts** between tools

---

## 🚨 Troubleshooting

### Common Issues & Solutions

#### VS Code Issues:

**Problem:** "Prettier not formatting on save"
```bash
# Solution: Restart VS Code and check
1. Ensure Prettier extension is enabled
2. Check .prettierrc.json exists in project root
3. Verify "editor.formatOnSave": true in settings
4. Run: Developer: Reload Window
```

**Problem:** "ESLint not showing errors"
```bash
# Solution: Check ESLint configuration
1. Verify eslint.config.mjs exists
2. Run: npm run lint (should work in terminal)
3. Check ESLint extension output panel
4. Restart ESLint server: Cmd+Shift+P → "ESLint: Restart ESLint Server"
```

#### WebStorm Issues:

**Problem:** "Prettier not running automatically"
```bash
# Solution: Check WebStorm settings
1. Preferences → Languages & Frameworks → JavaScript → Prettier
2. Ensure "On save" is checked
3. Verify Prettier package path: ./node_modules/prettier
4. Restart WebStorm
```

**Problem:** "ESLint not detecting configuration"
```bash
# Solution: Reset ESLint settings
1. Preferences → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint
2. Select "Automatic ESLint configuration"  
3. Verify ESLint package: ./node_modules/eslint
4. Invalidate caches: File → Invalidate Caches and Restart
```

#### Pre-commit Hook Issues:

**Problem:** "Pre-commit hook not running"
```bash
# Solution: Reinstall Husky
1. rm -rf .husky
2. npm run prepare
3. Verify .husky/pre-commit exists
4. Test: git commit -m "test" (should run hooks)
```

**Problem:** "lint-staged not finding files"
```bash
# Solution: Check lint-staged configuration
1. Verify package.json has lint-staged config
2. Check file patterns: "*.{ts,js}"
3. Test manually: npx lint-staged
```

#### GitHub Actions Issues:

**Problem:** "CI/CD pipeline failing"
```bash
# Solution: Check workflow files
1. Verify .github/workflows/code-quality.yml exists
2. Check Node.js version matches local (18.x)
3. Ensure all scripts work locally first
4. Check GitHub Actions logs for specific errors
```

### Configuration Files

- `.prettierrc.json`: Prettier formatting rules (2025 best practices)
- `.prettierignore`: Files to exclude from formatting
- `eslint.config.mjs`: ESLint configuration with Prettier integration
- `.husky/pre-commit`: Pre-commit hook configuration
- `package.json`: lint-staged configuration
- `.vscode/`: VS Code workspace settings for optimal development

---

## 📚 Additional Resources

- [VS Code ESLint Extension Docs](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code Prettier Extension Docs](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [WebStorm ESLint Setup Guide](https://www.jetbrains.com/help/webstorm/eslint.html)
- [WebStorm Prettier Setup Guide](https://www.jetbrains.com/help/webstorm/prettier.html)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Prettier Configuration Options](https://prettier.io/docs/en/options.html)
- [ESLint Configuration Guide](https://eslint.org/docs/user-guide/configuring/)

---

## 🎉 Ready to Code!

Your development environment is now fully configured with:

- ✅ **Automated code formatting** with Prettier
- ✅ **Live error detection** with ESLint  
- ✅ **Pre-commit validation** with Husky
- ✅ **CI/CD quality checks** with GitHub Actions
- ✅ **IDE integration** for VS Code and WebStorm
- ✅ **Comprehensive documentation** for team onboarding

Happy coding! 🚀