// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import '../testSetup'
// import { success } from '../Actions/alertAction';

// import configureStore from 'redux-mock-store';
// import AdminSignIn from '../Components/adminSignIn';
	

// describe('RegistrationForm component', () => {
// 	// here it is possible to pass in any middleware if needed into configureStore
// 	const mockStore = configureStore();
// 	let wrapper;
// 	let store;

// 	beforeEach(() => {
// 		// create any initial state needed
// 		const initialState = { type: success };

// 		// creates the store with any initial state or middleware needed
// 		store = mockStore(initialState);
// 		const props = { store }

// 		wrapper = mount(<AdminSignIn {...props} />);
// 		console.log("beforeEach done", wrapper.state().email)
// 	})

// 	it('should has email', () => {
// 		wrapper.find('[name="email"]').find('input').simulate('change',
// 			{
// 				target: { value: 'CCCCC', name: 'email' }
// 			}
// 		);
// 		wrapper = wrapper.update()

// 		console.log("test->state: ", wrapper.state());
// 		expect(wrapper.state().user.email).toBe('CCCCC');
// 	});
// });