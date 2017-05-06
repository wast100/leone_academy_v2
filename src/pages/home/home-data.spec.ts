import { data } from './home-data';

describe('Home page', () => {
	it('should contain a button that navigate to te following facebook page', () => {
		expect(data.facebook).toBe('https://www.facebook.com/leoneacademy/');
	}),
  it('should contain a button with a valid phone number', () => {
    expect(data.phoneNumber).toBe('+41792007397');
  });
});

//behavior driven framwork ..
//BDD TEST..
