# Prettier Configuration for NestJS TypeScript Projects (2025)

This project uses an optimized Prettier configuration following 2025 best practices for NestJS TypeScript development.

## Configuration Options Explained

### Core Formatting Rules
- **`semi: true`** - Always add semicolons (TypeScript best practice)
- **`singleQuote: true`** - Use single quotes instead of double quotes
- **`quoteProps: "as-needed"`** - Only quote object properties when necessary
- **`trailingComma: "all"`** - Add trailing commas wherever possible (ES5+)

### Indentation Settings
- **`tabWidth: 2`** - Use 2 spaces per indentation level (standard for TypeScript)
- **`useTabs: false`** - Use spaces instead of tabs for consistency

### Line Length and Wrapping
- **`printWidth: 100`** - Wrap lines at 100 characters (modern wide-screen optimized)
- **`proseWrap: "preserve"`** - Preserve existing line breaks in markdown/text

### Bracket and Spacing Rules
- **`bracketSpacing: true`** - Add spaces inside object brackets `{ foo: bar }`
- **`bracketSameLine: true`** - Put closing brackets on the same line as the last element
- **`arrowParens: "avoid"`** - Omit parentheses when possible `x => x`

### Language-Specific Formatting
- **`jsxSingleQuote: true`** - Use single quotes in JSX attributes
- **`htmlWhitespaceSensitivity: "css"`** - Honor CSS whitespace rules in HTML
- **`embeddedLanguageFormatting: "auto"`** - Format embedded languages automatically
- **`vueIndentScriptAndStyle: false`** - Don't indent Vue script/style blocks

### Miscellaneous Settings
- **`endOfLine: "lf"`** - Use Unix line endings (LF) for cross-platform compatibility
- **`insertPragma: false`** - Don't insert Prettier pragma comments
- **`requirePragma: false`** - Format all files, regardless of pragma comments

## Benefits of This Configuration

1. **Modern Line Length**: 100 characters optimized for wide screens and modern development
2. **TypeScript Optimized**: Single quotes and semicolons align with TypeScript conventions  
3. **Team Consistency**: Standardized formatting reduces diff noise and merge conflicts
4. **Cross-Platform**: LF line endings work consistently across Windows, Mac, and Linux
5. **Framework Agnostic**: Works well with NestJS, Angular, React, and Vue if needed

## Usage

The configuration is automatically applied when running:
- `npm run format` - Format all files
- `npm run format:check` - Check formatting without changes
- Pre-commit hooks via Husky and lint-staged
- GitHub Actions CI/CD pipeline

## References

Based on 2025 best practices from:
- NestJS official recommendations
- TypeScript community standards
- Angular/React development guidelines
- Prettier.io official documentation