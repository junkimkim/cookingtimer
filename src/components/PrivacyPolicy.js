import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PrivacyPolicy = () => {
  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h1 className="mb-4">Privacy Policy</h1>
          <p className="text-secondary">Last updated: March 2025</p>

          <h2 className="h5 mt-4">1. Introduction</h2>
          <p>
            CookingTimer (“we”, “our”, or “this site”) respects your privacy.
            This policy describes what information we collect and how it is used
            when you use our website.
          </p>

          <h2 className="h5 mt-4">2. Information we collect</h2>
          <p>
            This site is a client-side web application. Timer and stopwatch
            data (e.g. the time you set) is processed only in your browser and
            is not sent to our servers. We do not collect personal information
            such as your name, email, or address through this application.
          </p>

          <h2 className="h5 mt-4">3. Third-party services</h2>
          <p>
            We use <strong>Google AdSense</strong> to show advertisements.
            Google may collect information (including cookies and similar
            technologies) as described in Google’s Privacy Policy and AdSense
            program policies. You can control ad personalization in your Google
            account settings. We do not control the data Google collects. For
            more information, see{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </p>

          <h2 className="h5 mt-4">4. Cookies</h2>
          <p>
            AdSense and other third-party services may use cookies or similar
            technologies. You can manage or block cookies in your browser
            settings. Blocking cookies may affect how ads are shown and how some
            features work.
          </p>

          <h2 className="h5 mt-4">5. Data we do not sell</h2>
          <p>
            We do not sell your personal information. Any data processed by
            third parties (such as Google) is governed by their respective
            policies.
          </p>

          <h2 className="h5 mt-4">6. Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last
            updated” date at the top will be revised when changes are made. We
            encourage you to review this page periodically.
          </p>

          <h2 className="h5 mt-4">7. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you can contact us
            through the contact method provided on this website (e.g. contact
            form or email, if available).
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
