import React from 'react';
import {
    shallow,
    mount,
    render
} from 'enzyme';
import DashboardComponent from '../Components/dashboardComponent';
import '../testSetup'
import { Provider } from 'react-redux';
import { store } from "../store";
import App from '../App';
/**
 * describe what we are testing
 **/
describe('DashboardComponent', () => {
    /**
     * make our assertion and what we expect to happen 
     **/
    it('should render without throwing an error', () => {
            expect(mount( <Provider store={store}></Provider>,<DashboardComponent/> ).exists()).toBe(true)
        })
        /**
         * within the RegisterComponent components describe function
         **/

        /**
         * within the AdminSignIn components describe function
         **/
    
// //     describe('email input', () => {
// //         it('should respond to change event and change the state of the AdminSignIn Component', () => {
// //             const wrapper = shallow( < AdminSignIn / > );
// //             wrapper.find('#email').simulate('change', {
// //                 target: {
// //                     name: 'email',
// //                     value: 'ashwini.pachare8@yahoo.com'
// //                 }
// //             });
// //             expect(wrapper.state('email')).toEqual('ashwini.pachare8@yahoo.com');
// //         })
// //     })
// //     describe('Password input', () => {
// //         it('should respond to change event and change the state of the AdminSignIn Component', () => {
// //             const wrapper = shallow( < AdminSignIn / > );
// //             wrapper.find('#password')
// //                 .simulate('change', {
// //                     target: {
// //                         name: 'password',
// //                         value: 'analogcomm8@'
// //                     }
// //                 });
// //             expect(wrapper.state('password')).toEqual('analogcomm8@');
// //         })
// //     })
  })