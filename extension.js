const vscode = require('vscode');
const liveServer = require('live-server');

function activate(context) {
	let disposable = vscode.commands.registerCommand('ruthandchaya.startLivePreview', function () {
		if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length === 0) {
			vscode.window.showErrorMessage('No workspace folder open. Please open a folder and try again.');
			return;
		}

		const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;

		const serverOptions = {
			root: workspaceFolder,  
			open: true,              
			wait: 500,               
		};

		liveServer.start(serverOptions);

		vscode.window.showInformationMessage('Live Preview Started!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {
	liveServer.shutdown();
}

module.exports = {
	activate,
	deactivate
};
