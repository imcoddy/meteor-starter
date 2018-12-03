import {
	Links
} from '/imports/api/links/links.js';
import {
	Meteor
} from 'meteor/meteor';
import './info.html';

Template.info.onCreated(() => {
	Meteor.subscribe('links.all');
});

Template.info.helpers({
	links() {
		return Links.find({});
	},
	isReady: function() {
		return Template.instance().pagination.ready();
	},
	templatePagination: function() {
		return Template.instance().pagination;
	},
	documents: function() {
		return Template.instance().pagination.getPage();
	},
	// optional helper used to return a callback that should be executed before changing the page
	clickEvent: function() {
		return function(e, templateInstance, clickedPage) {
			e.preventDefault();
			console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
		};
	}
});

Template.info.events({
	'submit .info-link-add': function(event) {
		event.preventDefault();

		const target = event.target;
		const title = target.title;
		const url = target.url;

		Meteor.call('links.insert', title.value, url.value, (error) => {
			if (error) {
				alert(error.error);
			} else {
				title.value = '';
				url.value = '';
			}
		});
	},
});

Template.info.onCreated(function() {
	this.pagination = new Meteor.Pagination(Links, {
		sort: {
			_id: -1
		}
	});
});