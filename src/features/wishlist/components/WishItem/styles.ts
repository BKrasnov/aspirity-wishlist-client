import { css } from '@emotion/react';
import { colors } from '../../../../theme/variable';

const radius = '15px';

const button = css({
  padding: '8px',
  borderRadius: '5px',
});

export const wishItemStyle = {
  container: css({
    color: colors.secondary,
    maxWidth: '500px',
    minHeight: '200px',
    margin: '0 0 10px 0',
    padding: '10px 15px',
    backgroundColor: colors.primary,
    borderRadius: radius,
    gap: '30px',
    display: 'flex',
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

  image: css({
    width: '200px',
    borderRadius: radius,
  }),

  buttons: css({
    display: 'flex',
    gap: '15px',
  }),

  buttonUpdate: css([
    button,
    {
      backgroundColor: colors.secondary,
      border: 'none',
    },
  ]),

  buttonDelete: css([
    button,
    {
      backgroundColor: colors.tertiary,
      border: 'none',
    },
  ]),
};
