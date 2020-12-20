import { expect } from "chai";
import Page from "../../../helper";
import CreateTransactionPage from "../../../pages/CreateTransactionPage";
import {
  createTransactionBtnText,
  errorMessageText,
} from "../../../pageObjects/createTransactionPageObjects";
var timestamp = new Date().getTime();

describe("Create Transaction Page : Negative Test to verify Owner Field Error Message", function () {
  let page;
  let createTransactionPage;

  before(async () => {
    page = await Page.build("Desktop");
    createTransactionPage = new CreateTransactionPage(page);
  });

  after(async () => {
    await page.close();
  });

  it("Click create transaction tab and verify button text", async () => {
    let btnText = await createTransactionPage.createTransaction();
    expect(btnText).to.equal(createTransactionBtnText);
  });

  it("Enter owner field as blank and check error message", async () => {
    await createTransactionPage.typeAmount();
    await createTransactionPage.clickSubmit();
    let isVisible = await createTransactionPage.verifyErrorMessageVisible();
    expect(isVisible).to.be.true;
    let errorText = await createTransactionPage.errorMessageText();
    expect(errorText).to.include(errorMessageText);
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
