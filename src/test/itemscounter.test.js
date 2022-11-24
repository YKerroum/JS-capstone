import itemCounter from '../modules/items.js';

describe('countertest', () => {
  jest.mock('../modules/items.js');
  document.body.innerHTML = `
  <div id="movieNav"></div>
  `;
  const movieCount = document.getElementById('movieNav');

  test('fourmodules', () => {
    // arrange
    movieCount.innerHTML = `
    <div id="movies">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div> `;

    // act
    itemCounter();

    // assets

    expect(movieCount.innerHTML).toBe('Movies (4)');
  });

  test('twomodules', () => {
    movieCount.innerHTML = `
    <div id="movies">
      <p></p>
      <p></p>
    </div> `;

    itemCounter();

    expect(movieCount.innerHTML).toBe('Movies (2)');
  });

  test('nomodule', () => {
    movieCount.innerHTML = `
    <div id="movies">
    </div> `;

    itemCounter();

    expect(movieCount.innerHTML).toBe('Movies (0)');
  });
});