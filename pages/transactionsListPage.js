import {
  transListBtn,
  infoMessage,
  dateFrom,
  dateTo,
  searchBtn,
  transDetailsTab,
  sourceNameInput,
  destinationNameInput,
  bodyMessageList,
  fromDateInput,
  toDateInput,
  errorMessage,
  inputDate,
  tillDate,
  greaterDate,
  lesserDate,
} from "../pageObjects/transactionsListPageObjects";

export default class TransactionsListPage {
  constructor(page) {
    this.page = page;
  }

  async clickTransactionsListTab() {
    return await this.page.waitAndClick(transListBtn);
  }

  async verifyTransDetailsTab() {
    return await this.page.isElementVisible(transDetailsTab);
  }

  async verifyInfoMessageVisible() {
    return await this.page.isElementVisible(infoMessage);
  }

  async verifyInfoMessageText() {
    return await this.page.getText(infoMessage);
  }

  async datePickerFrom() {
    await this.page.isElementVisible(dateFrom);
    await this.page.waitAndType(dateFrom, fromDateInput);
  }

  async datePickerTo() {
    await this.page.isElementVisible(dateTo);
    await this.page.waitAndType(dateTo, toDateInput);
  }

  async clickSearch() {
    return await this.page.waitAndClick(searchBtn);
  }

  async sourceNameInput() {
    return await this.page.isElementVisible(sourceNameInput);
  }

  async destinationNameInput() {
    return await this.page.isElementVisible(destinationNameInput);
  }

  async tableList() {
    return await this.page.isElementVisible(bodyMessageList);
  }

  async verifyErrorMessageVisible() {
    return await this.page.isElementVisible(errorMessage);
  }

  async errorMessageText() {
    return await this.page.getText(errorMessage);
  }

  async noRecordFound() {
    await this.page.waitAndType(dateFrom, inputDate);
    return await this.page.waitAndType(dateTo, tillDate);
  }

  async dateGreater() {
    await this.page.waitAndType(dateFrom, greaterDate);
    return await this.page.waitAndType(dateTo, lesserDate);
  }
}
