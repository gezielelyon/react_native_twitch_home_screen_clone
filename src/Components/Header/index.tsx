import React from 'react';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';

import colors from '../../styles/colors';

import { Container, AvatarView, OnlineStatus, RightSide, Button } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <AvatarView>
          <OnlineStatus />
      </AvatarView>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;