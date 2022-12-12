import React from "react";
import styled from "styled-components";

const BackdropOver = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 1200px;
  max-height: auto;
  z-index: 100;

  opacity: 1;
  h1 {
    font-size: 3em;
    font-weight: 600;
    color: #053651;

    span {
      color: #e63946;
    }
  }

  p {
    text-align: left;
    font-weight: 300;
  }

  button {
    margin: 2rem auto;
    padding: 1rem 2rem;
    width: 15rem;
    height: 4rem;
    border: solid 1px #fe5f55;
    border-radius: 0.5rem;
    background: #fe5f55;
    color: #f7f7ff;
    font-weight: 300;
    font-size: 1.5rem;
    cursor: pointer;
  }

  iframe {
    margin: 3rem auto;
  }
`;

const Modal = ({ onClick }) => {
  //const videoSrc = "https://www.youtube.com/embed/eqhUHyVpAwE";
  return (
    <BackdropOver>
      <h1>
        {" "}
        The <span>Impostor</span> Syndrome
      </h1>
      <br />
      <p>
        The Imposter Syndrome, or Imposter Phenomenon as it is also known, refers to when people
        believe themselves to be intellectual frauds due to an inability to internalise their
        successes. Along with this is a fear of being exposed.
      </p>
      <br />
      <p>
        There are certain transition points in life when we may expect Imposter Syndrome, for
        example: - Starting a new education adventure (e.g. high school, university, postgraduate
        studies). <br />
        Becoming 'qualified' in your field, leading others to treat you as if you are
        'fully-fledged' yet you feel you have only just scratched the surface of the knowledge in
        your field. <br /> Being looked up to due to your years of experience (e.g. relative to
        junior members or people outside of the field) or to your position as an expert (e.g.
        teacher, lecturer, tutor). <br />
        However, there’s also suggestion that Imposter Syndrome is linked to stable personality
        traits such as neuroticism, conscientiousness, negative core self-evaluations across
        situations, and also maladaptive perfectionistic tendencies.
      </p>
      <br />
      <p>
        The “Impostor Phenomenon” was first described by Dr Pauline Clance, from her observations in
        a clinical setting (Clance, 1985). Individuals with the Impostor Phenomenon experience
        intense feelings that their achievements are undeserved and worry that they are likely to be
        exposed as a fraud. This causes distress and maladaptive behaviour (e.g., Clance, 1985;
        Harvey & Katz, 1985; Kolligian & Sternberg, 1991; Sonnak & Towell, 2001).
      </p>

      <iframe
        width="100%"
        height="350"
        src="https://www.youtube.com/embed/eqhUHyVpAwE"
        title="The Impostor Syndrome"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <p>
        Most subsequent research in this area has examined the Impostor Phenomenon as a personality
        trait or disposition, with samples taken from professionals and students (e.g., Sonnak &
        Towell, 2001; Topping, 1983).
        <br /> The term Impostor Phenomenon was originally derived from clinical observation of
        female clients in therapeutic sessions, and most of the preliminary work in this area was
        based on clinical populations. However, most subsequent research was based on a non-clinical
        population with a full range of self-perceived intellectual fraudulence, from absent to
        severe levels. To avoid confusion, it seems more appropriate to reserve the term Impostor
        Phenomenon for the small subgroup of people who experience a clinical level of
        self-perceived intellectual fraudulence. <br />
        <br /> The terms Impostorism and impostor fears (Thompson, Davis, & Davidson, 1998;
        Thompson, Foreman, & Martin, 2000) are used in this article to describe the psychological
        experience of individuals who perceive themselves as intellectual frauds and also fear being
        exposed as impostors. The term Impostor when capitalised in this article refers to a person
        who experiences impostor fears.
      </p>

      <button onClick={onClick}>Close</button>
    </BackdropOver>
  );
};

export default Modal;
