import {
  createTransactionBtn,
  amount,
  amountBlank,
  amountValue,
  ownerSource,
  ownerSourceName,
  ownerDestination,
  ownerDestinationName,
  submitBtn,
  successMessage,
  clearBtn,
  currency,
  errorMessage,
} from "../pageObjects/createTransactionPageObjects";

export default class CreateTransactionPage {
  constructor(page) {
    this.page = page;
  }

  async createTransaction() {
    await this.page.waitAndClick(createTransactionBtn);
    return await this.page.getText(createTransactionBtn);
  }

  async typeAmountBlank() {
    return await this.page.waitAndType(amount, amountBlank);
  }
  async typeAmount() {
    return await this.page.waitAndType(amount, amountValue);
  }

  async selectSourceOwner() {
    await this.page.waitAndClick(ownerSource);
    return await this.page.waitAndType(ownerSource, ownerSourceName);
  }

  async selectSourceAsDestinationOwner() {
    await this.page.waitAndClick(ownerDestination);
    return await this.page.waitAndType(ownerDestination, ownerSourceName);
  }

  async selectDestinationOwner() {
    await this.page.waitAndClick(ownerDestination);
    return await this.page.waitAndType(ownerDestination, ownerDestinationName);
  }

  async clickSubmit() {
    await this.page.waitAndClick(submitBtn);
    return this.page.getText(submitBtn);
  }

  async verifySuccessMessageVisible() {
    return await this.page.isElementVisible(successMessage);
  }

  async verifySuccessMessageText() {
    return this.page.getText(successMessage);
  }

  async clickClear() {
    await this.page.waitAndClick(clearBtn);
    return this.page.getText(clearBtn);
  }

  async getAttributeValueAmount() {
    return this.page.getAttributeValue(amount);
  }

  async getAttributeValueCurrency() {
    return this.page.getAttributeValue(currency);
  }

  async verifyErrorMessageVisible() {
    return await this.page.isElementVisible(errorMessage);
  }

  async errorMessageText() {
    return this.page.getText(errorMessage);
  }
}
