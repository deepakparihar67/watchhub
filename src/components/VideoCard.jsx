import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants';

const VideoCard = ({video:{ id:{videoId },snippet}}) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '260px', md:'260px' }, backgroundColor:'#131927',boxShadow:'none' }} >
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
          <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
            sx={{ width: { xs: '100%', sm: '260px',md:'260px'}, height: 145,borderRadius: '20px' }} 
          /> 
        </Link>
        <CardContent sx={{backgroundColor:'#131927', hight:"90px"}}>
        <Link to={videoId?`/video/${videoId}`: demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard;