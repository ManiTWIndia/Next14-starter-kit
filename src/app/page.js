import Button from './components/Button';
import Stack from './components/Stack';

export default function Home() {
    return (
        <>
            <h1>Components</h1>

            <h4>Button</h4>

            <Button backgroundColor="green" label="Button" />

            <h4>Stack</h4>

            <Stack>
                <Button backgroundColor="red" label="Red Button" />
                <Button backgroundColor="yellow" label="Yellow Button" />
                <Button backgroundColor="green" label="Green Button" />
                <Button backgroundColor="blue" label="Blue Button" />
            </Stack>
        </>
    );
}
