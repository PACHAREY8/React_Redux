import React from 'react';
import {
    shallow,
    mount,
    render
} from 'enzyme';
import AdminSignIn from '../Components/adminSignIn';
import '../testSetup'
/**
 * describe what we are testing
 **/
describe('AdminSignIn', () => {
    /**
     * make our assertion and what we expect to happen 
     **/
    it('should render without throwing an error', () => {
            expect(shallow( < AdminSignIn / > )
                    .exists())
                .toBe(true)
        })
        /**
         * within the RegisterComponent components describe function
         **/
    it('renders a userName input', () => {
        expect(shallow( < AdminSignIn / > ).find('#email').length).toEqual(1)
    })
    it('renders a password input', () => {
        expect(shallow( < AdminSignIn / > ).find('#password').length).toEqual(1)
    })
        /**
         * within the AdminSignIn components describe function
         **/
    
    describe('email input', () => {
        it('should respond to change event and change the state of the AdminSignIn Component', () => {
            const wrapper = shallow( < AdminSignIn / > );
            wrapper.find('#email').simulate('change', {
                target: {
                    name: 'email',
                    value: 'ashwini.pachare8@yahoo.com'
                }
            });
            expect(wrapper.state('email')).toEqual('ashwini.pachare8@yahoo.com');
        })
    })
    describe('Password input', () => {
        it('should respond to change event and change the state of the AdminSignIn Component', () => {
            const wrapper = shallow( < AdminSignIn / > );
            wrapper.find('#password')
                .simulate('change', {
                    target: {
                        name: 'password',
                        value: 'analogcomm8@'
                    }
                });
            expect(wrapper.state('password')).toEqual('analogcomm8@');
        })
    })
})