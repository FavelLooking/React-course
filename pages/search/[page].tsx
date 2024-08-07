import { GetServerSideProps } from 'next';
import { ApiResponse } from '../../src/interfaces/interfaces';
import App from '../../components/App/App';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.params!;
  const searchQuery = context.query.q || '';

  try {
    const res = await fetch(
      `https://stapi.co/api/v2/rest/astronomicalObject/search?pageSize=10&pageNumber=${Number(page) - 1}`,
      {
        method: 'POST',
        body: new URLSearchParams({
          name: searchQuery as string,
        }),
      },
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
      props: {
        serversideData: { astronomicalObjects: [], page: { totalPages: 0 } },
      },
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
