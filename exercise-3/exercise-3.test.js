const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 3', () => {
  afterAll(() => pool.end());

  it('find the average rental amount by country', async() => {
    const { rows } = await pool.query(fs.readFileSync(`${__dirname}/exercise-3.sql`, 'utf-8'));
    expect(rows).toEqual([
      { country: 'Nepal', avg: '5.5194117647058824' },
      { country: 'French Guiana', avg: '4.8900000000000000' },
      { country: 'Turkmenistan', avg: '4.8746153846153846' },
      { country: 'Kenya', avg: '4.8135294117647059' },
      { country: 'Nauru', avg: '4.7900000000000000' },
      { country: 'Armenia', avg: '4.7500000000000000' },
      { country: 'Czech Republic', avg: '4.7400000000000000' },
      { country: 'Runion', avg: '4.7011111111111111' },
      { country: 'Chile', avg: '4.5960606060606061' },
      { country: 'Ukraine', avg: '4.5954421768707483' },
    ]);
  });
});
