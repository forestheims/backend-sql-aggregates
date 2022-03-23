const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 1', () => {
  afterAll(() => pool.end());

  it('find the title and count of the top 10 most rented films', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-1.sql`, 'utf-8'));
    expect(rows).toEqual([
      { title: 'Bucket Brotherhood', count: '34' },
      { title: 'Rocketeer Mother', count: '33' },
      { title: 'Forward Temple', count: '32' },
      { title: 'Juggler Hardly', count: '32' },
      { title: 'Ridgemont Submarine', count: '32' },
      { title: 'Grit Clockwork', count: '32' },
      { title: 'Scalawag Duck', count: '32' },
      { title: 'Robbers Joon', count: '31' },
      { title: 'Network Peak', count: '31' },
      { title: 'Timberland Sky', count: '31' },
    ]);
  });
});
