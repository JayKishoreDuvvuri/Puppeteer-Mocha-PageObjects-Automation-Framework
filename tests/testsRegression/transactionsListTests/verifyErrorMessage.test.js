import { expect } from "chai";
import Page from "../../../helper";
import TransactionsListPage from "../../../pages/transactionsListPage";
import {
  errorMessageText,
  noRecordMessageText,
  dateGreaterMessageText,
} from "../../../pageobjects/transactionsListPageObjects";
var timestamp = new Date().getTime();

describe("Transaction List Page : Click on Search Button to view Error Message", function () {
  let page;
  let transactionsListPage;

  before(async () => {
    page = await Page.build("Desktop");
    transactionsListPage = new TransactionsListPage(page);
  });

  after(async () => {
    await page.close();
  });

  it("Click transactions list tab", async () => {
    await transactionsListPage.clickTransactionsListTab();
    await page.waitForTimeout(3000);
  });

  it("Click search button without entering any date to view error message", async () => {
    await transactionsListPage.clickSearch();
    let isVisible = await transactionsListPage.verifyErrorMessageVisible();
    expect(isVisible).to.be.true;
    let errorText = await transactionsListPage.errorMessageText();
    expect(errorText).to.include(errorMessageText);
  });

  it("Enter only From date and click search button to view error message", async () => {
    await transactionsListPage.datePickerFrom();
    await transactionsListPage.clickSearch();
    let isVisible = await transactionsListPage.verifyErrorMessageVisible();
    expect(isVisible).to.be.true;
    let errorText = await transactionsListPage.errorMessageText();
    expect(errorText).to.include(errorMessageText);
  });

  it("Enter only To date and click search button to view error message", async () => {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.waitForTimeout(3000);
    await transactionsListPage.datePickerTo();
    await transactionsListPage.clickSearch();
    let isVisible = await transactionsListPage.verifyErrorMessageVisible();
    expect(isVisible).to.be.true;
    let errorText = await transactionsListPage.errorMessageText();
    expect(errorText).to.include(errorMessageText);
  });

  it("Verify the Info message No record found", async () => {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.waitForTimeout(3000);
    await transactionsListPage.noRecordFound();
    await transactionsListPage.clickSearch();
    let isVisible = await transactionsListPage.verifyErrorMessageVisible();
    expect(isVisible).to.be.true;
    let errorText = await transactionsListPage.errorMessageText();
    expect(errorText).to.include(noRecordMessageText);
  });

  it("Verify error message for Date From cannot be greater than Date to", async () => {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.waitForTimeout(3000);
    await transactionsListPage.dateGreater();
    await transactionsListPage.clickSearch();
    let isVisible = await transactionsListPage.verifyErrorMessageVisible();
    expect(isVisible).to.be.true;
    let errorText = await transactionsListPage.errorMessageText();
    expect(errorText).to.include(dateGreaterMessageText);
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
