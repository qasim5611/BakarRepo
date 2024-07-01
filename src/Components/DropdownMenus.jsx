import { useCallback, useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Dialog,
    Divider,
    Grid,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Switch,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Search, Close, ArrowBack } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../config';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterQuery } from '../redux/slices/filterTransectionSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { useDropzone } from 'react-dropzone';
import upload from '../images/AddWallet/upload.png';
import useMakeToast from '../hooks/makeToast';
import { logout } from '../redux/slices/userSlice';
import TimelineIcon from '@mui/icons-material/Timeline';
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        backgroundColor: '#fff',
        color: '#fff',

        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: `${theme.palette.text.white}`,
                marginRight: theme.spacing(1.5),
                textAlign: 'center',
            },
            '&:active': {
                backgroundColor: '#4FAAE4',
            },
        },
    },
}));

const StyledMenuItem = styled(MenuItem)({
    display: 'block',
    textAlign: 'start',
    width: '100%',
    // '&:hover': {
    //     background: ' linear-gradient(180deg, #A1DAFD 0%, #4FA9E3 71.87%)',
    // },
});

const StyledLink = styled(NavLink)(() => ({
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
        color: 'black',
    },
}));

export const NavigationDropdown = ({ nameToShow, items }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    color: '#0B7BC3',
                    textTransform: 'capitalize',
                    fontSize: { lg: '16px', md: '14px', xs: '12px' },
                }}
                onClick={handleClick}
            >
                {nameToShow}
                <ArrowDropDownIcon />
            </Button>
            <StyledMenu
                id="menu1"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {items?.map((item, i) => {
                    return (
                        <StyledLink key={i} to={item.link}>
                            <StyledMenuItem onClick={handleClose}>{item.itemName}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export const SortingDropdown = ({ sortItem, setChecked, index }) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const setQuery = (item, i) => {
        setChecked(index, i);
        dispatch(setFilterQuery({ ...item, query: sortItem.name }));
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const validateStartDate = (date) => {
        if (date > endDate) {
            toast.error('invalid Start and End date');
            // setEndDate(date);
            return;
        }
        setStartDate(date);
        let dateObject = {
            from: date.toDateString(),
            to: endDate.toDateString(),
            checked: false,
        };

        setQuery(dateObject, 1);
    };

    const validateEndDate = (date) => {
        if (date < startDate) {
            toast.error('invalid Start and End date');
            return;
            // setStartDate(date);
        }
        setEndDate(date);
        let dateObject = {
            from: startDate.toDateString(),
            to: date.toDateString(),
            checked: false,
        };
        setQuery(dateObject, 2);
    };

    return (
        <>
            <Button
                sx={{
                    border: '1px solid #3696D2',
                    textTransform: 'capitalize',
                    color: 'white',
                    minWidth: '6rem',
                    margin: '1.3em .2em',
                    background: ' linear-gradient(180deg, #A1DAFD 0%, #4FA9E3 71.87%)',
                }}
                onClick={handleClick}
            >
                {sortItem.name}
                <ArrowDropDownIcon />
            </Button>
            <StyledMenu
                open={Boolean(anchorEl)}
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                {sortItem?.items?.map((item, i) => {
                    return (
                        <StyledLink key={i}>
                            {sortItem.name === 'Date' ? (
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '50px',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <StyledMenuItem
                                        sx={{ height: 280, width: 200, marginLeft: '40px' }}
                                    >
                                        <DatePicker
                                            dropdownMode="select"
                                            popperPlacement="bottom"
                                            open={true}
                                            selected={startDate}
                                            placeholderText={'Set StartDate'}
                                            onChange={validateStartDate}
                                        />
                                    </StyledMenuItem>
                                    <StyledMenuItem sx={{ height: 280, width: 220 }}>
                                        <DatePicker
                                            dropdownMode="select"
                                            popperPlacement="bottom"
                                            open={true}
                                            selected={endDate}
                                            placeholderText={'Set EndDate'}
                                            onChange={validateEndDate}
                                        />
                                    </StyledMenuItem>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <input type="checkbox" checked={item.checked} />
                                    <StyledMenuItem
                                        onClick={() => {
                                            setQuery(item, i), handleClose();
                                        }}
                                    >
                                        {item.name}
                                    </StyledMenuItem>
                                </div>
                            )}
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export const CountryDropdown = ({ countries }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    textTransform: 'capitalize',
                }}
                variant="btn1"
                startIcon={<LocationOnIcon />}
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
            >
                Country
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {countries?.map((country, i) => {
                    return (
                        <StyledLink key={i}>
                            <StyledMenuItem onClick={handleClose}>{country}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export const SortByNewest = ({ categories }) => {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const [i, setI] = useState(0);
    const newValue = i === 0 ? 1 : 0;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        dispatch(setFilterQuery({ name: categories[i], query: 'SortBy', checked: false }));
    }, [i]);
    return (
        <>
            <Button
                sx={{
                    fontWeight: 600,
                    fontSize: { xs: '0.7rem', md: '1rem' },
                    color: 'black',
                }}
                variant="text"
                endIcon={<ExpandMoreIcon />}
                onClick={handleClick}
            >
                {categories[i]}
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {categories?.map((category, i) => {
                    return (
                        <StyledLink key={i}>
                            <StyledMenuItem
                                onClick={() => {
                                    handleClose(), setI(i);
                                }}
                            >
                                {category}
                            </StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export const UnrealizedPerformanceDropdown = ({ performances }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    textTransform: 'capitalize',

                    fontSize: { xs: '7.4px', sm: '13px' },
                    padding: '.4em .8em',
                }}
                variant="btn1"
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
            >
                Unrealized Performance
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {performances?.map((performance, i) => {
                    return (
                        <StyledLink key={i}>
                            <StyledMenuItem onClick={handleClose}>{performance}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};
export const AssetsDropdown = ({ categories }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    textTransform: 'capitalize',
                    fontSize: '14px',
                }}
                variant="btn1"
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
            >
                All Time
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {categories?.map((category, i) => {
                    return (
                        <StyledLink key={i}>
                            <StyledMenuItem onClick={handleClose}>{category}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

// ===========================
export const AddwalletDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [exchangeData, setExchangeData] = useState([]);
    let storedData = JSON.parse(localStorage.getItem('persistMe'));
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${REACT_APP_BASE_URL}/api/avlExchanges`, {
                    headers: {
                        Authorization: storedData?.user?.token,
                    },
                });
                const result = await response.json();
                setExchangeData(result.data);
                // console.log(result.data, 'result.data for result');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        // }, [storedData]);
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    textTransform: 'capitalize',
                    fontSize: { lg: '14px', xs: '12px', sm: '13px', md: '13px' },
                }}
                variant="btn1"
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
            >
                Add Wallet
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose(null)}
            >
                {Array.isArray(exchangeData) && exchangeData.length > 0 ? (
                    exchangeData.map((exchange, i) => {
                        return (
                            <StyledMenuItem key={i} sx={{ color: 'black' }}>
                                <Box
                                    display="flex"
                                    alignItems={'center'}
                                    gap={'10px'}
                                    onClick={() => {
                                        let path = `/addewallet/${exchange.name}`;
                                        navigate(path, {
                                            state: {
                                                exchangeData: exchange,
                                            },
                                        });
                                    }}
                                >
                                    <img
                                        src={REACT_APP_BASE_URL + exchange.img}
                                        alt={REACT_APP_BASE_URL + exchange.img}
                                        width={'20px'}
                                    />
                                    <Typography>{exchange.name}</Typography>
                                </Box>
                            </StyledMenuItem>
                        );
                    })
                ) : (
                    <StyledMenuItem sx={{ color: 'black' }}>No available exchanges</StyledMenuItem>
                )}
            </StyledMenu>
        </>
    );
};
// Add wallet dialog
export const AddWalletDialog = ({ open, setOpen }) => {
    const [openAdd, setOpenAdd] = useState(false);
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [exchangeData, setExchangeData] = useState([]);
    const [addExchangeData, setAddExchangeData] = useState({});
    const makeToast = useMakeToast();
    let storedData = JSON.parse(localStorage.getItem('persistMe'));

    // fetch exchange data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${REACT_APP_BASE_URL}/api/avlExchanges`, {
                    headers: {
                        Authorization: storedData?.user?.token,
                    },
                });
                const result = await response.json();
                setExchangeData(result.data);
                // console.log(result.data, 'result.data for result');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const handleClose = () => {
        setOpenAdd(false);
        setOpen(false);
        setSearch('');
    };

    // filter for search wallets or exchanges
    useEffect(() => {
        function filterByName() {
            const filterData = exchangeData.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase()),
            );
            if (!filterData || filterData.length === 0) {
                setSearchData(exchangeData);
            } else {
                setSearchData(exchangeData);
            }
            setSearchData(filterData);
        }
        filterByName();
    }, [search, exchangeData]);

    // add Exchnage or Wallet =-=-=--=-=--=--=-=-=-=--=-==-=-=-=
    const [apiKey, setApiKey] = useState('');
    const [apiSecret, setApiSecret] = useState('');
    const [exchangeId, setExchangeId] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (addExchangeData.id) {
            setExchangeId(addExchangeData?.id);
        }
    }, [addExchangeData?.id]);

    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
        setFile(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'text/csv': ['.csv'] },
    });

    const handleSubmit = async () => {
        try {
            const data = new FormData();
            let csvPresence = addExchangeData?.requiredFields?.includes('csv');
            if (csvPresence) {
                if (!file) {
                    return makeToast('Please select file', 'error', 3);
                } else {
                    data.append('exchangeId', exchangeId);
                    data.append('file', file);
                }
            } else {
                console.log(exchangeId, 'id of exchage');

                if (!apiKey || apiKey === '') {
                    return makeToast('Please enter ApiKey', 'error', 3);
                } else if (!apiSecret || apiSecret === '') {
                    return makeToast('Please enter ApiSecret', 'error', 3);
                } else {
                    data.append('exchangeId', exchangeId);
                    data.append('key[ApiKey]', apiKey);
                    data.append('key[ApiSecret]', apiSecret);
                }
            }

            const response = await fetch(
                `${REACT_APP_BASE_URL}/api/user/${csvPresence ? 'addExchangeCsv' : 'addExchange'}`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: storedData?.user?.token,
                    },
                    body: data,
                },
            );

            const result = await response.json();
            if (response.ok) {
                makeToast(result?.message, 'success', 3);
                handleClose();
            } else {
                makeToast(result?.message, 'error', 3);
            }
            console.log('Adding Exchange  =-=-=-:', result);
        } catch (error) {
            makeToast(error.message, 'error', 3);
            console.error('Error Adding Exchange :', error);
        }
    };

    const handleCloseAlternate = () => {
        setOpenAdd(false);
        setOpen(true);
        setAddExchangeData({});
        setFile(null);
        setApiKey('');
        setApiSecret('');
        setExchangeId('');
    };
    return (
        <>
            {open ? (
                <Dialog
                    open={open}
                    // onClose={() => handleClose}
                    BackdropProps={{
                        sx: {
                            bgcolor: 'rgba(255, 255, 255, 0.85)',
                        },
                    }}
                    sx={{
                        '& .MuiDialog-paper': {
                            width: { xs: '300px', sm: '500px', md: '700px' },
                            maxWidth: '100%',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            py: { xs: 2, sm: 3, md: 4 },
                        },
                    }}
                >
                    <Container>
                        <IconButton
                            sx={{ display: 'flex', ml: 'auto' }}
                            onClick={() => handleClose()}
                        >
                            <Close />
                        </IconButton>
                        <Box sx={{ width: { xs: '95%', sm: '80%' }, mx: 'auto' }}>
                            <Box
                                sx={{
                                    fontFamily: 'Gmarket Sans TTF',
                                    fontSize: { xs: '22px', sm: '26px', md: '32px' },
                                    fontWeight: '700',
                                    textAlign: 'center',
                                    color: '#0B7BC3',
                                }}
                            >
                                Add Wallet
                            </Box>
                            <InputBase
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                sx={{
                                    width: '100%',
                                    my: { xs: 1.5, sm: 2.5 },
                                    p: { xs: 0.5, sm: 1 },
                                    borderRadius: '12px',
                                    border: '1px solid #DDF2FF',
                                    alignItems: 'center',
                                    fontSize: { xs: '10px', sm: '11.5px', md: '13px' },
                                    '& ::placeholder': {
                                        color: 'gray',
                                        fontSize: { xs: '8px', sm: '11px', md: '13px' },
                                    },
                                }}
                                placeholder="Search for your integration or paste your public address, HD wallet key, or ENS "
                                startAdornment={
                                    <Search
                                        sx={{
                                            ml: { xs: 0, sm: 1, md: 2 },
                                            fontSize: { xs: '15px', sm: '20px', md: '25px' },
                                        }}
                                    />
                                }
                            />
                            <Grid
                                container
                                spacing={{ xs: 1.5, sm: 2 }}
                                sx={{
                                    maxHeight: { xs: '350px', sm: '400px', md: '500px' },
                                    overflow: 'auto',
                                    my: { xs: 0.5 },
                                }}
                            >
                                {Array.isArray(searchData) && searchData.length > 0 ? (
                                    searchData.map((exchange, i) => {
                                        return (
                                            <Grid item xs={6} sm={4} md={3} key={i}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: { xs: 1, sm: 1.5 },
                                                        border: '1px solid #0B7BC350',
                                                        borderRadius: '12px',
                                                        p: 1,
                                                        height: '100%',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => {
                                                        setAddExchangeData(exchange);
                                                        setOpen(false);
                                                        setOpenAdd(true);
                                                    }}
                                                >
                                                    <img
                                                        src={REACT_APP_BASE_URL + exchange.img}
                                                        alt={exchange.img}
                                                        width={'20px'}
                                                    />
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                xs: '10px',
                                                                sm: '12px',
                                                                md: '14px',
                                                            },
                                                        }}
                                                    >
                                                        {exchange.name}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        );
                                    })
                                ) : (
                                    <Box
                                        sx={{
                                            color: 'black',
                                            textAlign: 'center',
                                            my: { xs: 2, sm: 3, md: 4 },
                                        }}
                                    >
                                        No available exchanges
                                    </Box>
                                )}
                            </Grid>
                        </Box>
                    </Container>
                </Dialog>
            ) : (
                <>
                    <Dialog
                        open={openAdd}
                        BackdropProps={{
                            sx: {
                                bgcolor: 'rgba(255, 255, 255, 0.75)',
                            },
                        }}
                        sx={{
                            '& .MuiDialog-paper': {
                                width: { xs: '300px', sm: '450px' },
                                maxWidth: '100%',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                py: { xs: 2, sm: 3, md: 4 },
                            },
                        }}
                    >
                        <Container>
                            {/* Header */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: { xs: 2, sm: 3 },
                                }}
                            >
                                <IconButton
                                    onClick={() => {
                                        handleCloseAlternate();
                                    }}
                                >
                                    <ArrowBack />
                                </IconButton>
                                {/* Header middle text */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: { xs: 1, sm: 2 },
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        src={REACT_APP_BASE_URL + addExchangeData.img}
                                        alt={addExchangeData.img}
                                        style={{
                                            borderRadius: '10px',
                                            objectFit: 'cover',
                                            width: '30px',
                                        }}
                                    />
                                    <Typography variant="h6" color="black">
                                        Add {addExchangeData.name}
                                    </Typography>
                                </Box>
                                <IconButton
                                    onClick={() => {
                                        handleClose();
                                    }}
                                >
                                    <Close />
                                </IconButton>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: { xs: '95%', sm: '80%' },
                                    mx: 'auto',
                                }}
                            >
                                {!addExchangeData?.requiredFields?.includes('csv') ? (
                                    <Box sx={{ my: { xs: 1, sm: 2, md: 3 } }}>
                                        <InputBase
                                            placeholder="API Key"
                                            variant="outlined"
                                            onChange={(e) => setApiKey(e.target.value)}
                                            value={apiKey}
                                            sx={{
                                                border: '1px solid #0B7BC350',
                                                width: '100%',
                                                borderRadius: '12px',
                                                p: { xs: 0.7, sm: 1 },
                                                my: { xs: 1, sm: 1.5 },
                                            }}
                                        />

                                        <InputBase
                                            placeholder="API Secret"
                                            variant="outlined"
                                            onChange={(e) => setApiSecret(e.target.value)}
                                            value={apiSecret}
                                            sx={{
                                                border: '1px solid #0B7BC350',
                                                width: '100%',
                                                borderRadius: '12px',
                                                p: { xs: 0.7, sm: 1 },
                                                my: { xs: 1, sm: 1.5 },
                                            }}
                                        />
                                    </Box>
                                ) : (
                                    <>
                                        <Box
                                            {...getRootProps()}
                                            sx={{
                                                width: '100%',
                                                cursor: 'pointer',
                                                border: '2px dashed #000',
                                                borderRadius: '5px',
                                                py: 5,
                                                px: 10,
                                                my: { xs: 2, sm: 3 },
                                            }}
                                        >
                                            <input {...getInputProps()} />
                                            {isDragActive ? (
                                                <p>Drop the files here ...</p>
                                            ) : (
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        display: 'flex',
                                                        width: '80px',
                                                        mx: 'auto',
                                                    }}
                                                    src={upload}
                                                    alt=""
                                                />
                                            )}
                                        </Box>
                                    </>
                                )}

                                <Button
                                    variant="btn1"
                                    color="primary"
                                    onClick={() => handleSubmit()}
                                >
                                    Add {addExchangeData.name}
                                </Button>
                            </Box>
                        </Container>
                    </Dialog>
                </>
            )}
        </>
    );
};

export const TxYearsDropdown = ({ years }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    textTransform: 'capitalize',
                }}
                variant="btn1"
                startIcon={<TimelineIcon />}
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
            >
                Tx All Years
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {years?.map((yearslist, i) => {
                    return (
                        <StyledLink key={i}>
                            <StyledMenuItem onClick={handleClose}>{yearslist}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};
// Dashboard Header Menu

export const AccountMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const makeToast = useMakeToast();
    const navigate = useNavigate();

    let storedData = JSON.parse(localStorage.getItem('persistMe'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.removeItem('persistMe');

        dispatch(logout());
        navigate('/');

        makeToast('You have been logged out.');
    };
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {storedData?.user?.name} &nbsp;
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}>
                        {storedData?.user?.name?.split(' ')?.[0]?.[0]}
                        {storedData?.user?.name?.split(' ')?.[1]?.[0]}
                    </Avatar>
                </IconButton>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        // pr: { xs: 1, sm: 3, md: 5 },
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,

                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>{storedData?.user?.email}</MenuItem>
                <Divider />
                <MenuItem
                    onClick={() => {
                        handleClose();
                        navigate('/settings');
                    }}
                >
                    Settings
                </MenuItem>
                <Divider />
                <MenuItem
                    onClick={() => {
                        handleLogout();
                        handleClose();
                    }}
                >
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

// custom Switch
export const CustomizedSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 24,
    alignItems: 'center',
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 16,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 4,
        '&.Mui-checked': {
            transform: 'translateX(17px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#0182FF' : '#0182FF',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 15,
        height: 15,
        borderRadius: 100,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 100,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));
