import {Box, Paper, Typography, Icon, Divider} from '@mui/material';

interface IBaseLayoutProps {
    children: React.ReactNode;
}
  
export const PaperLayout: React.FC<IBaseLayoutProps> = ({children}) => {
  return (
    <Box 
      display="flex" 
      flexWrap= 'wrap'
      textAlign="center"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        padding: {xs: '3vh', sm: '5vh'}
      }}>
      <Paper elevation={3} sx={{width: '100%', height: '100%'}} >
        <Box sx={{margin: {xs: '2vh 0 0 2vh', sm: '5vh 0 0 5vh'}}} display='flex' alignItems='center'>
          <Icon>home_icon</Icon>
          <Typography textAlign='initial' variant='h5' fontWeight='600'> Dashboard</Typography>
        </Box>
        <Divider sx={{borderBottomWidth: 2}} variant='middle' />
      </Paper>

      {children}
    </Box>

  );
};
