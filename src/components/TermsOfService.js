import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TermsOfService = () => {
  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h1 className="mb-4">Terms of Service</h1>
          <p className="text-secondary">Last updated: March 2025</p>

          <h2 className="h5 mt-4">1. Acceptance</h2>
          <p>
            By using CookingTimer (“the site”, “the service”), you agree to
            these Terms of Service. If you do not agree, please do not use the
            site.
          </p>

          <h2 className="h5 mt-4">2. Use of the service</h2>
          <p>
            CookingTimer provides cooking timers and a stopwatch for personal,
            non-commercial use. You may use the site in a lawful manner and in
            accordance with these terms. You may not use the site to harm others
            or to violate any applicable laws.
          </p>

          <h2 className="h5 mt-4">3. No warranty</h2>
          <p>
            The site and its timers are provided “as is”. We do not guarantee
            that the timers are accurate for any particular recipe or cooking
            method. Cooking involves heat and safety risks; you are responsible
            for following safe cooking practices. We are not liable for any
            damage or loss resulting from your use of the site or reliance on
            the timers.
          </p>

          <h2 className="h5 mt-4">4. Third-party content</h2>
          <p>
            The site may display advertisements provided by third parties
            (e.g. Google AdSense). We do not control the content of those ads.
            Your interaction with third-party content is subject to their
            respective terms and policies.
          </p>

          <h2 className="h5 mt-4">5. Changes to the service or terms</h2>
          <p>
            We may change the site or these terms at any time. Continued use of
            the site after changes constitutes acceptance of the updated terms.
            We encourage you to review this page periodically.
          </p>

          <h2 className="h5 mt-4">6. Contact</h2>
          <p>
            For questions about these Terms of Service, please use the contact
            method provided on this website.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfService;
