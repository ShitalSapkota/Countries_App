import { Favorite, Lock } from "@mui/icons-material";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle"

export const Navigation = () => {
  const { user, signOut } = useAuth();

  return (
    <AppBar position="static" sx={{ mb: 3, display: "flex" }}>
      <Toolbar>
      <Button 
        variant="text" 
        color="inherit" 
        component={RouterLink} 
        to="/" 
        sx={{ 
          flexGrow: 1,
          typography: 'h6' // Applies h6 text styles directly
        }}
      >
        Countries App
      </Button>
        <Toolbar sx={{marginLeft: 40}}>
          <Button color="inherit" component={RouterLink} to="/test">
            Test
          </Button>
          <Button color="inherit" component={RouterLink} to="/countries">
            Countries
          </Button>
          {user && (
            <Button
              color="inherit"
              component={RouterLink}
              to="/favorites"
              startIcon={<Favorite />}
            >
              Favorites
            </Button>
          )}
          <Button
            color="inherit"
            component={RouterLink}
            to="/protected"
            startIcon={<Lock />}
          >
            Protected Data
          </Button>
          {user ? (
            <Button color="inherit" onClick={signOut}>
              Logout ({user.email})
            </Button>
          ) : (
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
          <ThemeToggle />
        
      </Toolbar>
    </AppBar>
  );
};
