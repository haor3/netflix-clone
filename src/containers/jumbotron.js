import React from 'react';
import _ from 'lodash';

import { Jumbotron } from 'components';

import { faqs, jumbos } from 'fixtures';

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {_.map(jumbos, (jumbo) => {
        return (
          <Jumbotron key={jumbo.id} direction={jumbo.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={jumbo.image} alt={jumbo.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
}
