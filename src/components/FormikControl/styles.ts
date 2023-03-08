import { css } from '@emotion/react';
import { generalColors } from '../../theme/variable';

const borderCustom = {
  borderBottom: `2px solid ${generalColors.secondary}`,
  transition: '0.1s',
  boxShadow: `0 0.5px 2px ${generalColors.tertiary}`,
};

const fieldBase = {
  boxShadow: `0.5px 0.5px 2px ${generalColors.tertiary}`,
  padding: '10px',
  marginTop: '10px',
  borderRadius: '10px',
};

const field = css([
  fieldBase,
  {
    ':hover': borderCustom,
    ':active': borderCustom,
    ':focus': borderCustom,
  },
]);

export const formikControlStyle = {
  fieldWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }),

  fieldWrapper__input: field,
  fieldWrapper__select: field,

  fieldError: css({
    textAlign: 'left',
    color: generalColors.danger,
    transition: '0.2s',
  }),
};
