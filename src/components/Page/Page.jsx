import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPage = styled.div`
  box-sizing: border-box;
  width: 1080px;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;
`;

const Layout = styled.div`
  display: grid;
  grid-row-gap: 2rem;
`;

const Header = styled.section``;

const Body = styled.section``;

export default function Page({ className, header, children }) {
  return (
    <StyledPage>
      <Layout className={className}>
        <Header data-testid="header">{header}</Header>
        <Body data-testid="body">{children}</Body>
      </Layout>
    </StyledPage>
  );
}

Page.defaultProps = {
  className: '',
};

Page.propTypes = {
  className: PropTypes.string,
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
