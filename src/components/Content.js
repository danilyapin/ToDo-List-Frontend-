import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import * as React from 'react';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Neue ToDo einfügen" {...a11yProps(0)} />
                    <Tab label="Anstehende ToDos" {...a11yProps(1)} />
                    <Tab label="Erledigte ToDos" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box
                    component="form"
                    sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}
                    noValidate
                    autoComplete="off"
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TextField id="outlined-basic" label="ToDo schreiben" variant="outlined" sx={{ width: '30ch' }} />
                        <Button variant="contained" sx={{ height: '56px' }}>Hinzufügen</Button>
                    </Box>
                </Box>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Anstehende ToDos
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Erledigte ToDos
            </CustomTabPanel>
        </Box>

    );
}
