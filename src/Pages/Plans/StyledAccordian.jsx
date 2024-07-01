import React, { useState } from 'react';

import { Box, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledAccordian = ({ item, i }) => {
    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : '');
    };

    return (
        <Box px={4}>
            <Accordion
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
                sx={{
                    background:
                        'white',
                    borderRadius: '10px',
                    border: '1px solid #4FA9E3',
                    p: 1,
                }}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === `panel${i}` ? (
                            <RemoveIcon sx={{ color: '#0B7BC3' }} />
                        ) : (
                            <AddIcon sx={{ color: '#0B7BC3' }} />
                        )
                    }
                    aria-controls={`panel${i}-content`}
                    id={`panel${i}-header`}
                    sx={{ minHeight: { xs: '55px', md: '66px' } }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '10px', md: '15px' },
                            fontFamily: 'Gmarket',
                            fontWeight: 500,
                            color: '#585858',
                        }}
                    >
                        {item.qus}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography fontSize={{ xs: '10px', md: '15px' }}>{item.ans}</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default StyledAccordian;
