import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    public get flashAlert(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#flash');
    }
}

export default new SecurePage();
