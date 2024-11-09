import styled from '@emotion/styled';
import { Flex, Box, Heading } from '@chakra-ui/react';

type NavbarProps = {
  setFilterType: (
    filterType: 'RECRUITING' | 'IN_PROGRESS' | 'COMPLETED' | 'UPCOMING' | 'ALL',
  ) => void;
};

const Navbar = ({ setFilterType }: NavbarProps) => {
  return (
    <Flex direction="column" alignItems="center" mt={5}>
      <Heading as="h1" fontSize="60px" mb={4}>
        Challenge
      </Heading>
      <Box display="flex" justifyContent="center" alignItems="center">
        <StyledButton onClick={() => setFilterType('UPCOMING')}>
          {' '}
          모집 예정 챌린지
        </StyledButton>
        <StyledButton onClick={() => setFilterType('RECRUITING')}>
          모집중인 챌린지
        </StyledButton>
        <StyledButton onClick={() => setFilterType('IN_PROGRESS')}>
          진행중인 챌린지
        </StyledButton>
      </Box>
    </Flex>
  );
};

export default Navbar;

const StyledButton = styled.button`
  background-color: none;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: bold;
  margin: 0 40px 0 40px;
  cursor: pointer;
  &:focus {
      color: orange;
      text-decoration: underline;
      text-underline-offset: 10px;
`;