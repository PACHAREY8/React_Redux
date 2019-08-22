import React from 'react';
import {
    shallow,
    mount,
    render
} from 'enzyme';
import AdminSignIn from '../Components/adminSignIn';
import '../testSetup'
import { Provider } from 'react-redux';
import { store } from "../store";

/**
 * describe what we are testing
 **/
describe('AdminSignIn', () => {
    /**
     * make our assertion and what we expect to happen 
     **/
    it('should render without throwing an error', () => {
        expect(mount( <Provider store={store}><AdminSignIn/></Provider> ).exists()).toBe(true)
        })

    it('renders a userName input', () => {
        expect(mount( <Provider store={store}><AdminSignIn/></Provider> ).find('#email').length).toEqual(1)
    })
    it('renders a password input', () => {
        expect(mount(<Provider store={store}><AdminSignIn/></Provider> ).find('#password').length).toEqual(1)
    })
    //     /**
    //      * within the AdminSignIn components describe function
    //      **/
    
    describe('email input', () => {
        it('should respond to change event and change the state of the AdminSignIn Component', () => {
            const wrapper = mount( <Provider store={store}><AdminSignIn/></Provider> );
            wrapper.find("#email").simulate('change', {
                target: {
                    name: "email",
                    type:"email",
                    value: '#ashwini.pachare8@gmail.com' 
                }
            });
            expect(wrapper.state("email")).toEqual(undefined);
        })
    })
    describe('Password input', () => {
        it('should respond to change event and change the state of the AdminSignIn Component', () => {
            const wrapper = mount( <Provider store={store}><AdminSignIn/></Provider> );
            wrapper.find('#password').simulate('change', {
                    target: {
                        name: 'password',
                        type:'password',
                        value: 'undefined',
                    }
                });
            expect(wrapper.state('password')).toEqual(undefined);
        })
    })
 })