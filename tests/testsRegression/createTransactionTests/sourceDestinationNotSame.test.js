import { expect } from "chai";
import Page from "../../../helper";
import CreateTransactionPage from "../../../pages/createTransactionPage";
import { sourceDestinationMessage } from "../../../pageObjects/createTransactionPageObjects";
var timestamp = new Date().getTime();

describe("Create Transaction Page : Negative Test to verify Source and Destination cannot be same Error Message", function () {
  let page;
  let createTransactionPage;

  before(async () => {
    page = await Page.build("Desktop");
    createTransactionPage = new CreateTransactionPage(page);
  });

  after(async () => {
    await page.close();
  });

  it("Click create transaction tab", async () => {
    await createTransactionPage.createTransaction();
  });

  it("Select the owner of source and destination as same and verify error message", async () => {
    await createTransactionPage.typeAmount();
    await createTransactionPage.selectSourceOwner();
    await createTransactionPage.selectSourceAsDestinationOwner();
    await createTransactionPage.clickSubmit();
    let isVisible = await createTransactionPage.verifyErrorMessageVisible();
    expect(isVisible).to.be.true;
    let errorText = await createTransactionPage.errorMessageText();
    expect(errorText).to.include(sourceDestinationMessage);
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
