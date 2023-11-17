import React from 'react';
import useFetch from '../utils/useFetch';

export default function Fetch({
  uri,
  renderSuccess,
  loadingFallback,
  renderError = (error) => <pre>{JSON.stringify(error, null)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);

  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}
