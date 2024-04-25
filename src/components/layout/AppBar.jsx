import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function MyAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Aplicación
        </Typography>
        {/* Aquí puedes añadir más elementos de la barra de aplicaciones, como botones o iconos */}
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
