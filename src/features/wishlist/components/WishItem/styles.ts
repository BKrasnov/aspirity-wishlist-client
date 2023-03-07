import { css } from '@emotion/react';
import { generalColors } from '../../../../theme/variable';

const radius = '15px';

const button = css({
  padding: '8px',
  borderRadius: '5px',
  cursor: 'pointer',
});

export const wishItemStyle = {
  container: css({
    maxWidth: '500px',
    minHeight: '100px',
    marginBottom: '10px',
    padding: '10px 15px',
    backgroundColor: generalColors.primary,
    borderRadius: radius,
    gap: '15px',
    display: 'flex',
    boxShadow: `0.5px 0.5px 2px ${generalColors.tertiary}`,
    justifyContent: 'space-between',
  }),

  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),

  header: css({
    marginBottom: '10px',
    lineHeight: '110%',
  }),

  price: css({
    color: generalColors.secondary,
  }),

  description: css({
    color: generalColors.tertiary,
  }),

  image: css({
    width: '200px',
    height: '100%',
    borderRadius: radius,
  }),

  priority: css({
    borderRadius: radius,
    height: '10px',
    width: '10px',
    padding: '10px',
  }),

  buttons: css({
    display: 'flex',
    gap: '15px',
  }),

  buttonUpdate: css([
    button,
    {
      backgroundColor: generalColors.secondary,
      color: generalColors.primary,
      border: 'none',
    },
  ]),

  buttonDelete: css([
    button,
    {
      backgroundColor: generalColors.primary,
      color: generalColors.secondary,
      border: `1px solid ${generalColors.secondary}`,
    },
  ]),
};
