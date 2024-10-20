/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

import { fontSize, fontWeight } from '@mui/system';
import { color } from 'framer-motion';

export default function themeTypography(theme) {
    return {
        fontFamily: `"Londrina Sketch", ${theme?.customization?.fontFamily || 'sans-serif'}`, // Thêm font vào đây
        h6: {
            fontWeight: 500,
            color: theme.heading,
            fontSize: '0.75rem'
        },
        h5: {
            fontSize: '12px',
            color: theme.heading,
            fontWeight: 400
        },
        h4: {
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 600,
        },
        h3: {
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '20px',
        },
        h2: {
            fontSize: '16px',
            color: theme.heading,
            fontStyle: 'normal',
            fontWeight: 600
        },
        h1: {
            fontSize: '18px',
            color: theme.heading,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '14px',
            letterSpacing: '0.28px',
            fontStyle: 'normal',
            fontWeight: 500,
        },
        subtitle2: {
            fontSize: '13px',
            fontWeight: 400,
            fontStyle: 'normal',
            letterSpacing: '0.1px',
        },
        caption: {
            fontSize: '0.75rem',
            color: theme.darkTextSecondary,
            fontWeight: 400
        },
        caption2: {
            fontSize: '16px',
            fontWeight: 400,
            fontStyle: 'normal'
        },
        body1: {
            fontSize: '14px',
            fontWeight: 400,
            fontStyle: 'normal'
        },
        body2: {
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '18px'
        },
        body3: {
            fontSize: '11px',
            fontStyle: 'normal',
            fontWeight: 500,
        },
        button: {
            textTransform: 'capitalize'
        },
        dot: {
            fontSize: '10px',
            color: theme.error500
        },
        title: {
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '28px'
        },
        title2: {
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '32px',
        },
        title3: {
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '20px',
        },
        numberTotal: {
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "38px"
        },
        customInput: {
            '& > label': {
                top: 23,
                left: 0,
                color: theme.grey500,
                '&[data-shrink="false"]': {
                    top: 5
                }
            },
            '& > div > input': {
                padding: '30.5px 14px 11.5px !important'
            },
            '& legend': {
                display: 'none'
            },
            '& fieldset': {
                top: 0
            }
        },
        mainContent: {
            backgroundColor: theme.background,
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '88px',
            marginRight: '20px',
            borderRadius: `${theme?.customization?.borderRadius}px`
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.heading,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px'
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: theme.darkTextSecondary,
            textTransform: 'capitalize'
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px'
        },
        smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem'
        },
        mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem'
        },
        largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem'
        }
    };
}
