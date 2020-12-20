import { expect } from "chai";
import Page from "../../../helper";
import CreateAccountPage from "../../../pages/createAccountPage";
import {
  createAccountBtnText,
  errorMessageBalanceText,
} from "../../../pageObjects/createAccountPageObjects";
var timestamp = new Date().getTime();

describe("Create Account Page : Negative Test to verify Balance Field Error Message", function () {
  let page;
  let createAccountPage;

  before(async () => {
    page = await Page.build("Desktop");
    createAccountPage = new CreateAccountPage(page);
  });

  after(async () => {
    await page.close();
  });

  it("Verify page title", async () => {
    let isVisible = await createAccountPage.checkTitle();
    expect(isVisible).to.be.true;
  });

  it("Click create account tab and verify button text", async () => {
    let btnText = await createAccountPage.createAccount();
    expect(btnText).to.equal(createAccountBtnText);
  });

  it("Enter balance field as blank and check error message", async () => {
    await createAccountPage.typeOwnerPatrick();
    await createAccountPage.typeBalanceAsBlank();
    await createAccountPage.clickSubmit();
    let isVisible = await createAccountPage.verifyErrorMessageVisible();
    expect(isVisible).to.be.true;
    let errorText = await createAccountPage.errorMessageText();
    expect(errorText).to.include(errorMessageBalanceText);
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
