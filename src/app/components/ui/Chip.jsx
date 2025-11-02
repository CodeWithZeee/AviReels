"use client";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function BasicChips({ label = "Our mission", ...props }) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label={label} {...props} />
    </Stack>
  );
}
