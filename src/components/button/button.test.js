import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils';
import SharedButton from './index';

describe('SharedButton Component', () => {
    
    describe('Checking PropTypes', () => {
        
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Button Title',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Button Title',
                emitEvent: () => {

                }
            };
            wrapper = shallow(<SharedButton {...props} />);
        });

        it('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

    });

});