import {useState} from "react";
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
                navigate('/'); // TODO: remove after implement auth on BE
            })
    };

    return (
        <Grid container component={Paper} style={{height: '80vh'}} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={8} md={5}>
                <Typography component="h1" variant="h4">
                    Log in
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="name"
                        variant="outlined"
                        required
                        fullWidth
                        label="Username"
                        onChange={handleChange}
                        style={{margin: "12px 0"}}
                    />
                    <TextField
                        name="password"
                        variant="outlined"
                        required
                        fullWidth
                        type="password"
                        label="Password"
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
                        Log in
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"You don't have an account? Sign up!"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};