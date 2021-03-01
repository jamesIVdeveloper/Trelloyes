import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';


describe('Card component', () => {
    it('renderes without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<div className='Card'>
                        <button type='button'>
                            delete
                        </button>
                        <h3>First Card</h3>
                        <p>lorem ipsum</p>
                    </div>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

