import React from 'react';
import { StarshipList } from '../sw-components'
import { withRouter } from 'react-router-dom'

 const StarshipsPage = ({ history }) => <StarshipList onItemSelected={id => history.push(`${id}`)} />

export default withRouter(StarshipsPage)
