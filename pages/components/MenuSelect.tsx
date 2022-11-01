import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Controller, useFormContext} from 'react-hook-form';

const MenuSelet: React.FC<{name:string}>=({name})=> {

  const {control} = useFormContext();

  return (
    <Box sx={{ minWidth: 120 }}>
        <Controller 
            name={name}
            control={control}
            defaultValue="show-all"
            render={({field})=>{
              return(
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Show</InputLabel>
                    <Select       
                        {...field}                            
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                    <MenuItem value='show-all'>All</MenuItem>
                    <MenuItem value='show-email'>Email</MenuItem>
                    <MenuItem value='show-password'>Password</MenuItem>
                    </Select>
              </FormControl>
              )                
            }}
        />

    </Box>
  );
}

export default React.memo(MenuSelet);