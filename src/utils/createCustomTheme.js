import { createTheme } from '@mui/material/styles';

const themeObj = {
    light: {
        text: {
            primary: '#000',
            lightblue: '#3696D2',
            darkblue: '#0B7BC3',
            white: '#fff',
            lightbrown: '#585858',
        },
        background: {
            hard: '#fff',
            medium: '#fdfdfd',
            light: '#efefef',
            borderLight: '#bdbdbd',
            shadow: '#000',
            greenColor: 'rgba(27,200,112,1)',
            lightGreen: 'rgba(27,200,112,0.2)',
            redColor: 'rgba(255,0,51,1)',
            lightRed: 'rgba(255,0,51,0.2)',
        },
    },

    dark: {
        text: {
            primary: '#fff',
            lightblue: '#3696D2',
            darkblue: '#0B7BC3',
        },
        background: {
            hard: '#000',
            medium: '#151515',
            light: '#212121',
            borderLight: '#424242',
            shadow: '#000',
            greenColor: 'rgba(27,200,112,1)',
            lightGreen: 'rgba(27,200,112,0.2)',
            redColor: 'rgba(255,0,51,1)',
            lightRed: 'rgba(255,0,51,0.2)',
        },
    },
};

export const createCustomTheme = (mode) =>
    createTheme({
        palette: {
            mode,
            ...themeObj[mode],
        },
        typography: {
            fontFamily: ['Poppins', 'sans-serif'].join(','),
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: (theme) => `
		    body {
		      background-color: ${theme.palette.mode === 'dark' ? '#131213' : '#fdfdfd'}
		    }
		  `,
            },
            MuiButton: {
                variants: [
                    {
                        props: { variant: 'btn1' },
                        style: {
                            background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
                            color: '#fff',
                            borderRadius: '6px',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '24px',
                            textTransform: 'none',
                            border: '1px solid #5BACDE ',


                            '&:hover': {
                                background: 'transparent',
                                border: '1px solid #0B7BC3 ',
                                color: '#0B7BC3',
                            },
                        },
                    },
                    {
                        props: { variant: 'btn2' },
                        style: {
                            background: 'transparent',
                            border: '1px solid #0B7BC3 ',
                            color: '#0B7BC3',
                            textTransform: 'none',
                            borderRadius: '6px',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '24px',
                            '&:hover': {
                                background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
                                border: '1px solid #0B7BC3 ',
                                color: '#ffffff',
                            },
                        },
                    },
                    {
                        props: { variant: 'btn3' },
                        style: {
                            background: 'rgba(208, 207, 207, 0.5)',
                            color: '#fff',
                            border: '1px solid #F3F3F3',
                            borderRadius: '6px',
                            fontFamily: 'Poppins',
                            textTransform: 'none',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            '&:hover': {
                                background: 'transparent',
                            },
                        },
                    },
                    {
                        props: { variant: 'btn4' },
                        style: {
                            background:
                                'linear-gradient(0deg, rgba(225, 225, 225, 0.5) -8.2%, rgba(196, 196, 196, 0.5) 105.38%)',
                            border: '0.5px solid #AFAFAF',
                            borderRadius: '6px',
                            fontFamily: 'Poppins',
                            textTransform: 'none',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '24px',
                            color: '#989898',
                            '&:hover': {
                                background: 'transparent',
                                color: '#fff',
                            },
                        },
                    },
                ],
            },
        },
    });
