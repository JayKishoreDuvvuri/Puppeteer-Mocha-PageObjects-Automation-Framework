import {
  headerTitle,
  createAccountButton,
  owner,
  ownerName,
  secondownerName,
  ownerNameBlank,
  balance,
  balanceBlank,
  balanceAmount,
  currency,
  euro,
  dollar,
  submitBtn,
  successMessage,
  clearBtn,
  errorMessage,
} from "../pageObjects/createAccountPageObjects";

export default class CreateAccountPage {
  constructor(page) {
    this.page = page;
  }

  async checkTitle() {
    const isVisible = await this.page.isElementVisible(headerTitle);
    return isVisible;
  }

  async createAccount() {
    await this.page.waitAndClick(createAccountButton);
    return await this.page.getText(createAccountButton);
  }

  async typeOwner() {
    return await this.page.waitAndType(owner, ownerNameBlank);
  }

  async typeOwnerStephan() {
    return await this.page.waitAndType(owner, ownerName);
  }

  async typeOwnerPatrick() {
    return await this.page.waitAndType(owner, secondownerName);
  }

  async typeBalanceAsBlank() {
    return await this.page.waitAndType(balance, balanceBlank);
  }

  async typeBalance() {
    return await this.page.waitAndType(balance, balanceAmount);
  }

  async selectEuro() {
    return await this.page.selectDropdown(currency, euro);
  }

  async selectDollar() {
    return await this.page.selectDropdown(currency, dollar);
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

  async getAttributeValueOwner() {
    return this.page.getAttributeValue(owner);
  }

  async getAttributeValueBalance() {
    return this.page.getAttributeValue(balance);
  }

  async verifyErrorMessageVisible() {
    return await this.page.isElementVisible(errorMessage);
  }

  async errorMessageText() {
    return this.page.getText(errorMessage);
  }
}
