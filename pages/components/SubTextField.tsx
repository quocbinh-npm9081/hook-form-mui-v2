import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import { TextField } from '@mui/material'

const SubTextField: React.FC<{
    name: string,
    defaultValue:string,
}> = ({name, defaultValue}) => {

  const {formState: errors, control} = useFormContext();
  
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field})=>{
        return <TextField {...field} label={name} error={!!errors.errors[name]} helperText={errors?.errors[name]?.message === undefined ? " " : String(errors.errors[name]?.message)}/>
      }}
    />
  )
}

export default React.memo(SubTextField);