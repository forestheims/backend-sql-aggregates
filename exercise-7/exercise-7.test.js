const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 7', () => {
  afterAll(() => pool.end());

  it('find customer ranking by total film time watched', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-7.sql`, 'utf-8'));
    expect(rows).toEqual(require('./result.json'));
  });
});
