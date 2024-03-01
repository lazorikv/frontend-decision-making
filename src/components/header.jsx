import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const AppHeader = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        navigate("/login")
    };

    return (
        <AppBar>
            <Toolbar variant="dense" style={{height: "60px", backgroundColor: "#89CFEF"}}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Box flexGrow={1} />
                <Link to="/users" >Users</Link>
                <Button color="inherit" onClick={handleLogout}>Log out</Button>
            </Toolbar>
        </AppBar>
    );
};