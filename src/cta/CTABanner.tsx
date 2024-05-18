import type { ReactNode } from 'react';

import ExternalScript from '../templates/ExternalScript';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div
    id="banner"
    className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left"
  >
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>
    <div id="smsh-pbform-7FbaeyoMRdX9NYlbafgS9h3ToZ5gbzAhmgPxX9aMLBmbISDOOBi6f4Xe1c1J0SNQ"></div>
    <ExternalScript />
    {/* <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      {props.button}
</div> */}
  </div>
);

export { CTABanner };
