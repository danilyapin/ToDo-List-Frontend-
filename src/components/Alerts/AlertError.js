import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertInfo() {
    return (
        <Stack
            sx={{
                position: 'fixed',
                bottom: 0, // Abstand vom unteren Rand
                left: 0,
                right: 0,
                display: 'flex',

                width: '100%',
            }}>
            {/* <Alert severity="success">Neue ToDo erfolgreich hinzugefügt.</Alert>
            <Alert severity="info">This is an info Alert.</Alert>
            <Alert severity="warning">This is a warning Alert.</Alert> */}
            <Alert variant="outlined" severity="error">This is an error Alert.</Alert>
        </Stack>
    );
}
