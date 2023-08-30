import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => { // props = <TopNavigationBar topics = {topics} />
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic) => { // maps over the topics array from mock file received from the parent (homeroute).
        return (
          <TopicListItem
            key={topic.id}
            slug={topic.slug}
            title={topic.title}
            id={topic.id}
            topic={props.topic}
            dispatch={props.dispatch}
            ACTIONS={props.ACTIONS}
          />
        );
      })}
    </div>
  );
};


export default TopicList;