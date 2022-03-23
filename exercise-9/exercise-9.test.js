const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 9', () => {
  afterAll(() => pool.end());

  it('find ROLLUP of amount made per year, month, day', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-9.sql`, 'utf-8'));
    expect(rows).toEqual(require('./result.json'));
  });
});
