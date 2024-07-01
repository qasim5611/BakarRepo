import { useState } from 'react';

import { Stack, Button, TextField, InputAdornment, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchSection = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <Stack
            mb={'3rem'}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent={'space-between'}
            alignItems="center"
        >
            <Stack direction="row" gap={2}>
                <Button sx={{ padding: '.7em 1em' }} variant="btn1">
                    All
                </Button>
                <Button
                    variant="btn4"
                    sx={{
                        '&:hover': {
                            background: 'transparent',
                            color: '#000',
                        },
                    }}
                >
                    Portfolio
                </Button>
                <Button
                    variant="btn4"
                    sx={{
                        '&:hover': {
                            background: 'transparent',
                            color: '#000',
                        },
                    }}
                >
                    Watchlist
                </Button>
            </Stack>
            <Box>
                <TextField
                    sx={{
                        marginTop: { xs: '1.5em', sm: '0' },
                    }}
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearchChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Stack>
    );
};

export default SearchSection;
