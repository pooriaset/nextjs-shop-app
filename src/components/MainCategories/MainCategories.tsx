'use client';

import { ChevronLeft } from '@mui/icons-material';
import { Box, Grid, Link, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { FC } from 'react';
import Image from '../common/Image';

export interface IMainCategory {
  id: number | string;
  title: string;
  imageUrl: string;
}
export interface MainCategoriesProps {
  items: IMainCategory[];
}
const MainCategories: FC<MainCategoriesProps> = ({ items }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {items.map((item) => {
        const params = new URLSearchParams();
        params.set('categoryId', item.id.toString());

        return (
          <Grid key={item.id} item xs={12} md={3}>
            <Link href={`/search?${params.toString()}`}>
              <Stack spacing={1} alignItems="end">
                <Box
                  width="100%"
                  height={210}
                  sx={{
                    bgcolor: grey[100],
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Image
                    width={350}
                    height={350}
                    src={item.imageUrl}
                    alt={item.title}
                    style={{
                      objectFit: 'contain',
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </Box>

                <Stack direction="row" spacing={1}>
                  {item.title}
                  <ChevronLeft
                    fontSize="small"
                    sx={{
                      transform: (theme) =>
                        theme.direction === 'ltr' ? 'rotate(180deg)' : null,
                    }}
                  />
                </Stack>
              </Stack>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MainCategories;
