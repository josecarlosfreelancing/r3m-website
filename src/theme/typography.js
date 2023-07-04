function pxToRem(value) {
    return `${value / 16}rem`;
}
    
function responsiveFontSizes({ sm, md, lg, xl }) {
    return {
        "@media (min-width:992px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:1728px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:1920px)": {
            fontSize: pxToRem(lg),
        },
        "@media (min-width:2880px)": {
            fontSize: pxToRem(xl),
        },
    };
}

const typography = {
    
    fontFamily: 'SF UI Display',
    // fontWeightRegular: 400,
    // fontWeightMedium: 600,
    // fontWeightBold: 700,
    h1: {
        fontSize: pxToRem(56),
        fontFamily: 'SF Pro Display',
        ...responsiveFontSizes({ sm: 105, md: 160, lg: 160, xl: 160 }),
    },
    h2: {
        fontSize: pxToRem(56),
        fontFamily: 'SF Pro Display',
        fontWeight: 500,
        ...responsiveFontSizes({ sm: 105, md: 120, lg: 120, xl: 120 }),
    },
    h3: {
        fontSize: pxToRem(36),
        fontFamily: 'SF Pro Display',
        fontWeight: 600,
        ...responsiveFontSizes({ sm: 64, md: 64, lg: 64, xl: 64 }),
    },
    h4: {
        fontSize: pxToRem(36),
        ...responsiveFontSizes({ sm: 48, md: 48, lg: 48, xl: 48 }),
    },
    h5: {
        fontSize: pxToRem(16),
        fontFamily: 'Inter-Bold',
        ...responsiveFontSizes({ sm: 16, md: 17, lg: 18, xl: 20 }),
    },
    h6: {
        fontSize: pxToRem(14),
        ...responsiveFontSizes({ sm: 14, md: 16, lg: 17, xl: 18 }),
    },
    subtitle1: {
        fontSize: pxToRem(24),
        fontFamily: 'SF UI Display',
        fontWeight: 500,
        ...responsiveFontSizes({ sm: 36, md: 36, lg: 36, xl: 36 })
    },
    subtitle2: {
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 32, md: 32, lg: 32, xl: 32 })
    },
    body1: {
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 18, md: 18, lg: 18, xl: 18 })
    },
    body2: {
        fontSize: pxToRem(18),
        fontFamily: 'SF UI Display',
        ...responsiveFontSizes({ sm: 24, md: 24, lg: 24, xl: 24 })
    },
    caption: {
        fontSize: pxToRem(10),
        ...responsiveFontSizes({ sm: 10, md: 11, lg: 12, xl: 14 })
    },
    overline: {
        fontSize: pxToRem(6),
        ...responsiveFontSizes({ sm: 6, md: 8, lg: 9, xl: 10 })
    },
    button: {
        fontSize: pxToRem(10),
        ...responsiveFontSizes({ sm: 10, md: 11, lg: 12, xl: 14 }),
        textTransform: "capitalize",
    },
};

export default typography;
    