import { expect } from "chai";
import Page from "../../../helper";
import AccountsListPage from "../../../pages/accountsListPage";
var timestamp = new Date().getTime();

describe("Accounts List Page: Enter Name and click Next & Prev Buttons to check the respective rows visible", function () {
  let page;
  let accountsListPage;

  before(async () => {
    page = await Page.build("Desktop");
    accountsListPage = new AccountsListPage(page);
  });

  after(async () => {
    await page.close();
  });

  it("Click on Accounts List Tab and Verify Account Details Tab visible", async () => {
    let isDisplayed = await accountsListPage.accountsListTabVisible();
    expect(isDisplayed).to.be.true;
    await accountsListPage.clickAccountsListTab();
    let isVisible = await accountsListPage.checkAccountDetailsTab();
    expect(isVisible).to.be.true;
  });

  it("Enter Name in the input field and check respective rows visible", async () => {
    let isDisplayed = await accountsListPage.nameInputBoxEnabled();
    expect(isDisplayed).to.be.true;
    await accountsListPage.typeName();
    let isVisible = await accountsListPage.tableBodyVisible();
    expect(isVisible).to.be.true;
  });

  it("Click on the next page and Previous page button to verify whether the rows visible", async () => {
    await accountsListPage.clickNextPageButton();
    let isDisplayed = await accountsListPage.tableBodyVisible();
    expect(isDisplayed).to.be.true;
    await accountsListPage.clickPreviousPageButton();
    let isVisible = await accountsListPage.tableBodyVisible();
    expect(isVisible).to.be.true;
  });

  afterEach(async function () {
    let testCaseName = this.currentTest.title;
    let testCaseStatus = this.currentTest.state;
    if (testCaseStatus === "failed") {
      console.log(`Test: ${testCaseName}, Status: Failed!`);
      return await page.screenshot({
        path: `Screenshots/${testCaseName}-${timestamp}.png`,
        fullPage: true,
      });
    } else if (testCaseStatus === "passed") {
      console.log(`Test: ${testCaseName}, Status: Passed!`);
    } else {
      console.log(`Test: ${testCaseName}, Status: Unknown!`);
    }
  });
});
