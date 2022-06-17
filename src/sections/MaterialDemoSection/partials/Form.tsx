import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Component = () => {
  const [menu1, setMenu1] = useState('');
  const [menu2, setMenu2] = useState('');

  const handleMenu1Change = (event: SelectChangeEvent) => {
    setMenu1(event.target.value as string);
  };

  const handleMenu2Change = (event: SelectChangeEvent) => {
    setMenu2(event.target.value as string);
  };

  return (
    <>
      <Typography variant="h2" gutterBottom mt={4}>
        Form Elements
      </Typography>

      <Grid container>
        <Grid item md>
          <Typography variant="h3" gutterBottom>
            Checkboxes
          </Typography>

          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          </FormGroup>
        </Grid>

        <Grid item md>
          <Typography variant="h3" gutterBottom>
            Radio Buttons
          </Typography>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Label</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item md>
          <Typography variant="h3" gutterBottom>
            Select Menus
          </Typography>
          <FormControl
            fullWidth
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          >
            <InputLabel id="select-normal-label">Select (Normal)</InputLabel>
            <Select
              labelId="select-normal-label"
              id="select-normal"
              value={menu1}
              label="Select (Normal)"
              onChange={handleMenu1Change}
            >
              <MenuItem value={1}>Value 1</MenuItem>
              <MenuItem value={2}>Value 2</MenuItem>
              <MenuItem value={3}>Value 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            size="small"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          >
            <InputLabel id="select-small-label">Select (Small)</InputLabel>
            <Select
              labelId="select-small-label"
              id="select-small"
              value={menu2}
              label="Select (Small)"
              onChange={handleMenu2Change}
            >
              <MenuItem value={1}>Value 1</MenuItem>
              <MenuItem value={2}>Value 2</MenuItem>
              <MenuItem value={3}>Value 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>

      <Divider sx={{ marginTop: '2em', marginBottom: '2em' }} />

      <Grid container mb={6}>
        <Grid item md>
          <Typography variant="h3" gutterBottom>
            Input Fields (Normal)
          </Typography>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
          </Box>
        </Grid>

        <Grid item md>
          <Typography variant="h3" gutterBottom>
            Input Fields (Small)
          </Typography>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic-sm" label="Outlined" variant="outlined" size="small" />
            <TextField id="filled-basic-sm" label="Filled" variant="filled" />
            <TextField id="standard-basic-sm" label="Standard" variant="standard" size="small" />
          </Box>
        </Grid>

        <Grid item md>
          <Typography variant="h3" gutterBottom>
            Other Inputs
          </Typography>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-search"
              label="Search"
              type="search"
            />
            <TextField
              id="outlined-helperText"
              label="Helper text field"
              helperText="Some important text"
            />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ marginTop: '2em', marginBottom: '2em' }} />

    </>
  );
};

export default Component;
