import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h1 className="mb-4">About CookingTimer</h1>

          <p className="lead">
            CookingTimer is a free web app that helps you cook eggs, pasta, and
            other foods to the perfect doneness with simple countdown timers and
            a stopwatch.
          </p>

          <h2 className="h5 mt-4">What you can do</h2>
          <p>
            Use the <strong>egg timer</strong> for soft-, medium-, or hard-boiled
            eggs with one tap. Choose from <strong>pasta timers</strong> for
            spaghetti, penne, fettuccine, and many more shapes, each with
            options for al dente or well-done. A <strong>general timer</strong>
            lets you set custom times from seconds to hours. The{" "}
            <strong>stopwatch</strong> records elapsed time and lap times for
            multi-step recipes or workouts.
          </p>

          <h2 className="h5 mt-4">Who it’s for</h2>
          <p>
            CookingTimer is for home cooks, students, and anyone who wants
            reliable timers without installing an app. The site works in many
            languages and on phones and desktops, so you can use it in the
            kitchen or on the go.
          </p>

          <h2 className="h5 mt-4">How it works</h2>
          <p>
            Pick a preset (for example, “Soft boiled eggs” or “Spaghetti – al
            dente”) or set the time with the hour, minute, and second controls.
            Start the timer and optionally choose an alarm sound for when time
            is up. You can pause, resume, or stop at any time. No account or
            sign-up is required.
          </p>

          <p className="mt-4 text-secondary small">
            If you have feedback or questions, please use the contact option in
            the Privacy Policy or Terms of Service page.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
