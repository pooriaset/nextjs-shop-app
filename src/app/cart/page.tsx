import { ChevronLeft } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mt: 5,
        gap: 2,
      }}
    >
      <Box
        sx={{
          opacity: 0.7,
          filter: "grayscale(100%)",
        }}
      >
        <Image
          src="/assets/images/cart/unsuccess.svg"
          alt="NotFound"
          width={105}
          height={105}
        />
      </Box>
      <Typography variant="h6">سبد خرید شما خالی است</Typography>
      <Button
        component={Link}
        href="/search"
        endIcon={<ChevronLeft />}
        variant="outlined"
      >
        محصولات
      </Button>
    </Box>
  );
};

export default Page;
