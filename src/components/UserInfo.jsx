import { makeStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';


function UserInfo() {
  const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff1c3"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff1c3"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff1c3"
      },
      "& .MuiOutlinedInput-input": {
        color: "#fff1c3"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#fff1c3"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#fff1c3"
      },
      "& .MuiInputLabel-outlined": {
        color: "#fff1c3"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "#fff1c3"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#fff1c3"
      },
       "& .MuiInputBase-colorPrimary":{
        color: "#fff1c3"
      },
    }
  });

  const classes = useStyles();

  return(
    <div className="form-container-body">
      <TextField 
        id="outlined-basic" 
        placeholder="Insira seu nome"
        label="Nome" 
        variant="outlined" 
        className={classes.root} 
        fullWidth
        style={{margin: "8px auto"}}
      />
      <TextField 
        id="outlined-basic" 
        placeholder="Insira seu email"
        label="Email" 
        variant="outlined" 
        className={classes.root} 
        fullWidth
        style={{margin: "8px auto"}}
      />
      <TextField 
        id="outlined-basic" 
        placeholder="Endereço"
        label="Endereço" 
        variant="outlined" 
        className={classes.root} 
        fullWidth
        style={{margin: "8px auto"}}
      />
    </div>
  )
}

export default UserInfo;