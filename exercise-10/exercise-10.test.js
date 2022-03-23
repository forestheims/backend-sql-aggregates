const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 9', () => {
  afterAll(() => pool.end());

  it('find CUBE of amount made per year, month, day, and film rating', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-10.sql`, 'utf-8'));
    expect(rows).toEqual(require('./result.json'));
  });
});
