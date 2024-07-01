import { useState } from 'react';

import { ExpandMore } from '@mui/icons-material';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    '&:hover': {
        background: ' linear-gradient(180deg, #A1DAFD 0%, #4FA9E3 71.87%)',
        color: theme.palette.text.white,
    },
    textAlign: 'center',
    color: theme.palette.text.darkblue,
    '&.Mui-expanded': {
        background: ' linear-gradient(180deg, #A1DAFD 0%, #4FA9E3 71.87%)',
        color: theme.palette.text.white,
    },
}));
const StyledLink = styled(NavLink)(() => ({
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
        color: 'black',
    },
}));

export const NavigationAccordion = ({ nameToShow, items }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    const handleAccordionChange = (event, isExpanded) => {
        setAccordionOpen(isExpanded);
        event.stopPropagation();
    };

    return (
        <>
            <Accordion expanded={accordionOpen} onChange={handleAccordionChange}>
                <StyledAccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>{nameToShow}</Typography>
                </StyledAccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#e8f3f9' }}>
                    <List>
                        {items?.map((item, i) => {
                            return (
                                <ListItemButton key={i}>
                                    <StyledLink to={item.link}>
                                        <ListItemText primary={item.itemName} />
                                    </StyledLink>
                                </ListItemButton>
                            );
                        })}
                    </List>
                </AccordionDetails>
            </Accordion>
        </>
    );
};
