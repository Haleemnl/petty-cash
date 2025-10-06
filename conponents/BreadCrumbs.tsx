


"use client";

import { Box, Breadcrumbs, Flex, Text } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
    const pathname = usePathname();

    // Split path into segments & build hrefs
    const segments = pathname
        .split("/")
        .filter(Boolean) // remove empty strings
        .map((seg, i, arr) => {
            const href = "/" + arr.slice(0, i + 1).join("/");
            return {
                title: seg.charAt(0).toUpperCase() + seg.slice(1), // Capitalize
                href,
            };
        });

    return (
        <Flex align='center' gap={15} >
            {/* <Text fz={10} mt={24} mb={32}>PETTY CASH &gt;</Text> */}

            <Breadcrumbs separator=">" mt={24} mb={32}>
                {segments.map((item, index) => {
                    const isLast = index === segments.length - 1;

                    return (
                        <Link
                            href={item.href}
                            key={index}
                            style={{
                                cursor: isLast ? "default" : "pointer",
                                pointerEvents: isLast ? "none" : "auto",
                                textDecoration: "none",
                            }}
                        >


                            <Text
                                fz={10}
                                tt="uppercase"
                                fw={isLast ? 600 : 500}
                                c={isLast ? "#2aed57" : "black"}
                            >
                                {item.title}
                            </Text>
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Flex >
    );
}
