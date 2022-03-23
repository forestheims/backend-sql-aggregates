const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 4', () => {
  afterAll(() => pool.end());

  it('find the average film length by category', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-4.sql`, 'utf-8'));
    expect(rows).toEqual([
      { name: 'Family', avg: '114.7826086956521739' },
      { name: 'Games', avg: '127.8360655737704918' },
      { name: 'Animation', avg: '111.0151515151515152' },
      { name: 'Classics', avg: '111.6666666666666667' },
      { name: 'Documentary', avg: '108.7500000000000000' },
      { name: 'New', avg: '111.1269841269841270' },
      { name: 'Sports', avg: '128.2027027027027027' },
      { name: 'Children', avg: '109.8000000000000000' },
      { name: 'Music', avg: '113.6470588235294118' },
      { name: 'Travel', avg: '113.3157894736842105' },
      { name: 'Foreign', avg: '121.6986301369863014' },
      { name: 'Drama', avg: '120.8387096774193548' },
      { name: 'Horror', avg: '112.4821428571428571' },
      { name: 'Action', avg: '111.6093750000000000' },
      { name: 'Sci-Fi', avg: '108.1967213114754098' },
      { name: 'Comedy', avg: '115.8275862068965517' },
    ]);
  });
});
