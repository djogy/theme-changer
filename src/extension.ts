import { execFile } from 'child_process';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "theme-changer" is now active!');

	const switchTo = function (colorThemeName: string|undefined, fontSize: number|undefined) {
		if(((colorThemeName === undefined) || (fontSize === undefined)) ||
			(colorThemeName === "")) {
			vscode.window.showInformationMessage(`Can not switch`);
		} else {
			const workbenchConfig = vscode.workspace.getConfiguration('workbench');
			const editorConfig = vscode.workspace.getConfiguration('editor');

			workbenchConfig.update("colorTheme", colorThemeName, true);
			editorConfig.update("fontSize", fontSize, true);

			vscode.window.showInformationMessage(`Switch to ${colorThemeName}: ${fontSize}`);
		}
	};

	context.subscriptions.push(
		vscode.commands.registerCommand('theme-changer.switchToTheme1', () => {
			const colorThemeName: string|undefined = vscode.workspace.getConfiguration("theme-changer").get("theme1.colorTheme");
			const fontSize: number|undefined = vscode.workspace.getConfiguration("theme-changer").get("theme1.fontSize");

			switchTo(colorThemeName, fontSize);
		}));

	context.subscriptions.push(
		vscode.commands.registerCommand('theme-changer.switchToTheme2', () => {
			const colorThemeName: string|undefined = vscode.workspace.getConfiguration("theme-changer").get("theme2.colorTheme");
			const fontSize: number|undefined = vscode.workspace.getConfiguration("theme-changer").get("theme2.fontSize");

			switchTo(colorThemeName, fontSize);
	}));

	context.subscriptions.push(
		vscode.commands.registerCommand('theme-changer.switchToTheme3', () => {
			const colorThemeName: string|undefined = vscode.workspace.getConfiguration("theme-changer").get("theme3.colorTheme");
			const fontSize: number|undefined = vscode.workspace.getConfiguration("theme-changer").get("theme3.fontSize");

			switchTo(colorThemeName, fontSize);
	}));
}

export function deactivate() {}
