import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

function ColorInversionFooter() {
    const [color, setColor] = React.useState('neutral');
    return (
        <Sheet
            variant="solid"
            color={color}
            invertedColors
            sx={{
                ...(color !== 'neutral' && {
                    bgcolor: `${color}.800`,
                }),
                flexGrow: 1,
                p: 2,
                borderRadius: { xs: 0},
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton
                    variant="soft"
                    size="sm"
                    onClick={() => {
                        const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

                        const nextColor = colors.indexOf(color);
                        setColor(colors[nextColor + 1] ?? colors[0]);
                    }}
                >
                    <ColorLensRoundedIcon fontSize="small" />
                </IconButton>
                <Divider orientation="vertical" />
                {/*Icon buttons*/}
                <IconButton variant="plain">
                    <FacebookRoundedIcon />
                </IconButton>
                <IconButton variant="plain">
                    kodeCraft.lk
                </IconButton>
                
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'flex-start' },
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 0.5,
                }}
            >
                {/*Card*/}

                <Card
                    variant="soft"
                    size="sm"
                    sx={{
                        flexDirection: { xs: 'row', md: 'column' },
                        minWidth: { xs: '100%', md: 'auto' },
                        gap: 0.5,
                    }}
                >
                    <AspectRatio
                        ratio="22/10"
                        minHeight={80}
                        sx={{ flexBasis: { xs: 200, md: 'initial' } }}
                    >
                        <img alt="" src="https://images.pexels.com/photos/17667643/pexels-photo-17667643/free-photo-of-mar-de-cactos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </AspectRatio>
                    <CardContent>
                        <Typography level="body-sm">Life around UOM</Typography>
                        <Typography level="body-xs" sx={{ mb: 0.5 }}>
                            UOM Blog
                        </Typography>
                    </CardContent>
                </Card>

                {/*Card2*/}

                <Card
                    variant="soft"
                    size="sm"
                    sx={{
                        flexDirection: { xs: 'row', md: 'column' },
                        minWidth: { xs: '50%', md: 'auto' },
                        gap: 0.5,
                    }}
                >
                    <AspectRatio
                        ratio="22/10"
                        minHeight={80}
                        sx={{ flexBasis: { xs: 200, md: 'initial' } }}
                    >
                        <img alt="" src="https://images.pexels.com/photos/17836255/pexels-photo-17836255/free-photo-of-neblina-en-kuelap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </AspectRatio>
                    <CardContent>
                        <Typography level="body-sm">Life around UOC</Typography>
                        <Typography level="body-xs" sx={{ mb: 0.5 }}>
                            UOC Blog
                        </Typography>
                    </CardContent>
                </Card>
                


                <List
                    size="sm"
                    orientation="horizontal"
                    wrap
                    sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
                >
                    <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
                        <ListSubheader>Sitemap</ListSubheader>
                        <List>
                            <ListItem>
                                <ListItemButton>Home</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>KodeCraft</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Contact us</ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
                        <ListSubheader>Easy Access</ListSubheader>
                        <List sx={{ '--ListItemDecorator-size': '32px' }}>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemDecorator>
                                        <img
                                            alt=""
                                            src="https://www.svgrepo.com/show/530664/genetic-research.svg"
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    UOM
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemDecorator>
                                        <img
                                            alt=""
                                            src="https://www.svgrepo.com/show/530664/genetic-research.svg"
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    UOC
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemDecorator>
                                        <img
                                            alt=""
                                            src="https://www.svgrepo.com/show/530664/genetic-research.svg"
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    Ape Bodima Pro
                                    <Chip
                                        variant="soft"
                                        size="sm"
                                        sx={{ minHeight: 20, fontSize: 'xs2', ml: 'auto' }}
                                    >
                                        BETA
                                    </Chip>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemDecorator>
                                        <img
                                            alt=""
                                            src="https://www.svgrepo.com/show/530664/genetic-research.svg"
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    Admin Login
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemDecorator>
                                        <img
                                            alt=""
                                            src="https://www.svgrepo.com/show/530664/genetic-research.svg"
                                            width="24"
                                        />
                                    </ListItemDecorator>
                                    Templates
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </Box>
        </Sheet>
    );
}
export default ColorInversionFooter;