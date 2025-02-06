import { Box, Divider, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

const pages = [
  {
    id: 1,
    path: '/',
    text: 'Dashboard'
  },
  {
    id: 2,
    path: '/budget',
    text: 'Budget'
  },
  {
    id: 3,
    path: '/expenses',
    text: 'Expenses',
  },
  {
    id: 4,
    path: '/income',
    text: 'Income',
  },
]
const Layout = () => {
  const drawerWidth = 240;
  return (
    <>
      <Box sx={{ display: 'flex' }} >
        
        <Drawer
          anchor='left'
          variant='permanent'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
          }}
        >
          <Typography variant='h6' sx={{ padding: 3}} color='primary'>
            Chameleon Budget
          </Typography>
          <Divider />
          <Box sx={{ flexGrow: 1 }}>
            <List>
              {pages.map((p) => (
                <ListItem key={p.id} component={Link} to={p.path} button>
                  <ListItemText primary={p.text} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ padding: 2 }}>
            <List>
              <ListItem button>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>

        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, ml: `${drawerWidth}px`, p: 3 }}>
        <Outlet component="main" sx={{flexGrow: 1}}/>
      </Box>
    </>
  )
}

export default Layout;