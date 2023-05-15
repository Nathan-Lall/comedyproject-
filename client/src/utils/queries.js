import { gql } from '@apollo/client';

	export const COMEDIAN_QUERY = gql`
	query Comedians {
	  comedians {
	    _id
	    first_name
	    last_name
	    shows {
	      city
	      venue
	      date
	      time
	    }
	  }
	}
`;
