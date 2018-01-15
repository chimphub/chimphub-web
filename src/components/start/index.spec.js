import React from 'react';
import renderer from 'react-test-renderer';

import Start from './index';

jest.mock('./style.scss', () => ({ default: {} }));

it('renders start correctly', () => {
    const tree = renderer.create(
        <Start />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
