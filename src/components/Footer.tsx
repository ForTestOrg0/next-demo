'use client';

import { Container } from "@/ui";

export default function Footer({
  reactVersion,
  nextVersion,
}: {
  reactVersion: string;
  nextVersion: string;
}) {
  return (
    <Container>
      <div>Subscan © 2023 - Developed by Subscan Team</div>
    </Container>
  );
}
