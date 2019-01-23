import { formatDate } from './formatDate';
export class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }
    const data = await res.json();
    return data;
  }

  getAllCharacters = async () => {
    const res = await this.getResource('/characters?page=5&pageSize=10');
    return this._transformAllCharacter(res);
  }

  getCharacter = async (id) => {
    const res = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(res);
  }

  getAllBooks = async () => {
    const res = await this.getResource('/books?page=1&pageSize=100');
    return res.map(this._transformBook);
  }

  getBook = async (id) => {
    const res = await this.getResource(`/books/${id}`);
    return this._transformBook(res);
  }

  getAllHouses = async (id) => {
    const res = await this.getResource('/houses?page=5&pageSize=10');
    return res.map(this._transformHouse);
  }

  getHouse = async (id) => {
    const res = await this.getResource(`/houses/${id}`);
    return this._transformHouse(res);
  }

  _transformAllCharacter = (chars) => {
    const data = chars.map((char) => {
      const id = this.genereteId(char)
      return {
        id,
        name: char.name,
        gender: char.gender,
        born: char.born,
        died: char.died,
        culture: char.culture,
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
    this.assertNotEmpty(house);
    const id = this.genereteId(house)
    return {
      id,
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    };
  }

  _transformBook = (book) => {
    this.assertNotEmpty(book);
    const id = this.genereteId(book)
    return {
      id,
      name: book.name,
      numberofPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released,
    };
  }

  genereteId = (url) => {
    const beforeId = url.url.split('/');
    const newId = beforeId[beforeId.length - 1];
    return newId
  }

  assertNotEmpty = (data) => {

    Object.keys(data)
      .forEach((elem) =>  {
        const arr = data;
        if (elem === 'url') return;
        if (elem === 'released') {
          arr[elem]= formatDate(arr[elem]);
        }
        if (arr[elem].length === 0) {
          return arr[elem] = 'n/a';
        }
        if (arr[elem].length > 25) {
          return arr[elem] = arr[elem].slice(0, 25).concat('...');
        }
        if (Array.isArray(arr[elem]) && arr[elem][0].length === 0) {
          return arr[elem] = 'n/a';
        }
      });
  }
}
