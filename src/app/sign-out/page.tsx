// app\src\sign-out\page.tsx

"use client"; // Keep this directive

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Sign Out
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </>
  );
}