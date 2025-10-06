'use client'

import {
    IconBell,
    IconBookmark,
    IconChevronDown,
    IconCirclePlus,
    IconSearch,
    IconStopwatch,
    IconTablePlus,
} from '@tabler/icons-react';
import {
    Avatar,
    Box,
    Burger,
    Center,
    Container,
    Drawer,
    Group,
    Menu,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';

const links = [
    { link: '/about', label: 'Dashboard' },
    { link: '/about', label: 'Files' },
    { link: '/about', label: 'Tasks' },
    {
        link: '#1',
        label: 'Communications',
        links: [
            { link: '/docs', label: 'Documentation' },
            { link: '/resources', label: 'Resources' },
            { link: '/community', label: 'Community' },
            { link: '/blog', label: 'Blog' },
        ],
    },
    { link: '/about', label: 'People' },
    {
        link: '#2',
        label: 'FAI',
        links: [
            { link: '/faq', label: 'FAQ' },
            { link: '/demo', label: 'Book a demo' },
            { link: '/forums', label: 'Forums' },
        ],
    },
];

export function HeaderMenu() {
    const [opened, { toggle, close }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal
                >
                    <Menu.Target>
                        <a href={link.link} className={classes.link}>
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size={14} stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a key={link.label} href={link.link} className={classes.link}>
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container size={1250}>
                <div className={classes.inner}>
                    {/* Logo + Desktop nav */}
                    <div className={classes.left}>
                        <Link href="/">
                            <Image src="/logo.jpg" alt="Logo" width={75} height={50} />
                        </Link>

                        {/* Desktop navigation */}
                        <Group gap={5} visibleFrom="sm" ml={10}>
                            {items}
                        </Group>
                    </div>

                    {/* Icons */}
                    <div className={classes.innerIcons}>
                        <IconStopwatch color="#717171" size={17} />
                        <IconBell color="#717171" size={17} />
                        <IconBookmark color="#717171" size={17} />
                        <IconSearch color="#717171" size={17} />
                        <IconCirclePlus color="#717171" size={17} />

                        <span className={classes.innerAvatars}>
                            <Avatar color="cyan" radius="xl" size={32}>
                                AA
                            </Avatar>
                            <IconTablePlus color="#717171" size={17} />
                        </span>
                    </div>

                    {/* Burger (mobile) */}
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>

            {/* Drawer for mobile nav */}
            <Drawer
                opened={opened}
                onClose={close}
                padding="md"
                size="75%"
                title="Menu"
                hiddenFrom="sm"
            >
                <Box className={classes.mobileNav}>{items}</Box>
            </Drawer>
        </header>
    );
}
