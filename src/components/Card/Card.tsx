import { FunctionComponent } from 'react';

import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  align-items: center;
`;

const CardBody = styled(Typography)`
  /* text-align: center; */
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  align-items: center;
`;

interface X {
  body: string;
  options: { body: string; onClick: () => void }[];
}

const Card: FunctionComponent<X> = ({ body, options }) => (
  <CardContainer>
    <CardBody>{body}</CardBody>
    <OptionsContainer>
      {options.map((option) => (
        <Button key={option.body} variant="contained" onClick={option.onClick}>
          {option.body}
        </Button>
      ))}
    </OptionsContainer>
  </CardContainer>
);

export default Card;
