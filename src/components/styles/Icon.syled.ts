import styled from 'styled-components';

type IconProps = {
  icon: string;
};

export const Icon = styled.div<IconProps>`
  width: 32px;
  height: 32px;

  background: url(${({ icon }) => icon}) no-repeat center / contain;
`;
