/** @format */

/**
 * Internal dependencies
 */
import { combineReducers } from 'state/utils';
import connectedAccounts from './connected-accounts/reducer';
import productList from './product-list/reducer';
import subscriptions from './subscriptions/reducer';
import earnings from './earnings/reducer';
import subscribers from './subscribers/reducer';

const reducers = {
	subscriptions,
	earnings,
	subscribers,
	connectedAccounts,
	productList,
};

export default combineReducers( reducers );
