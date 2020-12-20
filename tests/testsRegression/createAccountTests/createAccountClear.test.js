import { expect } from "chai";
import Page from "../../../helper";
import CreateAccountPage from "../../../pages/createAccountPage";
import {
  createAccountBtnText,
  clearBtnText,
} from "../../../pageObjects/createAccountPageObjects";
var timestamp = new Date().getTime();

describe("Create Account Page : Click on Clear Button and verify the fields are Empty", function () {
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

  it("Fill in User details and click clear button", async () => {
    await createAccountPage.typeOwnerStephan();
    await createAccountPage.typeBalance();
    await createAccountPage.selectEuro();
    let btnText = await createAccountPage.clickClear();
    expect(btnText).to.equal(clearBtnText);
  });

  it("Verify owner and balance fields are empty", async () => {
    let valueOwner = await createAccountPage.getAttributeValueOwner();
    expect(valueOwner).to.be.empty;
    let valueBalance = await createAccountPage.getAttributeValueBalance();
    expect(valueBalance).to.be.empty;
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
