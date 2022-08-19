import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import AddTasks from "./mde/AddTasks";

import {useState, useEffect} from 'react'
import axios from 'axios'
const style = {
  position: 'absolute',
  color: 'black',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "95vw",
  height: '100vh',
  // bgcolor: '#39445a',
  bgcolor: '#fff',
  borderTop: '10px solid #08c',
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({children, id_group}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(id_group)

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <button className="button-closeModal" onClick={handleClose}>X</button>
            <AddTasks id_group={id_group} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}