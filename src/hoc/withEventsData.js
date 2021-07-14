import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

const withEventsData = (WrappedComponent, group) => {
  return function WithEventsDataWrapper() {
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
      axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
    }, []);

    return <WrappedComponent events={events} group={group} />;
  };
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  padding: 40px;
`;

const StyledEvents = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const StyledTitle = styled.h3`
  font-size: 16px;
`;

const StyledInfo = styled.p`
  font-size: 14px;
`;

export const DisplayEvents = ({ events, group }) => {
  return (
    <Wrapper>
      <Title>Group {group} events</Title>
      {console.log(events)}
      {events.map(({ id, type, group, subject, date }, index) => {
        return (
          <StyledEvents>
            <StyledTitle key={id}>{index + 1 + '. ' + subject.toUpperCase()}</StyledTitle>
            <StyledInfo key={id}>{type.charAt(0).toUpperCase() + type.slice(1) + ', ' + date.slice(0, 10) + ' ' + date.slice(12, 16)}</StyledInfo>
          </StyledEvents>
        );
      })}
    </Wrapper>
  );
};

export const DispalyEventsData = withEventsData(DisplayEvents, 'B');
