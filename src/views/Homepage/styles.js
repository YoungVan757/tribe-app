import styled from '@emotion/styled';

export const Heading = styled.div`
  color: blue;
  font-size: 100px;
  font-weight: bold;
  border: 10px solid blue;
  background-color: white;
  padding-left: 1%;
  padding-right: 1%;
`;

export const SubHeading = styled.div`

  .subheading {
    &__parent {
      border: 3px solid green;
    }

    &__child {
      border: 4px solid purple;
    }
  }
  
`;

export const Or = styled.div`
  color: black;
  font-size: 50px;
  font-weight: bold;
  border: 10px solid ${props => props.color};
  background-color: white;
  padding-left: 1%;
  padding-right: 1%;

  padding-top: ${props => props.padTop}px;

  @media (max-width: 600px) {
    // your media query here...
    background-color: green;
  }
`;
