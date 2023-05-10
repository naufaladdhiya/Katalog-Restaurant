/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  pause();
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  const reviewText = 'kun kab';

  I.seeElement('.resto-item_content');
  I.click(locate('.resto-item_content').first());

  I.seeElement('.form-review form');
  I.fillField('inputName', 'test review');
  I.fillField('inputReview', reviewText);
  I.click('#submit-review');

  I.waitForResponse('https://restaurant-api.dicoding.dev/review');
  const lastReview = locate('.body-review').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
