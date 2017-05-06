import { data } from './home-data';

describe('Home data', () => {
	it('should contain valid data for the home page', () => {
		expect(data.facebook).toBe('https://www.facebook.com/leoneacademy/');
	}),
  it('should contain a valid phone number', () => {
    expect(data.phoneNumber).toBe('+41792007397');
  });
});
