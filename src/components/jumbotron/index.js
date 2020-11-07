import React from 'react';

import {
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Jumbotron.Pane = ({ children, ...restProps }) => (
  <Pane {...restProps}>{children}</Pane>
);

Jumbotron.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);

Jumbotron.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);

Jumbotron.Image = ({ ...restProps }) => <Image {...restProps} />;
