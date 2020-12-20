import { expect } from "chai";
import Page from "../../../helper";
import CreateAccountPage from "../../../pages/createAccountPage";
import {
  createAccountBtnText,
  submitBtnText,
  successMessageText,
} from "../../../pageObjects/createAccountPageObjects";
var timestamp = new Date().getTime();

describe("Create Account Page : Create Account for User with Currency Euro", function () {
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

  it("click Create Account Button and verify button text", async () => {
    let btnText = await createAccountPage.createAccount();
    expect(btnText).to.equal(createAccountBtnText);
  });

  it("Fill in User details as currency Euro and click submit button", async () => {
    await createAccountPage.typeOwnerPatrick();
    await createAccountPage.typeBalance();
    await createAccountPage.selectEuro();
    let btnText = await createAccountPage.clickSubmit();
    expect(btnText).to.equal(submitBtnText);
  });

  it("Verify success message and text", async () => {
    let isVisible = await createAccountPage.verifySuccessMessageVisible();
    expect(isVisible).to.be.true;
    let messageText = await createAccountPage.verifySuccessMessageText();
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
