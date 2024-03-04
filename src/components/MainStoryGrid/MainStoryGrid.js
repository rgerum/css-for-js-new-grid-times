import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
    @media ${QUERIES.tabletAndUp} {
        grid-template-areas:
        'main-story secondary-stories'
        'advertisement advertisement'
        'opinion-stories opinion-stories';
        grid-template-columns: 2fr 1fr;
        gap: 48px 0;
        
    }
    @media ${QUERIES.laptopAndUp} {
        grid-template-areas:
        'main-story secondary-stories opinion-stories'
        'main-story advertisement advertisement';
        grid-template-columns: 4fr 3fr 2fr;
        gap: 0;
    }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
    
    @media ${QUERIES.tabletAndUp} {
        border-right: 1px solid var(--color-gray-300);
        padding-right: 24px;
        margin-right: 24px;
    }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

    @media ${QUERIES.laptopAndUp} {
        border-right: 1px solid var(--color-gray-300);
        padding-right: 24px;
        margin-right: 24px;
    }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

//& a, & ${SecondaryStory}:not(:last-child), & ${OpinionStory}:not(:last-child) {
const StoryList = styled.div`
  display: flex;
  flex-direction: column;
    
  & a:not(:last-child):after {
      content: '';
      display: block;
      height: 16px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--color-gray-300);
  }

  @media ${QUERIES.tabletOnly} {
      ${OpinionSection} & {
          display: flex;
          flex-direction: row;
          gap: 32px;
      }
      ${OpinionSection} & a:not(:last-child):after {
       border-bottom: none;
      }
  }  
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

    @media ${QUERIES.laptopAndUp} {
        border-top: 1px solid var(--color-gray-300);
        padding-top: 24px;
        margin-top: 24px;
        margin-bottom: 6px;
    }
`;

export default MainStoryGrid;
