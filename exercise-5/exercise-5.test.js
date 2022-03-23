const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 5', () => {
  afterAll(() => pool.end());

  it('find the total run time of all inventory items if they were all played back to back', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-5.sql`, 'utf-8'));
    expect(rows).toEqual([{ sum: '526491' }]);
  });
});
