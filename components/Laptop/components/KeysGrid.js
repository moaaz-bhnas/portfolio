import { memo } from "react";
import styled from "styled-components";
import { keyStyles } from "../style";
import { Key } from "./Keyboard";

const rows = 5;
const columns = [12, 12, 11, 12, 7];

const KeysGrid = ({ keyboardWidth }) => {
  return (
    <StyledKeysGrid>
      {Array(rows)
        .fill(null)
        .map((e, rowIndex) => (
          <Row keyboardWidth={keyboardWidth} key={rowIndex}>
            {Array(columns[rowIndex])
              .fill(null)
              .map((e, columnIndex) => (
                <Column
                  key={columnIndex}
                  className={
                    rowIndex === 2 && columnIndex === 10
                      ? "enter"
                      : rowIndex === 4 && columnIndex === 3
                      ? "space"
                      : null
                  }
                />
              ))}
          </Row>
        ))}
    </StyledKeysGrid>
  );
};

const StyledKeysGrid = styled.div`
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-basis: ${({ keyboardWidth }) => `${keyboardWidth * 0.065}em`};
  width: ${({ keyboardWidth }) => `${keyboardWidth * 0.8}em`};
`;

const Column = styled.div`
  ${keyStyles}
  flex-grow: 1;

  &.enter {
    flex-grow: 2;
  }

  &.space {
    flex-grow: 6;
  }
`;

export default memo(KeysGrid);
