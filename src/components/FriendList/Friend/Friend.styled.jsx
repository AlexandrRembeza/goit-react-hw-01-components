import styled from '@emotion/styled';

export const FriendItem = styled.li`
  width: 400px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 20px;
  padding: 10px 20px;

  background-color: #fff;
  color: rgb(74, 67, 67);

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

  transition: all 150ms ease-out;

  :first-of-type {
    margin-top: 0;
  }

  :hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

    cursor: pointer;
  }
`;

export const Status = styled.span`
  display: inline-block;

  width: 20px;
  height: 20px;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};

  border-radius: 50%;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  width: 48px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;

  letter-spacing: 3px;
`;
