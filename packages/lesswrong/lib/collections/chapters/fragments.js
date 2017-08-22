import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment ChaptersFragment on Chapter {
    _id
    createdAt
    title
    subtitle
    description
    number
    sequenceId
    sequence {
      ...SequencesPageFragment
    }
    postIds
    posts {
      ...PostsList
      lastVisitedAt
    }
  }
`);
