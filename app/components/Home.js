import React from 'react';
import Topics from './Topics';
import AddSource from './AddSource';
import SelectedSources from './SelectedSources';
import NewsList from './NewsList';

const Home = props => (
  <div>
    <Topics
      className="topics"
      topics={props.topics}
      onTopicSearch={props.onTopicSearch}
      onTopicRemoval={props.onTopicRemoval}
    />
    <AddSource onAddSource={props.onAddSource} />
    <SelectedSources selectedSources={props.selectedSources} />
    <NewsList newsArticles={props.articles} />
  </div>
);
