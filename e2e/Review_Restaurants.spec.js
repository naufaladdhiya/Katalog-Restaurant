/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  const reviewText = 'testing';

  I.waitForElement('.resto-item_content', 10);
  I.seeElement('.resto-item_content');

  I.click(locate('.resto-item_content').first());

  I.seeElement('.form-review form');
  I.fillField('inputName', 'test review');
  I.fillField('inputReview', reviewText);
  I.click('#submit-review');

  const lastReview = locate('.body-review').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
