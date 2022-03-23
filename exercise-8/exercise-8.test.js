const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 8', () => {
  afterAll(() => pool.end());

  it('find rank of film category by times rented', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-8.sql`, 'utf-8'));
    expect(rows).toEqual([
      { name: 'Sports', count: '1179', rank: '1' },
      { name: 'Animation', count: '1166', rank: '2' },
      { name: 'Action', count: '1112', rank: '3' },
      { name: 'Sci-Fi', count: '1101', rank: '4' },
      { name: 'Family', count: '1096', rank: '5' },
      { name: 'Drama', count: '1060', rank: '6' },
      { name: 'Documentary', count: '1050', rank: '7' },
      { name: 'Foreign', count: '1033', rank: '8' },
      { name: 'Games', count: '969', rank: '9' },
      { name: 'Children', count: '945', rank: '10' },
      { name: 'Comedy', count: '941', rank: '11' },
      { name: 'New', count: '940', rank: '12' },
      { name: 'Classics', count: '939', rank: '13' },
      { name: 'Horror', count: '846', rank: '14' },
      { name: 'Travel', count: '837', rank: '15' },
      { name: 'Music', count: '830', rank: '16' },
    ]);
  });
});
