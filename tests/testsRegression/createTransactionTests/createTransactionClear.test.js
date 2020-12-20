import { expect } from "chai";
import Page from "../../../helper";
import CreateTransactionPage from "../../../pages/CreateTransactionPage";
import { clearBtnText } from "../../../pageObjects/createTransactionPageObjects";
var timestamp = new Date().getTime();

describe("Create Transaction Page : Click on Clear Button and verify the fields are Empty", function () {
  let page;
  let createTransactionPage;

  before(async () => {
    page = await Page.build("Desktop");
    createTransactionPage = new CreateTransactionPage(page);
  });

  after(async () => {
    await page.close();
  });

  it("Fill in User details and click clear button", async () => {
    await createTransactionPage.createTransaction();
    await createTransactionPage.typeAmount();
    await createTransactionPage.selectSourceOwner();
    await createTransactionPage.selectDestinationOwner();
    let btnText = await createTransactionPage.clickClear();
    expect(btnText).to.equal(clearBtnText);
  });

  it("Verify owner and balance fields are empty", async () => {
    let amount = await createTransactionPage.getAttributeValueAmount();
    expect(amount).to.be.empty;
    let currency = await createTransactionPage.getAttributeValueCurrency();
    expect(currency).to.be.empty;
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
