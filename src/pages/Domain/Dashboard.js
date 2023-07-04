import React from 'react';
import {
    Box,
    Typography,
    Stack,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Dashboard () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
        <Box
            sx={{
                pb: 25,
                px: matchUpMd ? 27 : matchUpSm ? 9 : 2.5
            }}
        >
            <Stack gap={15}>
                <Stack
                    flexDirection="row"
                    justifyContent="center"
                    sx={{
                        position: 'relative',
                        top: matchUpSm ? 200 : 100,
                        zIndex: 0,
                        px: matchUpMd ? 5 : 3
                    }}
                >
                    <Box 
                        component="img" 
                        src="/images/Domain.svg" 
                        sx={{
                            maxWidth: matchUpMd ? 1200 : 600,
                            width: '100%'
                        }}
                    />
                </Stack>
                <Stack
                    flexDirection="row"
                    justifyContent="center"
                    sx={{
                        zIndex: 1,
                        position: 'relative',
                        // top: 50,
                        // top: matchUpMd ? -80 : matchUpSm ? -30 : 30,
                    }}
                >
                    <Box 
                        component="img"
                        src="/images/domain-dashboard.png"
                        sx={{
                            maxWidth: '100%'
                        }}
                    />
                </Stack>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            maxWidth: 680
                        }}
                        gap={4}
                    >
                        <Box>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    textAlign: 'center',
                                    fontWeight: 700
                                }}
                            >Introducting H3M Domain</Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    textAlign: 'center',
                                    color: '#777E90',
                                    fontWeight: 700
                                }}
                            >
                                An easy way to own, manage, and host virtual experiences around the world. 
                                It’s AirBNB, but for the virtual world.
                            </Typography>
                        </Box>
                        <Typography>Coming Soon</Typography>
                        {/* <Stack
                            flexDirection={matchUpSm ? "row" : "column"}
                            alignItems="center"
                            justifyContent="center"
                            gap={1.5}
                        >
                            <Stack
                                sx={{
                                    p: 1,
                                    bgcolor: '#FFFFFF',
                                    border: '0.658887px solid #000000',
                                    borderRadius: 2
                                }}
                            >
                                <Box 
                                    component="img"
                                    src="/images/appstore.png"
                                />
                            </Stack>
                            <Stack
                                sx={{
                                    p: 1,
                                    bgcolor: '#FFFFFF',
                                    border: '0.658887px solid #000000',
                                    borderRadius: 2
                                }}
                            >
                                <Box 
                                    component="img"
                                    src="/images/googlestore.png"
                                />
                            </Stack>
                        </Stack> */}
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}