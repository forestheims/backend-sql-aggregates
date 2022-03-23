const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 6', () => {
  afterAll(() => pool.end());

  it('find customer ranking by total amount spent', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-6.sql`, 'utf-8'));
    expect(rows).toEqual(require('./result.json'));
  });
});
