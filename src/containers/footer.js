import React from 'react';

import { Footer } from 'components';

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link to="/faq">FAQ</Footer.Link>
          <Footer.Link to="#">Investor Relations</Footer.Link>
          <Footer.Link to="#">Ways to Watch</Footer.Link>
          <Footer.Link to="#">Corporate Information</Footer.Link>
          <Footer.Link to="#">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link to="#">Help Centre</Footer.Link>
          <Footer.Link to="#">Jobs</Footer.Link>
          <Footer.Link to="#">Terms of Use</Footer.Link>
          <Footer.Link to="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link to="#">Account</Footer.Link>
          <Footer.Link to="#">Redeem gift cards</Footer.Link>
          <Footer.Link to="#">Privacy</Footer.Link>
          <Footer.Link to="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link to="#">Media Centre</Footer.Link>
          <Footer.Link to="#">Buy gift cards</Footer.Link>
          <Footer.Link to="#">Cookie Preferences</Footer.Link>
          <Footer.Link to="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Toronto, ON</Footer.Text>
    </Footer>
  );
}
