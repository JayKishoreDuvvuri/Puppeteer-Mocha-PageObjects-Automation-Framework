import { expect } from "chai";
import Page from "../../../helper";
import CreateTransactionPage from "../../../pages/createTransactionPage";
import {
  createTransactionBtnText,
  submitBtnText,
  successMessageText,
} from "../../../pageObjects/createTransactionPageObjects";
var timestamp = new Date().getTime();

describe("Create Transaction Page : Create Transaction for User by Selecting Source and Destination Owner", function () {
  let page;
  let createTransactionPage;

  before(async () => {
    page = await Page.build("Desktop");
    createTransactionPage = new CreateTransactionPage(page);
  });

  after(async () => {
    await page.close();
  });

  it("click create transaction button and verify button text", async () => {
    let btnText = await createTransactionPage.createTransaction();
    expect(btnText).to.equal(createTransactionBtnText);
  });

  it("Type amount and select the owner of source and destination", async () => {
    await createTransactionPage.typeAmount();
    await createTransactionPage.selectSourceOwner();
    await createTransactionPage.selectDestinationOwner();
    let btnText = await createTransactionPage.clickSubmit();
    expect(btnText).to.equal(submitBtnText);
  });

  it("Verify success message and text", async () => {
    let isVisible = await createTransactionPage.verifySuccessMessageVisible();
    expect(isVisible).to.be.true;
    let messageText = await createTransactionPage.verifySuccessMessageText();
    expect(messageText).to.include(successMessageText);
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
