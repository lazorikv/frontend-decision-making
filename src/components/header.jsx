import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
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
                <IconButton edge="start" color="inherit" aria-label="menu" style={{ outline: "none" }}>
                  <Link to="/" style={{ outline: "none" }}>
                    <img src="/logo.png" alt="logo" style={{ width: "50px" }} />
                  </Link>
                </IconButton>
                <Box flexGrow={1} />
                <Link to="/users" style={{ marginRight: "40px" }}>Users</Link>
                <Link to="/login" color="inherit" onClick={handleLogout} style={{ marginRight: "40px" }}>Log out</Link>
            </Toolbar>
        </AppBar>
    );
};