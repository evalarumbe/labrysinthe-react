import React from 'react';
import PropTypes from 'prop-types';
import { withRouteData } from 'react-static';
import styled from 'styled-components';
//
import H1 from '../common/H1';
import H2 from '../common/H2';
import H3 from '../common/H3';
import Show from '../components/Show';
import { ShowsStyles, StyledH3Styles, UlStyles } from './Shows-styles';
//
const Section = styled.section`
  ${ShowsStyles}
`;

const StyledH3 = styled(H3)`
  ${StyledH3Styles}
`;

const Ul = styled.ul`
  ${UlStyles}
`;

/**
 * TODO: Generate keys from data. These have been added manually.
 */
const Li = styled.li`
  list-style-type: none;
  list-style-position: outside;
`;

const Shows = ({ id }) => (
  <section id={id}>
    <H1>Shows</H1>
    {/* Show conditionally:
    ... */}
    {/* <Section aria-labelledby="shows-upcoming">
      <H2 id="shows-upcoming">Upcoming</H2>
      <Ul> */}
        {/* <Li key="2019-XX-XX">
          <Show
            title="Fire Loves Sugar: EP Release Party"
            startDate="To be announced"
            startYear="2019"
            ctaText="JOIN THE NEWSLETTER"
            ctaUrl="#newsletter"
          />
        </Li> */}
      {/* </Ul>
    </Section> */}

    {/* ...
    I only want H2#shows-previous to be visible if there are also upcoming ones to distinguish from(which means the aria-labelledby="shows-previous" attrib on its parent section should also change).
    */}
    <Section aria-labelledby="shows-previous">
      <H2 id="shows-previous">Previous</H2>
      <StyledH3>2019</StyledH3>
      <Ul>
        <Li key="2019-05-16">
          <Show
            title="Step Higher"
            startDate="Thursday, 16 MAY 23:00&ndash;1:30"
            startYear="2019"
            venueName="VOID Berlin"
            venueSecret={false}
            venueUrl="http://www.void-club.de/"
            venueAddress="Wiesenweg 5&ndash;9, 10365 Berlin"
            venueGMapsUrl="https://goo.gl/maps/u3kKsYuZQqGmseCF6"
            fbEventUrl="https://www.facebook.com/events/207014390242505/?event_time_id=207014406909170"
            ctaText="HEAR THE SET"
            ctaUrl="#music"
          />
        </Li>
        <Li key="2019-02-14">
          <Show
            title="Fire Loves Sugar: EP Release Hangout"
            startDate="Thursday, 14 FEB"
            startYear="2019"
            venueName="Private event"
          />
          {/* Previously displayed when 14 Feb show was upcoming
            venueSecret
            ctaText="EMAIL FOR SECRET ADDRESS"
            ctaUrl="mailto:labrysinthe@gmail.com"
          */}
        </Li>
      </Ul>
      <StyledH3>2018</StyledH3>
      <Ul>
        <Li key="2018-12-15">
          <Show
            title="PMS&mdash;The L-Night Party"
            hostName="L-Night"
            hostUrl="https://www.meetup.com/en-AU/Lnightberlin/"
            startDate="Saturday, 15 DEC"
            startYear="2018"
            venueName="Hausprojekt K9"
            venueSecret={false}
            venueUrl="http://www.kinzig9.de/"
            venueAddress="Kinzigstraße 9, 10247 Berlin"
            venueAddress2="Entrance through Café Liberación"
            venueGMapsUrl="https://www.google.com/maps/place/Kinzig9/@52.5137004,13.4663543,15z/data=!4m5!3m4!1s0x0:0x5eb804e91e785a6b!8m2!3d52.5137004!4d13.4663543"
            fbEventUrl="https://www.facebook.com/events/192580104960799/"
            ctaText="HEAR THE SET"
            ctaUrl="#music"
          />
        </Li>
      </Ul>
      <StyledH3>2017</StyledH3>
      <Ul>
        <Li key="2017-11-04">
          <Show
            title="Electronic Events Experience Exchange (EEEE&nbsp;Party!!!!)"
            hostName="Fractal Portal"
            hostUrl="http://www.fractalportal.com/"
            startDate="Saturday, 4 NOV"
            startYear="2017"
            venueName="Velvet Monkeys Club"
            venueSecret={false}
            venueUrl="https://www.facebook.com/Velvet-Monkey-erlebnisgastronomie-1823655237858506/"
            venueAddress="Herzbergstraße 53b, 10365 Berlin"
            venueGMapsUrl="https://goo.gl/maps/CkDUTdspCkL2"
            fbEventUrl="https://www.facebook.com/events/351769011903873/"
          />
        </Li>
      </Ul>
    </Section>
  </section>
);

Shows.propTypes = {
  id: PropTypes.string
};

export default withRouteData(Shows);
