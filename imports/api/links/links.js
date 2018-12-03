// Definition of the links collection
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

import {
	Mongo,
} from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

console.log('load from both');

const Schemas = {};

Schemas.Link = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	url: {
		type: String,
		label: "URL",
		max: 200
	}
});

Links.attachSchema(Schemas.Link);

Links.before.insert(function(userId, doc) {
	doc.createdAt = Date.now();
});

Links.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = Date.now();
});