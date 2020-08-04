import day1 from '../src/day1';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import 'mocha';

chai.use(sinonChai);

describe('calculate indivudual fuel', () => {
  // first usecase input: 12 output: 2
  let mass = 12;
  let fuel = day1.calculateFuel(mass);
  expect(fuel).to.equal(2);

  // first usecase input: 14 output: 2
  mass = 14;
  fuel = day1.calculateFuel(mass);
  expect(fuel).to.equal(2);

  // first usecase input: 1969 output: 654
  mass = 1969;
  fuel = day1.calculateFuel(mass);
  expect(fuel).to.equal(966);

  // first usecase input: 100756 output: 33583
  mass = 100756;
  fuel = day1.calculateFuel(mass);
  expect(fuel).to.equal(50346);
});

describe('calculate total fuel', () => {
  let masses = [12, 14, 1969, 100756];
  let expectedTotalFuel = 51316;

  let totalFuel = day1.calculateTotalFuel(masses);

  expect(totalFuel).to.equal(expectedTotalFuel);
});