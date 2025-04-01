import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

export default function HomeMenu() {
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
          <Avatar src={'https://media.istockphoto.com/id/1223143393/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5%E0%B8%AD%E0%B8%B4%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B8%97%E0%B8%A3%E0%B8%AD%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%8C%E0%B8%8A%E0%B8%B4%E0%B8%9B%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%8A%E0%B8%B4%E0%B8%9B%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%A7%E0%B8%A5%E0%B8%9C%E0%B8%A5-%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A-cpu.jpg?s=612x612&w=0&k=20&c=D1YJH0BSLWBSlgJoEVQmZX9AwYcy2JKrN2I__kxTaK8='} sx={{ width: 200, height: 200, mx: 'auto' }}></Avatar>
          <Typography variant='h5' sx={{ textAlign: 'center', mt: 2 }}>IoT Calculate by Thanawat SAU</Typography>
          <Link to={'/n'}>
            <Button fullWidth variant='contained' sx={{ mt: 2, backgroundColor: '#42a5f5' }} >
              <Typography>Go To Calculate Number</Typography>
            </Button>
          </Link>
          <Button component={Link} to={'/m'} fullWidth variant='contained' sx={{ mt: 2 }} >
            <Typography>Go To Calculate Number</Typography>
          </Button>
        </Box>
      </Box>
    </>
  )
}