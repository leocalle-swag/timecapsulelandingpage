import { AppText } from '@/utils/AppConfig';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Il tuo spazio" description={AppText.description_1}>
    <VerticalFeatureRow
      title={AppText.title_1}
      description={AppText.values_1}
      image="/assets/images/feature1.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title={AppText.title_2}
      description={AppText.values_2}
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title={AppText.title_3}
      description={AppText.values_3}
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
