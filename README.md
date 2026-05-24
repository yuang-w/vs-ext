# Copy Line Reference

Copy current file path with selected line range to clipboard.

## Format

```
@/absolute/path/to/file#Lstart-Lend
```

## Usage

1. Select lines in the editor
2. Run `Copy Line Reference` from Command Palette (`Cmd+Shift+P`)
3. Default keybinding: `Ctrl+Alt+C`

## Install

```bash
cd copy-line-ref
pnpm install  # or npm install
```

Then in VSCode:
1. `Run` > `Start Debugging` (F5) to test
2. Or package it: `vsce package` and install the `.vsix`
