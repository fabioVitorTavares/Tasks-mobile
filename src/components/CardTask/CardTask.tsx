import { displayFlexCenter } from "../../StyledComponents/StyledComponents";
import styled from "styled-components";
import { Text } from "react-native";

type Props = {
  data: string;
};

export default function CardTask({ data }: Props) {
  const CardTask = styled.View`
    ${displayFlexCenter}
    width: 250px;
    height: 200px;
    border-radius: 15px;
    background-color: #0004;
  `;

  return (
    <CardTask>
      <Text>{data}</Text>
    </CardTask>
  );
}
