// All links-related publications

import {
	Meteor
} from 'meteor/meteor';
import {
	Links
} from '../links.js';
import {
	publishPagination
} from 'meteor/kurounin:pagination';

publishPagination(Links);
Meteor.publish('links.all', () => Links.find());