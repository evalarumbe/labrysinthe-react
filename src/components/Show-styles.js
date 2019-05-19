import { css } from 'styled-components';

const ShowStyles = css`
  font-family: ${({ theme }) => theme.type.secondary.fontFamily};
`;

const HostStyles = css`
  font-size: ${({ theme }) => theme.type.small.fontSize};
  font-family: ${({ theme }) => theme.type.secondary.fontFamily};
  font-weight: ${({ theme }) => theme.type.secondary.fontWeight};
  line-height: ${({ theme }) => theme.type.secondary.lineHeight};
  margin-bottom: ${({ theme }) => theme.space.half};
`;

const WhenStyles = css`
  font-size: ${({ theme }) => theme.type.large.fontSize};
  margin-top: ${({ theme }) => theme.space.half};
  margin-bottom: ${({ theme }) => theme.space.quarter};

  * {
    display: inline-block;
  }
`;

const WhereStyles = css`
  font-size: ${({ theme }) => theme.type.small.fontSize};
  font-family: ${({ theme }) => theme.type.secondary.fontFamily};
  font-weight: ${({ theme }) => theme.type.secondary.fontWeight};
  line-height: ${({ theme }) => theme.type.secondary.lineHeight};
  padding-bottom: ${({ theme }) => theme.space.half};
  margin-bottom: ${({ theme }) => theme.space.quarter};
`;

const CtaListStyles = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const LiStyles = css`
  text-align: center;
  display: inline-block;
  width: 50%;

  &:only-of-type {
    width: 100%;
  }

  &:first-of-type:not(:only-of-type) {
    button {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &:last-of-type:not(:only-of-type) {
    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

const CtaStyles = css`
  width: 100%;
  height: 100%;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export { ShowStyles, HostStyles, WhenStyles, WhereStyles, CtaListStyles, LiStyles, CtaStyles };
