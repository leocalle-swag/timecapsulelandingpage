import Link from 'next/link';

import { AppText } from '@/utils/AppConfig';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://archiviodiflusso.netlify.app/">Instagram</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {AppText.slogan}
            <span className="text-primary-500"> {AppText.site_name}</span>
          </>
        }
        description={AppText.subsblogan}
        button={
          <Link href="#banner">
            <Button xl>Unisciti alla lista d&#39;attesa</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
