import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * get header element
     */
    private get header(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('.example h2');
    }

    /**
     * get Username input element
     */
    private get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#username');
    }

    /**
     * get Password input element
     */
    private get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#password');
    }

    /**
     * get Submit button element
     */
    private get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button[type="submit"]');
    }

    /**
     * login user (enter userName, password and click submit btn)
     */
    public async login (username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open('login');
    }

    /**
     * Is login page opened?
     */
    public async isOpened(): Promise<void> {
        let elem = await this.header;
        await elem.isDisplayed();
    }

    /**
     * get header text
     */
    public getHeaderText(): Promise<string> {
        return this.header.getText();
    }
}

export default new LoginPage();
