import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AppContextService } from '@msft-sme/angular';
import { LoremIpsum } from 'src/app/dev-guide/lorem-ipsum/lorem-ipsum.component';

@Component({
    selector: 'sme-ng2-controls-markdown-example',
    templateUrl: './markdown-example.component.html'
})
export class MarkdownExampleComponent {
    // For a complete markdown example see: https://daringfireball.net/projects/markdown/syntax.text
    // tslint:disable:max-line-length
    public exampleMarkdown = `# Windows Admin Center SDK #

Welcome to the Windows Admin Center SDK!  Windows Admin Center is an evolution of Windows Server in-box management tools; a locally deployed, browser-based management experience that supports scenarios where customers need full control of all aspects of their deployment, including private networks which aren’t Internet-connected.

### Get started with the SDK ###

Getting started with Windows Admin Center development is easy!  Follow along with [step-by-step directions](https://docs.microsoft.com/windows-server/manage/windows-admin-center/extend/prepare-development-environment) to prepare your environment, and learn more about writing and publishing extensions at our [documentation site](https://aka.ms/WACSDKDocs).

Don't have Windows Admin Center installed yet?  [Download](https://aka.ms/WACDownloadPage) Windows Admin Center.

### Sample Code included with the SDK ###

* Sample code can be found for **tool**, **solution**, and **gateway plugin** extension types in our [SDK documentation](https://aka.ms/WACSDKDocs).  There you will leverage the Windows Admin Center CLI to build a new extension project, then follow the individual guides to customize your project to meet your needs.

* [Developer Tools](/windows-admin-center-developer-tools) is a repository of code to give you an example of how to use and include Windows Admin Center controls and styles in your extensions.  Just use the CLI to create your tool or solution, and then reference the code in the repository to see what is available.

To actually see the code in action, Use the [Extension Manager](/https://docs.microsoft.com/en-us/windows-server/manage/windows-admin-center/configure/using-extensions) to find the "Windows Admin Center Developer Tools (Preview)" extension and install it.  This will add a new solution to your gateway instance that has tools to help you explore the development environment.

### SDK design toolkit ###

Check out our Windows Admin Center [SDK design toolkit](WindowsAdminCenterDesignToolkit.zip)! This toolkit is designed to help you rapidly mock up extensions in PowerPoint using Windows Admin Center styles, controls, and page templates. See what your extension can look like in Windows Admin Center before you start coding!

### Contributing ###

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.`;
    // tslint:enable:max-line-length

    public static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string {
        return 'smeMarkdown';
    }

    constructor() {
    }
}
