import * as path from 'path';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('copyLineRef.copy', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showWarningMessage('No editor found.');
      return;
    }

    const document = editor.document;
    const workspacePath = vscode.workspace.getWorkspaceFolder(document.uri);
    if (!workspacePath) {
      vscode.window.showWarningMessage('No workspace folder found.');
      return;
    }

    const relativePath = path.relative(workspacePath.uri.fsPath, document.fileName);
    const selection = editor.selection;
    const isEmptySelection = selection.isEmpty;

    let ref: string;
    if (isEmptySelection) {
      ref = relativePath;
    } else {
      const startLine = selection.start.line + 1;
      const endLine = selection.end.line + 1;
      ref = startLine === endLine
        ? `@${relativePath}#${startLine}`
        : `@${relativePath}#${startLine}-${endLine}`;
    }

    await vscode.env.clipboard.writeText(ref);
    vscode.window.showInformationMessage(`Copied: ${ref}`);
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
