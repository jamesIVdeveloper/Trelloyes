import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


describe('List component', () => {
    it('renderes without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List
                key='2'
                header='Second List'
                cards={[]}
              />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
