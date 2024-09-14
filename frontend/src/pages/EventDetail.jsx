import React from 'react';
import { useRouteLoaderData, json, redirect } from 'react-router-dom';

import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');

  return (
    <EventItem event={data.event} />
  );
}

export default EventDetailPage;

export async function loader({ params }) {
  const evenId = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + evenId);

  if (!response.ok){
    throw json(
      { message: 'Could not fetch details for selected event.' },
      { status: 500 } 
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const evenId = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + evenId, {
    method: request.method,  // 'DELETE'
  });

  if (!response.ok){
    throw json(
      { message: 'Could not delete event.' },
      { status: 500 } 
    );
  }
  return redirect('/events');
}