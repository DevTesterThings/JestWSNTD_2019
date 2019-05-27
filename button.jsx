import React from 'react';

export default ({ onClick, isDisabled, className }) => (
  <button
    className={className}
    disabled={isDisabled}
    onClick={() => !isDisabled && onClick && onClick()}
  />
);
