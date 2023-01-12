import React from 'react';
import { render, screen } from '@testing-library/react';
import Router, { MemoryRouter, Route, Routes } from 'react-router-dom';

import { DetailsPage } from './details.page';

const createWrapper = () => {
    return render(
        <MemoryRouter initialEntries={['/details/123860']} initialIndex={0}>
            <DetailsPage></DetailsPage>
        </MemoryRouter>
    );
};

// Object.defineProperty(window, 'location', {
//     value: {
//         href: '/details/123860',
//         pathname: '/details/123860',
//     },
// });
describe('Component Page', () => {
    describe('Rendering', () => {
        it('should render cases container', () => {
            // eslint-disable-next-line testing-library/render-result-naming-convention
            const wrapper = createWrapper();

            // eslint-disable-next-line testing-library/prefer-screen-queries
            const textElement = wrapper.getByText(/Velocidad:/i);
            screen.debug();
            expect(textElement).toBeInTheDocument();
            const path = global.window.location.pathname;
            expect(path).toBe('/details/123860');
        });
    });
});
