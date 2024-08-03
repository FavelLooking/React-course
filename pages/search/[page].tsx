import { GetStaticPaths, GetStaticProps } from 'next';
import { ApiResponse } from '../../src/interfaces/interfaces';
import App from '../../components/App/App';
import React from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const totalPages = 100;

    const paths = Array.from({ length: totalPages }, (_, i) => ({
      params: { page: (i + 1).toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error fetching data for paths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params!;

  try {
    if (!page) {
      throw new Error(`Sorry, no page`);
    }
    const res = await fetch(
      `https://stapi.co/api/v2/rest/astronomicalObject/search?pageSize=10&pageNumber=${Number(page) - 1}`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const serversideData: ApiResponse = await res.json();

    return {
      props: { serversideData },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { serversideData: { astronomicalObjects: [] } },
    };
  }
};

interface PageProps {
  serversideData: ApiResponse;
}

const SearchPage: React.FC<PageProps> = ({ serversideData }) => {
  return <App serversideData={serversideData} />;
};

export default SearchPage;
