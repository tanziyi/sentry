import React from 'react';

import CrumbTable from 'app/components/events/interfaces/breadcrumbs/crumbTable';
import SummaryLine from 'app/components/events/interfaces/breadcrumbs/summaryLine';
import {getMeta} from 'app/components/events/meta/metaProxy';

import getBreadcrumbCustomRendererValue from './getBreadcrumbCustomRendererValue';
import {CrumbTypeDefault, CrumbTypeNavigation} from './types';

type Props = {
  crumb: CrumbTypeDefault | CrumbTypeNavigation;
};

const DefaultRenderer = ({crumb}: Props) => (
  <CrumbTable
    crumb={crumb}
    summary={
      <SummaryLine>
        {crumb?.message && (
          <pre>
            <code>
              {getBreadcrumbCustomRendererValue({
                value: crumb.message,
                meta: getMeta(crumb, 'message'),
              })}
            </code>
          </pre>
        )}
      </SummaryLine>
    }
    kvData={crumb.data}
  />
);

export default DefaultRenderer;
