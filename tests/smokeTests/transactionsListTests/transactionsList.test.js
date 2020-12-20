import { expect } from "chai";
import Page from "../../../helper";
import TransactionsListPage from "../../../pages/transactionsListPage";
import { messageText } from "../../../pageObjects/transactionsListPageObjects";
var timestamp = new Date().getTime();

describe("Transaction List Page : Enter dates and click Search to view records visible", function () {
  let page;
  let transactionsListPage;

  before(async () => {
    page = await Page.build("Desktop");
    transactionsListPage = new TransactionsListPage(page);
  });

  after(async () => {
    await page.close();
  });

  it("Click transactions list tab and verify transaction details tab and info message visible", async () => {
    await transactionsListPage.clickTransactionsListTab();
    let isVisible = await transactionsListPage.verifyTransDetailsTab();
    expect(isVisible).to.be.true;
    let isDisplayed = await transactionsListPage.verifyInfoMessageVisible();
    expect(isDisplayed).to.be.true;
    let infoText = await transactionsListPage.verifyInfoMessageText();
    expect(infoText).to.include(messageText);
  });

  it("Enter dates and click search button to see the transactions visible", async () => {
    await transactionsListPage.datePickerFrom();
    await transactionsListPage.datePickerTo();
    await transactionsListPage.clickSearch();
    let isDisplayed = await transactionsListPage.tableList();
    expect(isDisplayed).to.be.true;
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
