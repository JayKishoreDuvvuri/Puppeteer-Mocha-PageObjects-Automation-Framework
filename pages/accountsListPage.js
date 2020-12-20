import {
  accountListBtn,
  accountDetailsTab,
  idLabel,
  nameLabel,
  nameInputBox,
  userName,
  balanceLabel,
  currencyLabel,
  createdOnLabel,
  tableBody,
  size,
  prevBtn,
  nextBtn,
} from "../pageObjects/accountsListPageObjects";

export default class AccountsListPage {
  constructor(page) {
    this.page = page;
  }

  async accountsListTabVisible() {
    return await this.page.isElementVisible(accountListBtn);
  }
  async clickAccountsListTab() {
    return await this.page.waitAndClick(accountListBtn);
  }

  async checkAccountDetailsTab() {
    return await this.page.isElementVisible(accountDetailsTab);
  }

  async idLabelVisible() {
    return await this.page.isElementVisible(idLabel);
  }

  async nameLabelVisible() {
    return await this.page.isElementVisible(nameLabel);
  }

  async nameInputBoxEnabled() {
    return await this.page.isElementVisible(nameInputBox);
  }

  async typeName() {
    return await this.page.waitAndType(nameInputBox, userName);
  }

  async balanceLabelVisible() {
    return await this.page.isElementVisible(balanceLabel);
  }

  async currencyLabelVisible() {
    return await this.page.isElementVisible(currencyLabel);
  }

  async createdOnLabelVisible() {
    return await this.page.isElementVisible(createdOnLabel);
  }

  async tableBodyVisible() {
    return await this.page.isElementVisible(tableBody);
  }

  async sizeVisible() {
    return await this.page.isElementVisible(size);
  }

  async previousPageButtonVisible() {
    return await this.page.isElementVisible(prevBtn);
  }

  async nextPageButtonVisible() {
    return await this.page.isElementVisible(nextBtn);
  }

  async clickNextPageButton() {
    return await this.page.waitAndClick(nextBtn);
  }

  async clickPreviousPageButton() {
    return await this.page.waitAndClick(prevBtn);
  }
}
