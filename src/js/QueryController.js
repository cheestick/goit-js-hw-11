class QueryController {
  constructor(queryString = '', totalPages = 1, page = 1) {
    this._queryString = queryString;
    this._prevQueryString = null;
    this._currentPage = page;
    this._totalPages = totalPages;
  }

  get queryString() {
    return this._queryString;
  }

  set queryString(queryString) {
    this.prevQueryString = this.queryString;
    this._queryString = queryString;
    console.log(this.prevQueryString, this.queryString);
  }

  get page() {
    return this._currentPage;
  }

  get totalPages() {
    return this._totalPages;
  }

  set totalPages(quantity) {
    this._totalPages = quantity;
  }

  get prevQueryString() {
    return this._prevQueryString;
  }

  set prevQueryString(queryString) {
    if (!this.queryString) {
      return null;
    }

    this._prevQueryString = queryString;
  }

  get nextPage() {
    return (this._currentPage += 1);
  }

  init(queryString, totalPages = 1, page = 1) {
    this._prevQueryString = this._queryString;
    this._queryString = queryString;
    this._currentPage = page;
    this._totalPages = totalPages;
  }

  hasNextPage() {
    console.log('hasNextPage', this.page, ' ', this.totalPages);
    if (this.page + 1 > this.totalPages) return false;
    return true;
  }

  isSearchNew() {
    if (this.prevQueryString !== this.queryString) return true;
    return false;
  }
}

export default new QueryController();
