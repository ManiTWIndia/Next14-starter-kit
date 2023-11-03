import PropTypes from 'prop-types';
import Stack from './Stack';

export default {
    title: 'Components/Stack',
    component: Stack,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
        numberOfChildren: {type: 'number', defaultValue: 4}
    }
};

function Template({numberOfChildren, ...args}) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Stack {...args}>
            {[...Array(numberOfChildren).keys()].map((n) => (
                <div
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
}

Template.propTypes = {
    numberOfChildren: PropTypes.number.isRequired
};

export const RowStack = Template.bind({});
RowStack.args = {
    direction: 'row'
};

export const ColumnStack = Template.bind({});
ColumnStack.args = {
    direction: 'column'
};

export const FourSpacingStack = Template.bind({});
FourSpacingStack.args = {
    spacing: 4
};
