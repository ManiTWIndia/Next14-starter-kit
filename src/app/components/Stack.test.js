import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Stack from './Stack';

describe('Stack', () => {
    it('renders a stack', () => {
        const {container} = render(
            <Stack>
                {[...Array(4).keys()].map((n) => (
                    <div
                        key={n}
                        style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'red',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {n + 1}
                    </div>
                ))}
            </Stack>
        );
        expect(container).toMatchSnapshot();
    });

    it('should trigger onClick on click of the button', () => {
        render(
            <Stack>
                {[...Array(2).keys()].map((n) => (
                    <div
                        key={n}
                        data-testid={`component-${n + 1}`}
                        style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'red',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {n + 1}
                    </div>
                ))}
            </Stack>
        );
        expect(screen.getByTestId('component-1')).toBeInTheDocument();
        expect(screen.getByTestId('component-2')).toBeInTheDocument();
    });
});
