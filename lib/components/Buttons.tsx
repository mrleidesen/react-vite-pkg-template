import type { ReactNode } from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: royalblue;
  color: white;
  border-radius: 5px;
`;

export function PrimaryButton({ children }: { children?: ReactNode }) {
  return <StyledButton>{children}</StyledButton>;
}
