import React from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import Item from './item';

const Wrapper = styled.div`
  padding-top: 51px;

  .inner-wrap {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 0;
      flex-grow: 1;
      margin: 20px 0;
    }

    .item + .item {
      margin-left: 20px;
    }
  }
`;
const Experience = () => {
  return (
    <Section>
      <Wrapper className="layout-width first">
        <h1>EDUCATION & WORK EXPERIENCE</h1>
        <div className="inner-wrap">
          <Item title="EDUCATION"></Item>
          <Item title="WORK EXPERIENCE"></Item>
        </div>
      </Wrapper>
      <Wrapper className="layout-width">
        <div className="inner-wrap">
          <Item title="CERTIFICATE"></Item>
          <Item title="SKILL"></Item>
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(Experience);
