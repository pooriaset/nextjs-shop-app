import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ISliderItem } from '@/components/HomePageSlider/types';
import { getClient } from '@/graphql/clients/serverSideClient';
import { GET_PUBLISHED_PAGES_LIST } from '@/graphql/queries/pages';
import { GET_TOP_BANNER } from '@/graphql/queries/sliders';
import { IPageListItem } from '@/graphql/types/common';
import {
  GetPublishedPagesListQuery,
  GetTopBannerQuery,
} from '@/graphql/types/graphql';
import { FC, ReactNode } from 'react';

export interface BaseLayoutProps {
  children: ReactNode;
}

const getPagesList = async (): Promise<IPageListItem[]> => {
  const { data } = await getClient().query<GetPublishedPagesListQuery>({
    query: GET_PUBLISHED_PAGES_LIST,
  });

  return data.pages?.edges?.map((item) => item.node) || [];
};

const getTopBanner = async () => {
  const { data } = await getClient().query<GetTopBannerQuery>({
    query: GET_TOP_BANNER,
  });

  const _item = data?.sliderCategories?.nodes?.[0]?.sliders?.edges?.[0]?.node;
  if (_item && _item?.featuredImage?.node.url) {
    const data: ISliderItem = {
      id: _item.id,
      imageUrl: _item.featuredImage?.node.url,
      url: _item.url,
      title: _item.title!,
    };
    return data;
  }

  return null;
};

const BaseLayout: FC<BaseLayoutProps> = async ({ children }) => {
  const pagesList = await getPagesList();
  const topBanner = await getTopBanner();

  return (
    <>
      <Header topBanner={topBanner} />
      {children}
      <Footer pages={pagesList} />
    </>
  );
};

export default BaseLayout;
