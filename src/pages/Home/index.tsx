import styled from '@emotion/styled';
import Welcome from '@/components/feature/home/Welcome';
import ChallengeIntro from '@/components/feature/home/Challenge';
import FavoriteIntro from '@/components/feature/home/Favorite';
import StoryIntro from '@/components/feature/home/Story';
import Footer from '@/components/feature/home/Footer';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuth } from '@/provider/Auth';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const Homepage = () => {
  const { isLogin, setLogin } = useAuth();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code && !isLogin) {
      axios
        .get(`${VITE_BASE_URL}/api/auth/login/oauth/kakao`, {
          params: { code: code },
        })
        .then((response) => {
          localStorage.setItem(
            'jwt_token',
            JSON.stringify(response.data.token),
          );
          setLogin(true);
        })
        .catch((error) => {
          console.error('로그인 실패:', error);
        });
    }
  }, [isLogin, setLogin]);

  return (
    <Wrapper>
      <Welcome />
      <StoryIntro />
      <ChallengeIntro />
      <FavoriteIntro />
      <Footer />
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;
