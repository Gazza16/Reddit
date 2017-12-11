import React, { Component } from 'react';
import { 
  Media,
  Image,
  Content
} from 'reactbulma'

const Post = (props) => (


<Media>
  <Media.Left>
    <Image is='64x64' src='https://appsftw.com/im/is2.mzstatic.com/image/thumb/Purple111/v4/02/13/42/021342aa-8ab5-a37a-4bd7-b4dc23e6ede6/source/512x512bb.jpg' />
  </Media.Left>
  <Media.Content>
    <Content>
      <p>
        <strong>{props.title}</strong> <small>{props.author}</small> <small>31m</small>
        <br/>
        Um actually, The godfather isn't the greatest movie of all time.
      </p>
    </Content>
  </Media.Content>
</Media>

)

export default Post;