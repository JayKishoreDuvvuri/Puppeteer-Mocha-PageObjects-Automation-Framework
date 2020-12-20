import { expect } from "chai";
import Page from "../../../helper";
import AccountsListPage from "../../../pages/accountsListPage";
var timestamp = new Date().getTime();

describe("Accounts List Page: Verify all the Sections are Visible", function () {
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

  it("Verify all labels and sections are visible", async () => {
    await accountsListPage.idLabelVisible();
    await accountsListPage.nameLabelVisible();
    await accountsListPage.balanceLabelVisible();
    await accountsListPage.currencyLabelVisible();
    await accountsListPage.createdOnLabelVisible();
    await accountsListPage.sizeVisible();
    await accountsListPage.previousPageButtonVisible();
    await accountsListPage.nextPageButtonVisible();
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
