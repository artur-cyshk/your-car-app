import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Section from './index';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with title and content', () => {
  act(() => {
    render(<Section title="test_title"><span>test_content</span></Section>, container);
  });
  expect(container.querySelector('header').textContent).toBe('test_title');
  expect(container.querySelector('main').textContent).toBe('test_content');
});
