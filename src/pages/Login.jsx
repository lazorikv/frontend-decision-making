import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Button, TextField, Grid, Paper, Typography, Link} from "@mui/material";
import {loginFailure, loginRequest, loginSuccess} from "../features/auth/authSlice.js";
import {userAPI} from "../api/userAPI.jsx";
import {useNavigate} from 'react-router-dom';


export const LoginPage = () => {
    const [user, setUser] = useState({name: "", password: ""});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginRequest());
        userAPI.login(user.name, user.password)
            .then((userData) => {
                dispatch(loginSuccess(userData));
                navigate('/');
            })
            .catch((error) => {
                dispatch(loginFailure(error.toString()));
            })
    };

    return (
        <Grid container component={Paper} style={{height: '80vh'}} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={8} md={5}>
                <Typography component="h1" variant="h4">
                    Войти
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        label="Имя пользователя"
                        onChange={handleChange}
                        style={{margin: "12px 0"}}
                    />
                    <TextField
                        name="password"
                        variant="outlined"
                        required
                        fullWidth
                        type="password"
                        label="Пароль"
                        onChange={handleChange}
                        style={{margin: "12px 0"}}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{margin: "12px 0"}}
                    >
                        Войти
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Если нет аккаунта, зарегистрируйтесь!"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};