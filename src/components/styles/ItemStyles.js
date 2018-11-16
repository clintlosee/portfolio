import styled from 'styled-components';

const Item = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  span {
    font-size: 1.3rem;
    font-weight: 600;
    padding: 0 3rem;
    margin-bottom: 1rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightgrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.lightgrey};
    & > *,
    a {
      border: 0;
      font-size: 1.2rem;
      padding: 1.5rem 12rem;
      cursor: pointer;
      @media (max-width: 770px) {
        padding: 1.5rem 7rem;
        background: #efefef;
      }
    }
  }
`;

export default Item;
