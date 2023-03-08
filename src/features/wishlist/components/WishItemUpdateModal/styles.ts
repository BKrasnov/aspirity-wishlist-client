import { css } from '@emotion/react';
import { generalColors } from '../../../../theme/variable';

export const modalStyle = {
  modal: css({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    minHeight: '80%',
    minWidth: '800px',
    backgroundColor: 'white',
    padding: '20px 70px',
    boxShadow: `0.5px 0.5px 2px ${generalColors.tertiary}`,
  }),

  h2: css({
    textAlign: 'center',
    color: generalColors.secondary,
  }),
};
