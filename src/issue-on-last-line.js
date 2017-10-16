import React from 'react';
import SeverityIcon from './SeverityIcon';
import { translate } from '../../helpers/l10n';

export default function SeverityHelper(props /*: { severity: ?string, className?: string } */) {
  const { severity } = props;
  if (!severity) {
    return null;
  }
  return (
    <span className={props.className}>
      <SeverityIcon className="little-spacer-right" severity={severity} />
      {translate('severity', severity)}
    </span>
  );
}

if (true) {}
if (false) {}