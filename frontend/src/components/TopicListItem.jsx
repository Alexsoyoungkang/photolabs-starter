import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topicOnClick = () => {
    props.dispatch({ type: props.ACTIONS.SET_NAV_TOPIC, topic: props.id });
  };
  return (
    <div className="topic-list__item">
      <span onClick={topicOnClick}>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
