export class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api'; // eslint-disable-line
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`); // eslint-disable-line
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }
    const data = await res.json();
    return data;
  }

  async getAllCharacters() {
    const res = await this.getResource('/characters?page=5&pageSize=10');
    return this._transformAllCharacter(res); // eslint-disable-line
  }

  async getCharacter(id) {
    const res = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(res); // eslint-disable-line
  }

  async getAllBooks() {
    const res = await this.getResource('/books?page=1&pageSize=100');
    return res.map(this._transformBook); // eslint-disable-line
  }

  async getBook(id) {
    const res = await this.getResource(`/books/${id}`);
    return this._transformBook(res); // eslint-disable-line
  }

  async getAllHouses() {
    const res = this.getResource('/houses?page=1&pageSize=100');
    return res.map(this._transformHouse); // eslint-disable-line
  }

  async getHouse(id) {
    const res = this.getResource(`/houses/${id}`);
    return this._transformHouse(res); // eslint-disable-line
  }

  _transformAllCharacter = (chars) => {
    const data = chars.map((char) => {
      return {
        name: char.name,
        gender: char.gender,
        born: char.born,
        died: char.died,
        culture: char.culture,
        url: char.url,
      };
    });

    return data;
  }

  _transformCharacter = (char) => {
    this.assertNotEmpty(char);
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
    };
  }

  _transformHouse = (house) => {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    };
  }

  _transformBook = (book) => {
    return {
      name: book.name,
      numberofPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.realised,
    };
  }

  assertNotEmpty = (data) => {
    Object.keys(data)
      .forEach((elem) => {
        const arr = data;
        if (arr[elem].length === 0) {
          arr[elem] = 'n/a';
        }
        if (arr[elem].length > 25) {
          arr[elem] = arr[elem].slice(0, 25).concat('...');
        }
      });
  }
}
