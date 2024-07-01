import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import logo from '../../images/Logo.png';

export default function Header() {
    return (
        <Box>
            <Container maxWidth="xl">
                <Stack direction="row" justifyContent="space-between">
                    <img src={logo} alt="" />
                    <Stack direction="row" spacing={2}>
                        <Box>Dashboard</Box>
                        <Box>Wallets</Box>
                        <Box>Portfolio</Box>
                        <Box>Taxes</Box>
                        <Box>Tax plan</Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
