import { Box, Heading } from '@chakra-ui/react';

import GradientLayout from '../components/gradientLayout';
import Playlists from '../components/playlists';
import { useMe } from '../lib/hooks';

const User = () => {
  const { user, isLoading } = useMe();

  return (
    <GradientLayout
      gradient={
        'linear(40deg, green.400 0%, green.800 30%, rgba(0,0,0,0.6) 100%)'
      }
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlist`}
      image={`https://picsum.photos/400?random=${user?.id}`}
      isLoading={isLoading}
      roundImage
    >
      <Box color="white" px="40px">
        <Box mb="40px">
          <Heading fontSize="2xl" fontWeight="bold" mb={4}>
            Your Playlists
          </Heading>

          <Playlists id="playlists" ml={4} />
        </Box>
      </Box>
    </GradientLayout>
  );
};

export default User;