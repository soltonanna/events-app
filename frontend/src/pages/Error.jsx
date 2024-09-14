import React from 'react';
import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred !';
  let message = 'Could not find this page...';

  if (error.status === 500) {
    // Version:2
    // message = JSON.parse(error.data).message;
    // Version:3
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not Found';
    message = 'Could not find resource or page';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>

  );
}

export default ErrorPage;