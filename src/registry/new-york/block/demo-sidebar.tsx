'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger
} from '@/registry/new-york/ui/sidebar';

import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

// Menu items.
const items = [
    {
        title: 'Home',
        url: '#',
        icon: Home
    },
    {
        title: 'Inbox',
        url: '#',
        icon: Inbox
    },
    {
        title: 'Calendar',
        url: '#',
        icon: Calendar
    },
    {
        title: 'Search',
        url: '#',
        icon: Search
    },
    {
        title: 'Settings',
        url: '#',
        icon: Settings
    }
];

export default function AppSidebar() {
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <header className='flex h-12 items-center justify-between px-4'>
                    <SidebarTrigger />
                </header>
            </SidebarInset>
        </SidebarProvider>
    );
}