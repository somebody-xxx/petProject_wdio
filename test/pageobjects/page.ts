/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    public open(path: string): Promise<string> {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
