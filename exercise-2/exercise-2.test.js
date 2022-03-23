const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 2', () => {
  afterAll(() => pool.end());

  it('find the top 10 cities with the most total rental payment amount', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-2.sql`, 'utf-8'));
    expect(rows).toEqual([
      { city: 'Saint-Denis', sum: '211.55' },
      { city: 'Cape Coral', sum: '208.58' },
      { city: 'Santa Brbara dOeste', sum: '194.61' },
      { city: 'Apeldoorn', sum: '191.62' },
      { city: 'Molodetno', sum: '189.60' },
      { city: 'Qomsheh', sum: '183.63' },
      { city: 'London', sum: '174.54' },
      { city: 'Memphis', sum: '167.67' },
      { city: 'Richmond Hill', sum: '167.62' },
      { city: 'Tanza', sum: '166.61' },
    ]);
  });
});
