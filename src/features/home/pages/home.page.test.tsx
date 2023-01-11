import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './home.page';

describe('Given Home component', () => {
    const localStorageMock = (function () {
        let store: { [keys: string]: string } = {};

        return {
            getItem(key: string) {
                return store[key] || null;
            },

            setItem(key: string, value: string) {
                store[key] = value;
            },

            clear() {
                store = {};
            },

            removeItem(key: string) {
                delete store[key];
            },

            getAll() {
                return store;
            },
        };
    })();
    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
    });
    beforeEach(() => {
        window.localStorage.clear();
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        );
    });

    test('renders Home Page', () => {
        const textElement = screen.getByText(
            /No hay robots en la base de datos/i
        );
        expect(textElement).toBeInTheDocument();
        const imageElement = screen.getByAltText(/robot_home/i);
        expect(imageElement).toBeInTheDocument();
    });

    test('render homePage with mockStorage', () => {
        window.localStorage.setItem('robots', JSON.stringify(3));
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        );

        const textElement = screen.getByText(
            /Hay 3 robots en la base de datos/i
        );
        expect(textElement).toBeInTheDocument();
    });
});
