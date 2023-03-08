import { css } from '@emotion/react';
import { generalColors } from '../../theme/variable';

export const headerStyle = {
  header: css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '80px',
    marginBottom: '30px',
    padding: '0 40px',
    justifyContent: 'space-between',
    backgroundColor: generalColors.primary,
  }),

  button: css({
    backgroundColor: generalColors.secondary,
    color: generalColors.primary,
  }),
};
