import styled from 'styled-components';
import { tagColorsSchema } from '../../schemas/tagColorsSchema';

export const Container = styled.div`
  padding: 2px 12px;
  margin: 0 6px 6px 0;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) =>
    tagColorsSchema[props?.tag]?.background || '#fff'};
  color: ${(props) => tagColorsSchema[props?.tag]?.color || '#fff'};
  display: flex;
  align-items: center;
  position: relative;
  transition: 100ms ease-in-out;
  box-shadow: ${(props) =>
    props.isFocused ? '0 0 0 0.25rem rgb(13, 110, 253, 0.35)' : ''};
`;

export const RemoveTag = styled.div`
  padding: 0 4px;
  border-radius: 50%;
  position: relative;
  left: 8px;
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) =>
      tagColorsSchema[props?.tag]?.background || '#fff'};
    filter: brightness(0.8);
  }
`;

export const RemoveTask = styled.div`
  position: relative;
  left: 6px;
  width: 26px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #f44336;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #ffcdd2;

  & > svg {
    color: #f44336;
  }

  &:hover {
    & > svg {
      filter: brightness(0.8);
    }
  }
`;
