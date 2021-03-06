import React from 'react';
import { ReactTinyLink } from 'react-tiny-link';
import PropTypes from 'prop-types';
import StyledMedia from './styles';

const Media = ({ media }) => (
  <StyledMedia>
    <ReactTinyLink
      cardSize="large"
      showGraphic
      maxLine={2}
      minLine={1}
      url={media.url}
    />
  </StyledMedia>
);

Media.propTypes = {
  media: PropTypes.shape({
    url: PropTypes.string
  }).isRequired
};
export default Media;
