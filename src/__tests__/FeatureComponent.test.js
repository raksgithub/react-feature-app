import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import FeatureComponent from '../components/FeatureComponent/';

let container = null;

// Setup Logic
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

describe('Test FeatureComponent with Snapshot testing', () => {
    it('Tests One Component features when item is not bought by anyone', () => {
        const features = [{
            id: 1,
            title: 'starter',
            price: '$1',
            description: 'Starter features for your business to grow.'
        }, {
            id: 2,
            title: 'regular',
            price: '$25',
            description: 'Regular features for your business to grow.'
        }];
        const bought = false;
        const by = 'null';
        const handleButtonAction = function() {};
        const component = create(
            <FeatureComponent 
                features={features} 
                bought={bought} 
                by={by} 
                handleButtonAction={handleButtonAction} 
            />
        );
        // const instance = component.getInstance();
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Tests One Component features when item is bought by starter', () => {
        const features = [{
            id: 1,
            title: 'starter',
            price: '$1',
            description: 'Starter features for your business to grow.'
        }, {
            id: 2,
            title: 'regular',
            price: '$25',
            description: 'Regular features for your business to grow.'
        }];
        const bought = true;
        const by = 'starter';
        const handleButtonAction = function() {};
        const component = create(
            <FeatureComponent 
                features={features} 
                bought={bought} 
                by={by} 
                handleButtonAction={handleButtonAction} 
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Tests Two Component features when item is not bought by anyone', () => {
        const features = [{
            id: 1,
            title: 'professional',
            price: '$75',
            description: 'Professional features for your business to grow.'
        }, {
            id: 2,
            title: 'ultimate',
            price: '$115',
            description: 'The ultimate set of features for your business to grow.'
        }];
        const bought = false;
        const by = 'null';
        const handleButtonAction = function() {};
        const component = create(
            <FeatureComponent 
                features={features} 
                bought={bought} 
                by={by} 
                handleButtonAction={handleButtonAction} 
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Tests One Component features when item is bought by ultimate', () => {
        const features = [{
            id: 1,
            title: 'professional',
            price: '$75',
            description: 'Professional features for your business to grow.'
        }, {
            id: 2,
            title: 'ultimate',
            price: '$115',
            description: 'The ultimate set of features for your business to grow.'
        }];
        const bought = true;
        const by = 'ultimate';
        const handleButtonAction = function() {};
        const component = create(
            <FeatureComponent 
                features={features} 
                bought={bought} 
                by={by} 
                handleButtonAction={handleButtonAction} 
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});

// Teardown Logic
afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});
