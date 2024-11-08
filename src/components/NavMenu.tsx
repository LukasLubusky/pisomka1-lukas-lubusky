// app\components\NavMenu.tsx

"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import Link from "next/link";

export default function NavMenu() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/" passHref>
            Home
          </Link>
        </MenuItem>
        {session ? (
          <MenuItem onClick={() => { handleClose(); signOut(); }}>
            Sign Out
          </MenuItem>
        ) : (
          <MenuItem onClick={() => { handleClose(); signIn("google"); }}>
            Sign In
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
