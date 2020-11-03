import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';
import streamThumbnail1 from '../../images/stream_thumbnail1.jpg';
import streamThumbnail2 from '../../images/stream_thumbnail2.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const list = [
  {
    id: 1,
    image: streamThumbnail,
    userName: 'DokMax',
    description: 'Front-end com Next.js, Chakra UI e GraphQL',
    category: 'Science & Technology',
    tag1: 'Portuguese',
    tag2: 'Web Development'
  },
  {
    id: 2,
    image: streamThumbnail1,
    userName: 'Hackudo_black',
    description: 'Engenharia reversa & Buffer Overflow',
    category: 'Hacking & Technology',
    tag1: 'Portuguese',
    tag2: 'Hacker'
  },
  {
    id: 3,
    image: streamThumbnail2,
    userName: 'Game_Doido',
    description: 'Overwatch, CS GO, Fifa, Naruto',
    category: 'Jogos e dirversão',
    tag1: 'Portuguese',
    tag2: 'Games'
  }
]

const StreamList: React.FC = () => {

  return (
    <List>
      {list.map((item) => (
        <StreamContainer key={item.id}>
        <StreamThumbnail source={item.image} />
  
        <StreamRow>
          <StreamColumn>
            <StreamHeader>
              <StreamAvatar />
              <StreamUsername numberOfLines={1}>{item.userName}</StreamUsername>
            </StreamHeader>
  
            <StreamDescription numberOfLines={1}>
              {item.description}
            </StreamDescription>
  
            <StreamCategory numberOfLines={1}>
              {item.category}
            </StreamCategory>
          </StreamColumn>
  
          <TagRow>
            <TagView>
              <TagText>{item.tag1}</TagText>
            </TagView>
            <TagView>
              <TagText>{item.tag2}</TagText>
            </TagView>
          </TagRow>
        </StreamRow>
      </StreamContainer>
      ))}
    </List>
  );
};

export default StreamList;