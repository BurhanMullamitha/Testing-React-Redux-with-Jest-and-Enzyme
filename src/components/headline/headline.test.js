import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';

import Headline from './index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {
    
    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Description'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a HEADING H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a PARAGRAPH P', () => {
            const p = findByTestAttr(wrapper, 'desc');
            expect(p.length).toBe(1);
        });

    });

    describe('Have NO Props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        });

    });
    
})