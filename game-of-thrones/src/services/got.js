export class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, recived ${res.status}`);
    }
    const json = await res.json();
    return json;
  }

  characters() {
    return this.getResource(`/characters?page=5&pageSize=10`);
  }

  character(id) {
    return this.getResource(`/characters/${id}`);
  }

  books() {
    return this.getResource(`/books?page=1&pageSize=100`);
  }

  book(id) {
    return this.getResource(`/books/${id}`);
  }

  houses() {
    return this.getResource(`/houses?page=1&pageSize=100`);
  }

  house(id) {
    return this.getResource(`/houses/${id}`);
  }
}
