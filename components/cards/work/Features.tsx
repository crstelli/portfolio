import { Feature } from "./Feature";
import { FeaturesContainer } from "./FeaturesContainer";

interface Props {
  features: string[];
}

function Features({ features }: Props) {
  return (
    <FeaturesContainer>
      {features.map((f) => (
        <Feature key={f}>{f}</Feature>
      ))}
    </FeaturesContainer>
  );
}

export { Features };
