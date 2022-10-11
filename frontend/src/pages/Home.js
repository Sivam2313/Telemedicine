import * as React from 'react';
import Box from '@mui/material/Box';
import Main from '../components/Main';
import Login from '../components/Login';

const Home = () => {
      const [isMain, setIsMain] = React.useState(true);
  return (
    <Box>
      {(isMain)?<Main setisMain={setIsMain}/>:<Login setismain={setIsMain}/>}
    </Box>
  )
}

export default Home;