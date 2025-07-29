# IDE Setup Guide: ESLint & Prettier Auto-formatting

This guide will help you configure your IDE to automatically format code with Prettier and show live ESLint violations for optimal development experience.

## 🚀 Visual Studio Code Setup

### Required Extensions

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

### VS Code Settings Configuration

Create or update `.vscode/settings.json` in your project root:

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

### VS Code User Settings (Global)

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

### VS Code Keybindings (Optional)

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

---

## 🧠 WebStorm / IntelliJ IDEA Setup

### Enable Built-in Tools

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

## 🔧 Project-Specific IDE Configuration

### VS Code Workspace Settings

Create `.vscode/settings.json` in your project:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ],
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.workingDirectories": ["./"],
  "prettier.configPath": "./.prettierrc.json",
  "typescript.preferences.includePackageJsonAutoImports": "on"
}
```

### WebStorm Project Settings

Create `.idea/prettier.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="PrettierConfiguration">
    <option name="myConfigurationMode" value="AUTOMATIC" />
    <option name="myRunOnSave" value="true" />
    <option name="myRunOnReformat" value="true" />
  </component>
</project>
```

---

## 🎯 Verification Steps

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

---

## 🎉 Success Indicators

When properly configured, you should experience:

- ✅ **Instant formatting** on save (Prettier)
- ✅ **Live error highlighting** as you type (ESLint)
- ✅ **Auto-import organization** on save
- ✅ **Quick fixes** via lightbulb/Alt+Enter
- ✅ **Consistent code style** across team members
- ✅ **Zero configuration conflicts** between tools

---

## 📚 Additional Resources

- [VS Code ESLint Extension Docs](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code Prettier Extension Docs](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [WebStorm ESLint Setup Guide](https://www.jetbrains.com/help/webstorm/eslint.html)
- [WebStorm Prettier Setup Guide](https://www.jetbrains.com/help/webstorm/prettier.html)

Happy coding! 🚀