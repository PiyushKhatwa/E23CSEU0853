import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar({ setPage }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Campus Notifications
        </Typography>

        <Button color="inherit" onClick={() => setPage("home")}>
          All Notifications
        </Button>

        <Button color="inherit" onClick={() => setPage("priority")}>
          Priority Inbox
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;