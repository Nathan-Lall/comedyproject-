import { gql } from '@apollo/client';

export const CREATE_COMEDIAN = gql`
	mutation CreateComedian($firstName: String!, $lastName: String!) {
	  createComedian(first_name: $firstName, last_name: $lastName) {
	    _id
	    first_name
	    last_name
	  }
	}
`;

export const UPDATE_COMEDIAN = gql`
mutation UpdateComedian($comedianId: String!, $firstName: String!, $lastName: String!) {
  updateComedian(comedianId: $comedianId, first_name: $firstName, last_name: $lastName) {
    _id
    first_name
    last_name
  }
}
`;

export const DELETE_COMEDIAN = gql`
mutation DeleteComedian($comedianId: String!) {
  deleteComedian(comedianId: $comedianId) {
    _id
    first_name
  }
}
`;

export const CREATE_SHOW = gql`
mutation CreateShow($date: String!, $city: String!, $venue: String!, $time: String!, $comedian: String!) {
  createShow(date: $date, city: $city, venue: $venue, time: $time, comedian: $comedian) {
    date
    city
    time
    venue
    _id
  }
}
`;

