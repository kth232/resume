import React, { useState, useCallback } from 'react';
import { Section } from 'react-fullpage';
import styled from 'styled-components';
import Image from 'next/image';
import classNames from 'classnames';

const Tab1Content = () => {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="portfolio img"
      ></Image>
      <div>content</div>
      <a href="#" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
}; //컴포넌트형

const Tab2Content = () => {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="portfolio img"
      ></Image>
      <div>content</div>
      <a href="#" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
}; //컴포넌트형

const Tab3Content = () => {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="portfolio img"
      ></Image>
      <div>content</div>
      <a href="#" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
}; //컴포넌트형

const items = {
  tab1: {
    title: 'title1',
    Content: Tab1Content,
  },
  tab2: {
    title: 'title2',
    Content: Tab2Content,
  },
  tab3: {
    title: 'title3',
    Content: Tab3Content,
  },
};

const Portfolio = () => {
  const [item, setItem] = useState(items.tab1);
  const [tab, setTab] = useState('tab1');

  const onClick = useCallback((tab) => {
    setItem(items[tab]);
    setTab(tab);
  }, []);

  const { title, Content } = item;

  return (
    <Section>
      <Wrapper className="layout-width">
        <h1>PORTFOLIO</h1>
        <ul className="tab-group">
          <li
            onClick={() => onClick('tab1')}
            className={classNames({ on: tab === 'tab1' })}
          >
            POKEBOOK
          </li>
          <li
            onClick={() => onClick('tab2')}
            className={classNames({ on: tab === 'tab2' })}
          >
            JOYFARM
          </li>
          <li
            onClick={() => onClick('tab3')}
            className={classNames({ on: tab === 'tab3' })}
          >
            NONNULL
          </li>
        </ul>
        <div className="tab-content">
          <div class="title">{title}</div>
          <Content />
        </div>
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  padding-top: 100px;

  .tab-group {
    display: flex;
    height: 45px;
    border-bottom: 2px solid #4c4c4c;

    li {
      padding: 0 25px;
      cursor: pointer;
      border: 1px solid #4c4c4c;
      border-bottom: 0;
      margin-right: 5px;
      line-height: 43px;
      font-size: 1.4rem;
    }

    li.on {
      background: #4c4c4c;
      color: #fff;
    }
  }

  .tab-content {
    padding: 20px;
  }
`;

export default React.memo(Portfolio);
