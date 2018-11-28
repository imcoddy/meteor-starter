// Tests for the links publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'chai';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Links } from '../links.js';
import './publications.js';

describe('links publications', () => {
  beforeEach(() => {
    Links.remove({});
    Links.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com',
    });
  });

  describe('links.all', () => {
    it('sends all links', (done) => {
      const collector = new PublicationCollector();
      collector.collect('links.all', (collections) => {
        assert.equal(collections.links.length, 1);
        done();
      });
    });
  });
});
