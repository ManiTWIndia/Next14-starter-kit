import Button from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'}
    }
};

export const RedButton = {
    args: {
        backgroundColor: 'red',
        label: 'Red'
    }
};

export const BlueButton = {
    args: {
        backgroundColor: 'blue',
        label: 'Blue'
    }
};

export const Large = {
    args: {
        size: 'lg',
        label: 'Large'
    }
};

export const Medium = {
    args: {
        size: 'md',
        label: 'Medium'
    }
};

export const Small = {
    args: {
        size: 'sm',
        label: 'Small'
    }
};
