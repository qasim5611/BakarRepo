import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleRefresh } from '../api/api';
import { setUserData } from '../redux/slices/userSlice';
import Loading from '../Pages/Loading/loading';

const PersistLogin = () => {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    // const users = useSelector((state) => state?.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const callPersist = async () => {
        const rememberMe = sessionStorage.getItem('persistMe-sf3e');
        console.log('sessionstorage', rememberMe);
        if (rememberMe || users?.accessToken) {
            if (!users?.accessToken) {
                const response = await handleRefresh();
                if (response?.data?.accessToken) {
                    dispatch(
                        setUserData({
                            accessToken: response?.data?.accessToken,
                            id: response?.data.id,
                            email: response?.data?.userEmail,
                            name: response?.data?.username,
                        }),
                    );
                    setLoading(false);
                    setShow(true);
                } else {
                    dispatch(setUserData({}));
                    setLoading(false);

                    navigate('/landing');
                }
            }
        } else {
            dispatch(setUserData({}));
            setLoading(false);

            navigate('/landing');
        }
    };

    useEffect(() => {
        callPersist();
    }, [show]);

    return (
        <>
            <Box>{show || users?.accessToken ? <Outlet /> : <Loading loading={loading} />}</Box>
        </>
    );
};

export default PersistLogin;
